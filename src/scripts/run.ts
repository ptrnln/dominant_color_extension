(() => {
    var button: any = document.getElementById('run-btn');

    
    button.onclick = async () => {
        var [currentTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true});

        if(currentTab) {
            // chrome.tabs.captureVisibleTab((dataURL) => {
            //     chrome.tabs.create({ url: dataURL })
            // });

            chrome.tabs.

            var screenshot: any;
            chrome.debugger.detach({
                tabId: currentTab.id
            }).then(() => {
            chrome.debugger.attach({
                tabId: currentTab.id
            }, "1.3").then(async () => {
                chrome.debugger.sendCommand({ tabId: currentTab.id }, 'Page.captureScreenshot', {
                    format: 'webp',
                    captureBeyondViewport: true,
                }, (obj) => {
                    screenshot = obj
                })
            })})

            console.log(screenshot);
        }
    }
})();
