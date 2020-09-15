chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if (message.type === "connected") {
        new Audio('buzz.wav').play();
        sendResponse("ok");
    }
})