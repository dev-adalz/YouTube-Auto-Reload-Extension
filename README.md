# YouTube Auto Reload Extension

## Motivation

YouTube's Single Page Application (SPA) behavior often causes the "Video Unavailable" error when clicking videos on the homepage or navigating playlists. This happens because YouTube dynamically loads video content without a full page reload, causing metadata or tokens to desync temporarily. Previously, solutions involved workarounds like using a local server with Flask and `pyautogui` to force F5 reloads.

<img width="1428" height="815" alt="Screenshot from 2025-10-16 03-08-03" src="https://github.com/user-attachments/assets/3a5c6bfb-55cf-455d-ba06-0e48a8c784da" />


This extension was created to fully automate the reload process, ensuring seamless video playback without any external scripts or servers.

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
