console.log('console log from contentjs');


chrome.runtime.onMessage.addListener(
function(message, sender, sendResponse){
  if(message.txt === "clicked"){
    var images = [].slice.call(document.getElementsByTagName('img'), 0); 
    images.forEach(function(img) { 
      img.parentNode.removeChild(img); 
    });
  }
})
