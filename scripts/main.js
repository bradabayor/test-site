var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-logo.jpg') {
		myImage.setAttribute ('src', 'images/chrome-logo.png');
	} else {
		myImage.setAttribute ('src', 'images/firefox-logo.jpg');
	}
}