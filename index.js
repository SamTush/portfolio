function myFunction() {
  document.getElementById('show').style.display = 'block';
}
function closeIcon() {
  document.getElementById('show').style.display = 'none';
}
function buttonClicked() {
  document.getElementById('popup-card-menu').style.display = 'block';
}
function closeCard() {
  document.getElementById('popup-card-menu').style.display = 'none';
}
function clickDesktop() {
  document.querySelector('.target-desktop').style.display = 'block';
}
document.getElementById('humburger').addEventListener('click', myFunction);
document.getElementById('close-icon').addEventListener('click', closeIcon);
document.getElementById('click-a').addEventListener('click', closeIcon);
document.getElementById('click-b').addEventListener('click', closeIcon);
document.getElementById('click-c').addEventListener('click', closeIcon);
const buttonOne = document.querySelector('.button-one');
const buttonTwo = document.querySelector('.button-two');
const buttonThree = document.querySelector('.button-three');
const buttonFour = document.querySelector('.button-four');
const closingCard = document.querySelector('#closing');
const desktopClick = document.querySelector('.grid-item');
buttonOne.addEventListener('click', buttonClicked);
buttonTwo.addEventListener('click', buttonClicked);
buttonThree.addEventListener('click', buttonClicked);
buttonFour.addEventListener('click', buttonClicked);
closingCard.addEventListener('click', closeCard);
desktopClick.addEventListener('click', clickDesktop);
