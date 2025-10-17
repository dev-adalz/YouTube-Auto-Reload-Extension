// Use browser API if available (Firefox), otherwise chrome API
const browserAPI = typeof browser !== "undefined" ? browser : chrome;

document.addEventListener("DOMContentLoaded", async () => {
  const toggle = document.getElementById("fastReloadToggle");
  const status = document.getElementById("status");
  const counterEl = document.getElementById("counter");
  
  // Load saved Fast Reload state
  const data = await browserAPI.storage.sync.get(["fastReload"]);
  toggle.checked = data.fastReload ?? true;
  
  // Load counter from local storage
  const counterData = await browserAPI.storage.local.get(["reloadCounter"]);
  counterEl.textContent = counterData.reloadCounter ?? 0;
  
  // Save toggle changes
  document.getElementById("save").addEventListener("click", async () => {
    await browserAPI.storage.sync.set({ fastReload: toggle.checked });
    status.textContent = "Saved!";
    setTimeout(() => (status.textContent = ""), 1000);
  });
  
  // Update counter live if changed elsewhere
  browserAPI.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.reloadCounter) {
      counterEl.textContent = changes.reloadCounter.newValue;
    }
  });
});
