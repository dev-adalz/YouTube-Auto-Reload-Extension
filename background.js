// Use chrome API by default, fallback to browser API if available
const api = chrome || browser;

// Reload listener (existing)
api.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === "reloadYT" && sender.tab?.id) {
    console.log("🔄 Reloading YouTube tab:", sender.tab.id);
    api.tabs.reload(sender.tab.id);
  }
  return true; // For Firefox compatibility
});

// Reload all open YouTube tabs once
function reloadAllYouTubeTabs() {
  api.tabs.query({ url: "*://www.youtube.com/*" }, (tabs) => {
    for (const tab of tabs) {
      api.tabs.reload(tab.id);
      console.log("🔄 Reloading existing YouTube tab:", tab.id);
    }
  });
}

// Fast Reload toggle listener
api.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.fastReload && changes.fastReload.newValue) {
    reloadAllYouTubeTabs(); // smooth reload, content.js runs naturally
  }
});

// Reload all tabs on install
api.runtime.onInstalled.addListener(() => {
  reloadAllYouTubeTabs();
});
