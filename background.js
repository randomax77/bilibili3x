chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, { action: "setSpeed" }, function (response) {
        console.log(response.status);
    });
});