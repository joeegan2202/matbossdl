const download = document.getElementById("download-button");

notify.addEventListener("click", () => {
  chrome.runtime.sendMessage("", {
    type: "notification",
    message: text.value,
  });
});
