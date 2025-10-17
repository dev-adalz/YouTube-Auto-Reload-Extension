// Use browser API if available (Firefox), otherwise chrome API
const browserAPI = typeof browser !== "undefined" ? browser : chrome;

browserAPI.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "reloadYT") {
    browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        console.log("🔄 Reloading active YouTube tab:", tabs[0].id);
        browserAPI.tabs.reload(tabs[0].id);
      }
    });
  }
});


// Reload all open YouTube tabs once
function reloadAllYouTubeTabs() {
  browserAPI.tabs.query({ url: "*://www.youtube.com/*" }, (tabs) => {
    for (const tab of tabs) {
      browserAPI.tabs.reload(tab.id);
      console.log("🔄 Reloading existing YouTube tab:", tab.id);
    }
  });
}

// Fast Reload toggle listener
browserAPI.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.fastReload && changes.fastReload.newValue) {
    reloadAllYouTubeTabs();
  }
});

// Reload all tabs on install
browserAPI.runtime.onInstalled.addListener(() => {
  reloadAllYouTubeTabs();
});
