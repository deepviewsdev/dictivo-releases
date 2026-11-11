#!/usr/bin/env node
// Mirrors the current Dictivo release into this repository's GitHub Releases.
//
// Sources (both public):
//   https://dictivo.app/downloads.json   version, file names, URLs and SHA-256 of the installers
//   data/release-notes.mjs in Rswcf/dictivo-site   the release notes shown on dictivo.app/changelog/
//
// Commands:
//   latest-version             print the version listed in downloads.json
//   prepare <version> <dir>    download the installers into <dir>/files, check each SHA-256,
//                              write <dir>/notes.md and <dir>/files/SHA256SUMS.
//                              Prints "ready", or "skip: <reason>" when the site has no notes yet.
//   changelog                  print CHANGELOG.md for every version in the release notes
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The overrides exist for local tests only.
const DOWNLOADS_JSON = process.env.DOWNLOADS_JSON_URL || "https://dictivo.app/downloads.json";
const RELEASE_NOTES_URL =
  process.env.RELEASE_NOTES_URL || "https://raw.githubusercontent.com/Rswcf/dictivo-site/main/data/release-notes.mjs";

async function fetchOk(url) {
  const response = await fetch(url, { headers: { "User-Agent": "dictivo-releases-sync" } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response;
}

async function downloads() {
  const manifest = await (await fetchOk(DOWNLOADS_JSON)).json();
  if (!/^\d+\.\d+\.\d+$/.test(manifest.version || "")) throw new Error(`downloads.json: bad version ${manifest.version}`);
  if (!Array.isArray(manifest.artifacts) || manifest.artifacts.length === 0) throw new Error("downloads.json: no artifacts");
  return manifest;
}

async function releaseNotes() {
  const source = await (await fetchOk(RELEASE_NOTES_URL)).text();
  if (/^\s*import\s/m.test(source)) throw new Error("release-notes.mjs now has imports; update this script");
  const module = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
  return module.RELEASE_NOTES;
}

const versionParts = (version) => version.split(".").map(Number);
const newestFirst = (a, b) => {
  const [left, right] = [versionParts(a), versionParts(b)];
  const index = left.findIndex((part, i) => part !== right[i]);
  return index < 0 ? 0 : right[index] - left[index];
};

const TRUST_LINES = [
  "- **Mac:** one universal app for Apple Silicon and Intel. It is signed with an Apple Developer ID and notarized by Apple.",
  "- **Windows x64:** the EXE and MSI installers are not Authenticode-signed. SmartScreen or Microsoft Edge may warn before they run. [Why, and what to do](https://dictivo.app/docs/install-and-uninstall/).",
  "- Each SHA-256 in the table above matches [dictivo.app/downloads.json](https://dictivo.app/downloads.json). Check a download with `shasum -a 256 <file>` (Mac) or `Get-FileHash <file>` (Windows PowerShell).",
];

async function prepare(version, dir) {
  const manifest = await downloads();
  if (manifest.version !== version) throw new Error(`downloads.json lists ${manifest.version}, not ${version}`);
  const notes = (await releaseNotes())[version];
  if (!notes) {
    console.log(`skip: dictivo.app has no release notes for ${version} yet`);
    return;
  }

  const filesDir = join(dir, "files");
  mkdirSync(filesDir, { recursive: true });
  const sums = [];
  const rows = [];
  for (const artifact of manifest.artifacts) {
    if (!/^[A-Za-z0-9._-]+$/.test(artifact.fileName)) throw new Error(`unsafe file name ${artifact.fileName}`);
    if (!artifact.url.startsWith("https://downloads.dictivo.app/")) throw new Error(`unexpected host ${artifact.url}`);
    const bytes = Buffer.from(await (await fetchOk(artifact.url)).arrayBuffer());
    const sha256 = createHash("sha256").update(bytes).digest("hex");
    if (sha256 !== artifact.sha256) throw new Error(`${artifact.fileName}: SHA-256 ${sha256} does not match downloads.json ${artifact.sha256}`);
    writeFileSync(join(filesDir, artifact.fileName), bytes);
    sums.push(`${sha256}  ${artifact.fileName}`);
    rows.push(`| ${artifact.label} | \`${artifact.fileName}\` | \`${sha256}\` |`);
  }
  writeFileSync(join(filesDir, "SHA256SUMS"), `${sums.join("\n")}\n`);

  const body = [
    `**${notes.title}**`,
    "",
    ...notes.bullets.map((bullet) => `- ${bullet}`),
    "",
    "### Downloads",
    "",
    "| Installer | File | SHA-256 |",
    "| --- | --- | --- |",
    ...rows,
    "",
    ...TRUST_LINES,
    "",
    "On a Mac you can also install with Homebrew: `brew install --cask deepviewsdev/tap/dictivo`",
    "",
    `Released on ${notes.date}. All release notes: [dictivo.app/changelog](https://dictivo.app/changelog/).`,
    "",
  ].join("\n");
  writeFileSync(join(dir, "notes.md"), body);
  console.log("ready");
}

async function changelog() {
  const notes = await releaseNotes();
  const lines = [
    "# Dictivo changelog",
    "",
    "Generated from the release notes on [dictivo.app/changelog](https://dictivo.app/changelog/). Do not edit by hand.",
    "",
  ];
  for (const version of Object.keys(notes).sort(newestFirst)) {
    const { date, title, bullets } = notes[version];
    lines.push(`## ${version} (${date})`, "", `**${title}**`, "", ...bullets.map((bullet) => `- ${bullet}`), "");
  }
  process.stdout.write(lines.join("\n"));
}

const [command, ...args] = process.argv.slice(2);
if (command === "latest-version") console.log((await downloads()).version);
else if (command === "prepare" && args.length === 2) await prepare(...args);
else if (command === "changelog") await changelog();
else {
  console.error("usage: sync-release.mjs latest-version | prepare <version> <dir> | changelog");
  process.exit(2);
}
