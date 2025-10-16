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

![Screencastfrom2025-10-1621-33-26-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/afa48c9a-563e-4cf2-8643-103c43bf6be5)

## Installation

## Installation Guide (for Non-Technical Users)

Follow these steps carefully — you’ll have the extension up and running in minutes:

---

### **Step 1: Download the Extension**

1. Go to the [YouTube Auto Reload Extension v1.1](https://github.com/dev-adalz/YouTube-Auto-Reload-Extension/tree/v-1.1) page on GitHub.
2. Click the **“Code”** button (usually green).
3. Select **Download ZIP**.
4. Once downloaded, locate the file on your computer (usually in the **Downloads** folder).
5. **Extract** the ZIP file to a folder — right-click → **Extract All…** (Windows) or double-click on Mac.

> 💡 Tip: Remember where you extracted the folder — you’ll need it in Step 4.

---

### **Step 2: Open the Extensions Page in Your Browser**

The steps differ slightly depending on your browser:

* **Chrome / Brave / Edge (Chromium-based browsers)**:

  1. Open your browser.
  2. Type `chrome://extensions/` (or `edge://extensions/` for Edge) in the address bar and press Enter.

You should see a page that lists your installed extensions.

---

### **Step 3: Enable Developer Mode**

1. On the **top-right corner** of the extensions page, look for a toggle labeled **Developer mode**.
2. Turn it **ON**.

> ✅ This allows you to install extensions that are not from the official Chrome Web Store.

---

### **Step 4: Load the Extension**

1. Click the **Load unpacked** button.
2. A file picker will open — navigate to the folder where you extracted the extension in Step 1.
3. Select the **entire folder** (the one containing `manifest.json`) and click **Select Folder**.

---

### **Step 5: Verify the Extension is Installed**

* You should now see **“YouTube Auto Reload Extension”** listed among your extensions.
* Make sure it is **enabled** (toggle switch is ON).

---

### **Step 6: Use the Extension**

1. Open **YouTube** in the same browser.
2. When you click a video or navigate playlists:

   * If a video shows **“Video Unavailable”**, the extension will automatically reload the tab.
3. You can also open the extension popup (click the puzzle piece → select the extension) to:

   * Toggle **Fast Reload** ON/OFF.
   * See the **reload counter** for analytics.

---

### **Supported Browsers**

* Chrome
* Brave
* Edge (Chromium-based)
* Firefox (with slight limitations)

---

### **Extra Tips**

* If the extension doesn’t seem to work at first, **refresh the YouTube page** once.
* Keep your **ad blocker enabled** if you want an ad-free experience — the extension works alongside it.

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
