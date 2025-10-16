// Reload listener (existing)
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === "reloadYT" && sender.tab?.id) {
    console.log("🔄 Reloading YouTube tab:", sender.tab.id);
    chrome.tabs.reload(sender.tab.id);
  }
});

// Reload all open YouTube tabs once
function reloadAllYouTubeTabs() {
  chrome.tabs.query({ url: "*://www.youtube.com/*" }, (tabs) => {
    for (const tab of tabs) {
      chrome.tabs.reload(tab.id);
      console.log("🔄 Reloading existing YouTube tab:", tab.id);
    }
  });
}

// Fast Reload toggle listener
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.fastReload && changes.fastReload.newValue) {
    reloadAllYouTubeTabs(); // smooth reload, content.js runs naturally
  }
});

// Reload all tabs on install
chrome.runtime.onInstalled.addListener(() => {
  reloadAllYouTubeTabs();
});
