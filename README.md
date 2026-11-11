# Dictivo releases

[Dictivo](https://dictivo.app/) is an offline dictation app for Mac and Windows. Press a shortcut, speak, and Dictivo pastes the text into the app you are using. In Local mode, speech recognition runs on your device and audio stays there.

This repository publishes Dictivo's installers and release notes. It does not contain the app's source code. Dictivo is proprietary software; its use is governed by the [Terms of Service](https://dictivo.app/terms/).

## Download

- **From the website:** [dictivo.app](https://dictivo.app/) has the download buttons, prices and the free trial.
- **From this repository:** each [release](https://github.com/deepviewsdev/dictivo-releases/releases/latest) has the same installers as the website, with their SHA-256 checksums.
- **Mac, with Homebrew:**

  ```sh
  brew install --cask deepviewsdev/tap/dictivo
  ```

| Platform | Installer | Signing |
| --- | --- | --- |
| Mac (Apple Silicon and Intel) | Universal DMG | Signed with an Apple Developer ID and notarized by Apple |
| Windows 10 and 11, x64 | EXE or MSI | Not Authenticode-signed. SmartScreen or Microsoft Edge may warn before it runs. [What to do](https://dictivo.app/docs/install-and-uninstall/) |

There is no ARM build for Windows. Full requirements: [dictivo.app/docs/system-requirements](https://dictivo.app/docs/system-requirements/).

## Check a download

Every file in a release is the same file as on [dictivo.app/downloads.json](https://dictivo.app/downloads.json), and the release lists its SHA-256. Compare it with the file you downloaded:

```sh
shasum -a 256 Dictivo_*_universal.dmg        # Mac
```

```powershell
Get-FileHash .\Dictivo_*_x64-setup.exe        # Windows PowerShell
```

## Updates

Dictivo updates itself. The [changelog](CHANGELOG.md) repeats the release notes from [dictivo.app/changelog](https://dictivo.app/changelog/).

## How this repository stays current

A daily GitHub Action reads [dictivo.app/downloads.json](https://dictivo.app/downloads.json). When it lists a version that has no release here, the Action downloads the installers from `downloads.dictivo.app`, checks each SHA-256 against the published value, and publishes the release with the notes from the website. It waits until the website has notes for that version.

## Help and security

- Documentation: [dictivo.app/docs](https://dictivo.app/docs/)
- Questions: support@dictivo.app
- Security reports: see [SECURITY.md](SECURITY.md)

Issues are turned off in this repository. Please write to support@dictivo.app.
