# Dictivo changelog

Generated from the release notes on [dictivo.app/changelog](https://dictivo.app/changelog/). Do not edit by hand.

## 0.3.57 (2026-10-21)

**More reliable automatic paste on Windows.**

- Windows now sends paste directly instead of starting a helper process. It waits for you to release the shortcut keys before sending the text to the active app.
- If you switch windows or keep the shortcut held, Dictivo leaves the transcript on the clipboard for you to paste. It does not retry automatic input, which could insert the text twice.
- Paste Last now tells you whether the text was sent to the active app or copied for manual paste. Mac keeps its existing automatic paste behavior.

## 0.3.54 (2026-10-10)

**An optional reminder before your Local trial ends.**

- During setup, or in Settings, Account & Billing while your Local trial runs, you can leave an email address and Dictivo sends you one email two days before the trial ends. It is optional, it is the only email you get, and the address is deleted when it is sent. Cancel it in the app or through the link in the email.
- If your Local trial ends while you dictate with Cloud Fast, Dictivo now says so once, in one line, without a price or a buy button. Press OK and it does not come back.
- On Windows, Local dictation now works on PCs without Microsoft's Visual C++ Redistributable: Dictivo ships the files its local engine needs, and if the GPU engine cannot start, it switches to the CPU engine by itself instead of showing system error windows.
- To see where setup gets stuck, the app now also reports, without any content, when it is first opened on a new install and whether microphone access (and on Mac, accessibility access) was granted, denied or recorded no sound. This is separate from the usage statistics setting, and never includes audio, text, file or app names.
- The privacy policy and the security page describe the reminder and these reports.

## 0.3.53 (2026-10-09)

**Setup on Windows reports what really happened, and the Local price shows its date.**

- Account & Billing now says until when the current Dictivo Local price applies and what it costs after that, in the same words as this website, and shows the new price by itself from that day on.
- The shortcut test during setup no longer passes when nobody spoke. Speech recognition can turn silence into a word such as "You."; the test now says it heard no words and asks you to check your microphone.
- Right after setup, the main window shows the model you downloaded, not one that is not installed. Until Dictivo has checked, it shows a dash instead of a guess.
- On Windows, when Dictivo starts at login it no longer keeps the keyboard focus in its hidden window, so you can type in other apps right away.

## 0.3.52 (2026-09-27)

**Start at login, and your clipboard comes back after pasting.**

- Dictivo can start when you log in, in the background and without opening its window, so your dictation shortcut works without opening Dictivo first. New installs ask during setup. After this update, turn it on in Settings, General.
- After Dictivo pastes a transcript for you, what you had copied before goes back on the clipboard a moment later, and the companion says whether the transcript was pasted, copied or kept in Dictivo. Transcripts stay out of Windows clipboard history and cloud clipboard.
- Choose your microphone in Settings or during setup, and test it with a three-second recording. If it is not connected, Dictivo uses the default microphone and tells you.
- Choose the language you speak, or keep automatic detection. With a language chosen, Local dictation also uses the words in your Dictionary to catch names and terms.
- Choose how long History keeps transcripts in Settings, Privacy: the last 100, 30 days, or not at all. Deleted transcripts are erased from the history file on this computer, not just hidden.
- History now keeps your last 100 transcripts unless you choose otherwise. The first time this version starts, older transcripts are deleted and cannot be recovered. History already showed only the last 100.
- On Mac, clicking Dictivo in the Dock opens its window again after you closed it. On Windows, automatic paste no longer gives up on slower computers. More of Settings appears in your display language.
- On Windows, if you later install an update by running its installer yourself, turn Start at login back on in Settings, General. Updates from inside the app keep it.

## 0.3.51 (2026-09-26)

**Lock Cloud Fast, so a stray click never sends a recording to the cloud.**

- New in Settings, Privacy: Lock Cloud Fast. While it is locked, Cloud Fast cannot be selected and no recording you start is uploaded. A Cloud Fast recording already in progress finishes as it began. Unlock it any time in the same place.
- The first time you choose Cloud Fast, Dictivo asks first and says where the audio goes. Nothing switches to Cloud Fast by itself any more: an activation link only fills in the key.
- The companion, the menu bar or tray and the main window show which engine the current recording uses, and which one the next recording will use.
- Settings, Privacy now says in plain words what leaves this computer, lists every connection Dictivo makes, and shows where your data is stored on this device.
- Trial reports, purchase confirmation and optional usage statistics now go to app.dictivo.app. Cloud Fast stays on api.dictivo.app.
- On Windows, Buy and Subscribe open the checkout in your browser again. Before, they could open the Documents folder instead.
- On Windows 11 24H2 and later, Dictivo reads the memory size of your computer again, so its model recommendation fits your hardware. If the speed choice under the microphone is missing after the update, choose Re-run setup once in Settings, Engine.
- Shorter lock messages, a tidier Privacy page, and German that addresses you formally throughout.

## 0.3.50 (2026-09-23)

**Your companion now follows you to every desktop and full-screen app.**

- On Mac, swipe between desktops or into a full-screen app and the floating companion comes along, including full-screen apps you open later. Clicking it leaves the keyboard with the app you are typing in.
- The companion reopens where you last dragged it. Before, it went back to where the drag started.
- On Mac, clicks on the transparent space around the animated companion reach the window underneath, and its long-press menu closes when you move the pointer away or start recording.
- Your own image now stays inside the round avatar frame. Photos fill it; cut-outs with a transparent background fit inside whole.

## 0.3.49 (2026-09-20)

**Meet 13 animated companions, each with a personality of their own.**

- Choose from six visual styles, including soft cartoons, pixel characters, minimal design, storybook illustration, handmade textures and people. Your companion reacts as you listen, process and finish a dictation.
- Set built-in motion to Quiet, Natural, Lively or Still. System reduced-motion preferences are respected, and offscreen companions pause their animation.
- Your custom image stays available under My image. Existing uploads and choices are preserved, images keep their full proportions, and animated GIFs retain their own animation. Switching to a built-in companion does not delete your upload.

## 0.3.48 (2026-09-16)

**Cloud Fast now quotes its current price.**

- When Cloud Fast needs a subscription, the message now shows the current monthly price from the Dictivo service instead of a price built into the app, so a price change never needs an app update.
- Prices on dictivo.app and in the app include tax, whichever country you buy from.

## 0.3.47 (2026-09-11)

**A clearer first dictation test, with time to finish speaking.**

- The first-run test now follows your chosen toggle or hold-to-talk shortcut instead of stopping after 2.5 seconds. A Stop test button and a 30-second limit keep you in control.
- An empty transcript no longer counts as a successful test. Microphone, model and shortcut problems have separate recovery instructions.
- Retrying, skipping or leaving the test now closes its microphone session, including when a permission request finishes late.

## 0.3.46 (2026-09-10)

**A heads-up before your update window closes, in your language.**

- Thirty days before the 12-month update window ends, Account & Billing says so and offers the renewal; after it ends, it says that too. Your version keeps working either way.
- The Local side of Account & Billing is now in all ten display languages, not English behind a translated menu.
- A renewed licence is shown as Dictivo Local (renewed). One price surface on the Cloud Fast screen instead of three.

## 0.3.45 (2026-09-09)

**Renewals can be bought, and they activate themselves.**

- The yearly update renewal can be bought now. When your update window has ended, Renew opens the checkout and the new key extends the window on this device automatically.
- A renewal or replacement key that arrives by email can be entered under Account & Billing without removing the saved licence first.

## 0.3.44 (2026-09-09)

**Buying Dictivo Local now finishes inside the app.**

- A Dictivo Local purchase activates on this device by itself once the checkout completes, the way a Cloud Fast subscription already did. The emailed key still works as a fallback.
- The trial banner and Account & Billing show the Local price, and the purchase comes first on that screen, with key entry kept underneath for people who already have one.
- First run offers "Enter your license key" for anyone who bought on the website before installing.
- The renewal buttons that led nowhere are gone until renewals can actually be bought; the update notice no longer quotes a price it cannot sell.

## 0.3.43 (2026-09-08)

**A lapsed subscription can be bought again from inside the app.**

- When a Cloud Fast subscription lapses, Dictivo now says so plainly and offers "Subscribe again"; the new checkout activates on this device automatically.
- A device-limit or network problem is no longer mistaken for a lapsed subscription, so paying customers are not asked to pay twice.
- The server stopped quoting a price at people who have already paid.

## 0.3.40 (2026-08-21)

**Hotkeys recover on their own, and the free tiers stop running out in silence.**

- A dictation shortcut that failed to register used to stay broken until you restarted Dictivo. It now retries by itself, tries again whenever you come back to the window, and offers a Try again button.
- When a shortcut cannot be reserved, Dictivo now tells you what actually went wrong instead of assuming another app is holding it.
- The 14-day trial of the larger local models no longer ends without saying so, and the free Cloud Fast minutes are visible while they last.
- Cloud Fast requests now go through the app itself rather than the embedded browser, which makes them survive network changes more reliably.

## 0.3.39 (2026-08-18)

**Reliable Windows hotkeys and more resilient Cloud Fast transcription.**

- Fixed a Windows issue that could report every global shortcut as unavailable and prevent dictation from starting, especially when another Dictivo process or overlapping shortcut registration was involved.
- Dictivo now keeps a single desktop instance and applies shortcut changes in order, so one optional shortcut failure no longer disables the main dictation shortcut.
- Cloud Fast now has a more resilient fallback path for long recordings, including longer asynchronous processing on the final fallback instead of failing at the old short timeout.
- Automatic language detection remains enabled. The Cloud Fast reliability changes apply to both Mac and Windows without a desktop update; the Windows hotkey fix requires version 0.3.39.
