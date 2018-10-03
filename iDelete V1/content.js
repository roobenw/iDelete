console.log('console log from contentjs');

var images = [].slice.call(document.getElementsByTagName('img'), 0); 

images.forEach(function(img) { 
  img.parentNode.removeChild(img); 
});
