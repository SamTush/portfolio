const openCard = document.querySelector('.button-one');
const openCardTwo = document.querySelector('.button-two');
const openCardThree = document.querySelector('.button-three');
const openCardFour = document.querySelector('.button-four');
const desktopClick = document.querySelector('.grid-item');
var img1 = document.createElement('img');
img1.src = 'images/Snapshoot-Portfolio.png';
function Content (title, image, buttonLive, buttonSource) {
  this.title = title;
  this.image = image;
  this.buttonLive = buttonLive;
  this.buttonSource = buttonSource;
}
var content1 = new Content(
  'Tonic',
  img1,
  
);
const body = document.querySelector('body');
const popupCard = document.createElement('div');
body.appendChild(popupCard);
popupCard.innerHTML = `
<!--popup mobile-->
<div class="target-mobile">
    <div id="popup-card-menu" class="popup-card" data-target="p-1">
        <div class="card-popup">
            <div class="popup-header">
                <h2>title</h2>
                <img id="closing" src="images/IconB.png" alt="closing">
            </div>
            <div class="canopy">
                <h4>CANOPY</h4>
                <ul class="back">
                    <li><img class="dot" src="images/Counter.png" alt="dot">Back End Dev</li>
                    <li><img class="dot" src="images/Counter.png" alt="dot">2015</li>
                </ul>
            </div>
            <div class="popup-body">
                <img src="images/Snapshoot-Portfolio.png" alt="Snapshoot-Portfolio">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essent
                </p>
                <ul class="small-btn-div">
                    <li class="small-btn"><a>html</a></li>
                    <li class="small-btn"><a>css</a></li>
                    <li class="small-btn"><a>javaScript</a></li>
                </ul>
                <hr>
                <div class="popup-button">
                    <button class="icon2"><a>See live</a></button>
                    <button class="icon3"><a>See Source</a></button>
                </div>
            </div>
        </div>
    </div>
  </div>
`;
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
for (let i = 0; i < (document.querySelectorAll('.click')).length; i++) {
  document.querySelectorAll('.click')[i].addEventListener('click', closeIcon);
}
for (let i = 0; i < (document.querySelectorAll('.button-card')).length; i++) {
  let elem = document.querySelector('#card-one');
  let rect = elem.getBoundingClientRect();
  document.querySelectorAll('.button-card')[i] .addEventListener('click', buttonClicked); 
}
const closingCard = document.querySelector('#closing');
closingCard.addEventListener('click', closeCard);
