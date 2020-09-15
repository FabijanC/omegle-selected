function checkChange() {
    const btn = document.getElementsByClassName("disconnectbtn")[0];
    
    const statuslogs = document.getElementsByClassName("statuslog");
    for (let i = 0; i < statuslogs.length; ++i) {
        const msg = statuslogs[i].textContent;
        if (msg.startsWith("You're now") && btn.textContent.startsWith("Stop")) {
            console.log("sending message");
            chrome.runtime.sendMessage({type: "connected"});
            return;
        }
    }

    setTimeout(checkChange, 100);
}

function checkButton() {
    const btn = document.getElementsByClassName("disconnectbtn")[0];
    if (!btn) {
        return;
    }
    
    if (btn.textContent.startsWith("New")) {
        checkChange();
    }
}

document.onclick = checkButton;
document.onkeyup = checkButton;

checkChange();