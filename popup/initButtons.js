
function runFakerNoOverride(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    command: "generateNoOverride",
  });
}

function runFakerOverride(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    command: "generateWithOverride",
  });
}

function reportError() {
  console.error("fake memorial error")
}

function initFaker() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fake-fill-in")) {
      browser.tabs.query({ active: true, currentWindow: true })
        .then(runFakerNoOverride)
        .catch(reportError);
    } else if (e.target.classList.contains("fake-fill-in-override")) {
      browser.tabs.query({ active: true, currentWindow: true })
        .then(runFakerOverride)
        .catch(reportError);
    }
  });
}

function reportExecuteScriptError(error) {
  console.error(`Failed to execute contentGenerator content script: ${error.message}`);
}

browser.tabs.executeScript({ file: "/content_scripts/contentGenerator.js" })
  .then(initFaker)
  .catch(reportExecuteScriptError);
