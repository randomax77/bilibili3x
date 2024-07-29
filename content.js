function setSpeed() {
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = 3.0;
        updateSpeedUI();
    }
}

function updateSpeedUI() {
    const speedMenu = document.querySelector('.bpx-player-ctrl-playbackrate-menu');
    if (speedMenu) {
        // 移除现有的active状态
        const activeItem = speedMenu.querySelector('.bpx-state-active');
        if (activeItem) {
            activeItem.classList.remove('bpx-state-active');
        }

        // 添加新的3x选项
        let newSpeedItem = speedMenu.querySelector('[data-value="3"]');
        if (!newSpeedItem) {
            newSpeedItem = document.createElement('li');
            newSpeedItem.className = 'bpx-player-ctrl-playbackrate-menu-item';
            newSpeedItem.setAttribute('data-value', '3');
            newSpeedItem.textContent = '3.0x';
            speedMenu.insertBefore(newSpeedItem, speedMenu.firstChild);
        }
        newSpeedItem.classList.add('bpx-state-active');

        // 更新显示的倍速文本
        const speedResult = document.querySelector('.bpx-player-ctrl-playbackrate-result');
        if (speedResult) {
            speedResult.textContent = '3.0x';
        }
    }
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "setSpeed") {
            setSpeed();
            sendResponse({ status: "Speed set to 3x" });
        }
    }
);