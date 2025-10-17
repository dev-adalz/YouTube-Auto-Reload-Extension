// Simple polyfill to make chrome API work in Firefox
if (typeof browser !== "undefined" && !self.chrome) {
  self.chrome = browser;
}

// Promisify Chrome APIs for consistency
if (typeof chrome !== "undefined" && !chrome.runtime.getBrowserInfo) {
  // We're in Chrome/Chromium
  const originalGet = chrome.storage.sync.get;
  const originalLocalGet = chrome.storage.local.get;
  
  chrome.storage.sync.get = function(keys) {
    return new Promise((resolve) => {
      originalGet.call(chrome.storage.sync, keys, resolve);
    });
  };
  
  chrome.storage.local.get = function(keys) {
    return new Promise((resolve) => {
      originalLocalGet.call(chrome.storage.local, keys, resolve);
    });
  };
}
