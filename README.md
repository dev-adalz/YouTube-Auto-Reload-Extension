# YouTube Auto Reload Extension

## Motivation

YouTube's Single Page Application (SPA) behavior often causes the "Video Unavailable" error when clicking videos on the homepage or navigating playlists. This happens because YouTube dynamically loads video content without a full page reload, causing metadata or tokens to desync temporarily. Previously, solutions involved workarounds like using a local server with Flask and `pyautogui` to force F5 reloads.

<img width="1428" height="815" alt="Screenshot from 2025-10-16 03-08-03" src="https://pouch.jumpshare.com/preview/qHJWLDt-CTN7KA6Bl7opV6HeORFHaILfCOfKT_JI0k-NXmJlIMFFpAr2g1ayxRUbGJWfQQqUet537toeYrJwLGT3mtCR3tTfENHP5BWbHQE" />


This extension was created to fully automate the reload process, ensuring seamless video playback without any external scripts or servers.

![Screencast from 2025-10-16 03-53-02](https://github.com/user-attachments/assets/befc6b51-82dc-4c2b-890d-3ccd734acc66)

## Installation

1. Download the source code of this extension.
2. Open Brave/Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder containing this extension.
5. Enjoy automatic YouTube reload functionality.

## Features

* Automatically reloads YouTube videos that show "Video Unavailable".
* No need for a local server or Python scripts.
* Works directly as a Chrome/Brave extension.
* Fully automatic; no manual refresh required.
* Lightweight and minimal; no icons or extra resources needed.


## How It Works

The extension monitors video playback events and automatically triggers a reload whenever YouTube fails to load a video due to SPA inconsistencies. It works directly in the same tab without focusing or opening new windows.

## Future Updates

* Currently, the extension works fully automatically. No planned updates are required unless YouTube changes its SPA behavior or API.

---

Created with 💛 for smoother YouTube viewing.
