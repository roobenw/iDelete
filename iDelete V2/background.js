
chrome.browserAction.onClicked.addListener(
function (tab){
    console.log('buttonClicked');
    let msg = {txt: 'clicked'}
    chrome.tabs.sendMessage(tab.id, msg);
})