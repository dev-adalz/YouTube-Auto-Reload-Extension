# YouTube Auto Reload Extension v1.1

## Changelog

**v1.1 Updates:**

* Added **Fast Reload toggle** — users can enable or disable automatic reloads.
* Added **Reload Counter** — tracks the number of videos successfully reloaded from "Video Unavailable".
* Improved SPA detection and stability for YouTube navigation.
* Simplified video ID tracking; removed playlist index tracking to prevent reload errors.
* Minor bug fixes and performance improvements.

---

## Motivation

YouTube's Single Page Application (SPA) behavior often causes the "Video Unavailable" error when clicking videos on the homepage or navigating playlists. This happens because YouTube dynamically loads video content without a full page reload, causing metadata or tokens to desync temporarily. Previously, solutions involved workarounds like using a local server with Flask and `pyautogui` to force F5 reloads.

This extension was created to fully automate the reload process, ensuring seamless video playback without any external scripts or servers.

## 🎬 Demo: Auto-Reload in Action

![Auto-Reload Demo](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTV4a2ozc2k2amg1YWtrYXkxNXRjdG1rOGFrN2oydWppbWliaHVhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yyyoqiYu4WTfbrBHF4/giphy.gif)

## Installation

1. Download the source code of this extension.
2. Open Brave/Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder containing this extension.
5. Enjoy automatic YouTube reload functionality.

![Screencast from 2025-10-16 03-53-02](https://github.com/user-attachments/assets/aebda5b1-47bb-4f93-95ed-807be3e405c3)

## Features

* Automatically reloads YouTube videos that show "Video Unavailable".
* Fast Reload toggle: enable or disable auto-reload as needed.
* Tracks the number of videos successfully reloaded (reload counter) for analytics.
* No need for a local server or Python scripts.
* Works directly as a Chrome/Brave extension.
* Fully automatic; no manual refresh required.
* Lightweight and minimal; no icons or extra resources needed.

## How It Works

The extension monitors video playback events and automatically triggers a reload whenever YouTube fails to load a video due to SPA inconsistencies. It works directly in the same tab without focusing or opening new windows.

> **Limitation:** Clicking the current video in a playlist may not trigger a reload because the video ID does not change. This is a rare scenario, and typical usage involves navigating to new videos. Future updates may address this edge case.

## Future Updates

* Currently, the extension works fully automatically. No planned updates are required unless YouTube changes its SPA behavior or API.

---

Created with 💛 by dev-adalz for smoother YouTube viewing.
