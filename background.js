chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === "reloadYT" && sender.tab?.id) {
    console.log("🔄 Reloading YouTube tab:", sender.tab.id);
    chrome.tabs.reload(sender.tab.id);
  }
});

