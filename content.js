let lastVideoId = new URL(window.location).searchParams.get("v");

setInterval(() => {
  const currentVideoId = new URL(window.location).searchParams.get("v");

  if (currentVideoId && currentVideoId !== lastVideoId) {
    console.log("🎬 New video detected:", currentVideoId);
    lastVideoId = currentVideoId;

    // Ask background to perform a true F5 reload
    chrome.runtime.sendMessage({ action: "reloadYT" });
  }
}, 1000);

