// Use browser API if available (Firefox), otherwise chrome API
const browserAPI = typeof browser !== "undefined" ? browser : chrome;

let lastVideoId = new URL(window.location.href).searchParams.get("v") || "";
let reloadCounter = 0;

// Load counter from storage
browserAPI.storage.local.get(["reloadCounter"]).then((data) => {
  reloadCounter = data.reloadCounter || 0;
  console.log("📊 Videos saved from 'Video Unavailable':", reloadCounter);
});

// Reload function
function reloadVideo() {
  browserAPI.runtime.sendMessage({ action: "reloadYT" });
  reloadCounter++;
  browserAPI.storage.local.set({ reloadCounter });
  console.log("🔄 Reload triggered for video:", lastVideoId);
  console.log("📊 Total videos saved:", reloadCounter);
}

// Fast Reload toggle helper
async function checkFastReload() {
  const data = await browserAPI.storage.sync.get(["fastReload"]);
  return data.fastReload ?? true;
}

// SPA-safe video detection
function detectVideoChange() {
  const currentVideoId = new URL(window.location.href).searchParams.get("v");
  if (!currentVideoId) return;
  
  checkFastReload().then((enabled) => {
    if (!enabled) return;
    if (currentVideoId !== lastVideoId) {
      lastVideoId = currentVideoId;
      reloadVideo();
    }
  });
}

// Hook SPA navigation
const pushState = history.pushState;
history.pushState = function () {
  pushState.apply(this, arguments);
  detectVideoChange();
};
window.addEventListener("popstate", detectVideoChange);

// Fallback interval
setInterval(detectVideoChange, 1000);

// Fast Reload toggle
browserAPI.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.fastReload) {
    const enabled = changes.fastReload.newValue;
    console.log(`[YouTube Auto Refresh] Fast Reload is now ${enabled ? "ON" : "OFF"}`);
    if (enabled) detectVideoChange();
  }
});
