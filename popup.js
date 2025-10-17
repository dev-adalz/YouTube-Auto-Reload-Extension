document.addEventListener("DOMContentLoaded", async () => {
  const toggle = document.getElementById("fastReloadToggle");
  const status = document.getElementById("status");
  const counterEl = document.getElementById("counter");

  // Load saved Fast Reload state
  const data = await chrome.storage.sync.get(["fastReload"]);
  toggle.checked = data.fastReload ?? true;

  // Load counter from local storage
  const counterData = await chrome.storage.local.get(["reloadCounter"]);
  counterEl.textContent = counterData.reloadCounter ?? 0;

  // Save toggle changes
  document.getElementById("save").addEventListener("click", async () => {
    await chrome.storage.sync.set({ fastReload: toggle.checked });
    status.textContent = "Saved!";
    setTimeout(() => (status.textContent = ""), 1000);
  });

  // Update counter live if changed elsewhere
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.reloadCounter) {
      counterEl.textContent = changes.reloadCounter.newValue;
    }
  });
});

