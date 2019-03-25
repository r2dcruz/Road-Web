//Image switcher code
var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/jedi-icon.png') {
    myImage.setAttribute ('src','images/jedi-icon2.png');
  } else {
    myImage.setAttribute ('src','images/jedi-icon.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Star Wars is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Star Wars is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
