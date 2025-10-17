// Use chrome API by default, fallback to browser API if available
const api = chrome || browser;

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("fastReloadToggle");
  const status = document.getElementById("status");
  const counterEl = document.getElementById("counter");

  // Load saved Fast Reload state
  api.storage.sync.get(["fastReload"], (data) => {
    toggle.checked = data.fastReload ?? true;
  });

  // Load counter from local storage
  api.storage.local.get(["reloadCounter"], (data) => {
    counterEl.textContent = data.reloadCounter ?? 0;
  });

  // Save toggle changes
  document.getElementById("save").addEventListener("click", () => {
    api.storage.sync.set({ fastReload: toggle.checked }, () => {
      status.textContent = "Saved!";
      setTimeout(() => (status.textContent = ""), 1000);
    });
  });

  // Update counter live if changed elsewhere
  api.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.reloadCounter) {
      counterEl.textContent = changes.reloadCounter.newValue;
    }
  });
});
