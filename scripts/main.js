let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/ecoworldlogonobg.png'){
    myImage.setAttribute('src','images/curry.jpg');
  } else {
    myImage.setAttribute('src', 'images/stew.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name. ');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Kibet is so cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Kibet is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
