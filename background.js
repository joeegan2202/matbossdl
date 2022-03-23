function download() {
  let videourl = document.querySelector("video").currentSrc;

  const link = document.createElement("a");
  link.href = videourl;
  link.click();
}

chrome.action.onClicked.addListener((tab) => {
  console.log(chrome);
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: download,
    },
    () => {}
  );
});
