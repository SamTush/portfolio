// General variables
const linkLive = 'https://samtush.github.io/Profolio-setup-and-mibile-first/';
const linkSource = 'https://github.com/SamTush';
// construstor for pop-up content
class Content {
  constructor(title, image, buttonLive, buttonSource) {
    this.title = title;
    this.image = image;
    this.buttonLive = buttonLive;
    this.buttonSource = buttonSource;
  }
}
const content1 = new Content(
  'Tonic',
  'images/Snapshoot-Portfolio.png',
  linkLive,
  linkSource,
);
const content2 = new Content(
  'Mutli-post Stories',
  'images/Snapshoot-Portfolio2.png',
  linkLive,
  linkSource,
);
const content3 = new Content(
  'Tonic',
  'images/Snapshoot Portfolio3.png',
  linkLive,
  linkSource,
);
const content4 = new Content(
  'Multi-Post Stories',
  'images/Snapshoot Portfolio4.png',
  linkLive,
  linkSource,
);
// variables to set appearance
const sectionCard = document.querySelector('#portfolio');
const cardSection = document.createElement('div');
// Inner html for cards
cardSection.innerHTML = `
<div class="grid-container grid-item-center">
<div id="card-one" class="grid-item grid-item-1" data-name="p-1">
    <div class="card-box">
        <img class="mobile-image" src="images/Snapshoot-Portfolio.png" alt="Snapshoot-Portfolio" srcset="">
        <img class="desktop-image" src="images/Snapshoot-PortfolioD.png" alt="Snapshoot-PortfolioD"
            srcset="">
    </div>
    <div class="text-box">
        <h2>Tonic</h2>
        <div class="canopy">
            <h4>CANOPY</h4>
            <ul class="back">
                <li><img class="dot" src="images/Counter.png" alt="dot">Back End Dev</li>
                <li><img class="dot" src="images/Counter.png" alt="dot">2015</li>
            </ul>
        </div>
        <div>
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
        </div>
        <ul class="small-btn-div">
            <li class="small-btn"><a>html</a></li>
            <li class="small-btn"><a>css</a></li>
            <li class="small-btn"><a>javaScript</a></li>
        </ul>
        <button id="button-one" class="button-card button-one"><a>See Project</a></button>
    </div>
</div>
<div id="reverse-one card-two" class="grid-item grid-item-2 row-reverse" data-name="p-2">
    <div class="card-box">
        <img class="mobile-image" src="images/Snapshoot-Portfolio2.png" alt="Snapshoot-Portfolio2"
            srcset="">
        <img class="desktop-image" src="images/Snapshoot-Portfolio3.png" alt="Snapshoot-Portfolio3"
            srcset="">
    </div>
    <div class="text-box">
        <h2>Multi-Post<br>Stories</h2>
        <div class="canopy">
            <h4>CANOPY</h4>
            <ul class="back">
                <li><img class="dot" src="images/Counter.png" alt="dot">Back End Dev</li>
                <li><img class="dot" src="images/Counter.png" alt="dot">2015</li>
            </ul>
        </div>
        <div>
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
        </div>
        <ul class="small-btn-div">
            <li class="small-btn"><a>html</a></li>
            <li class="small-btn small-btn-dis"><a>Ruby on rails</a></li>
            <li class="small-btn"><a>css</a></li>
            <li class="small-btn"><a>javaScript</a></li>
        </ul>
        <button id="button-two" class="button-card button-two"><a>See Project</a></button>
    </div>
</div>
<div id="card-three" class="grid-item grid-item-3" data-name="p-3">
    <div class="card-box">
        <img class="mobile-image" src="images/Snapshoot Portfolio3.png" alt="Snapshoot-Portfolio5"
            srcset="">
        <img class="desktop-image" src="images/Snapshoot-Portfolio4.png" alt="Snapshoot-Portfolio6"
            srcset="">
    </div>
    <div class="text-box">
        <h2 class="mobile">Tonic</h2>
        <h2 class="desktop">Facebook 360</h2>
        <div class="canopy">
            <h4>CANOPY</h4>
            <ul class="back">
                <li><img class="dot" src="images/Counter.png" alt="dot">Back End Dev</li>
                <li><img class="dot" src="images/Counter.png" alt="dot">2015</li>
            </ul>
        </div>
        <div>
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
        </div>
        <ul class="small-btn-div">
            <li class="small-btn"><a>html</a></li>
            <li class="small-btn small-btn-dis"><a>Ruby on rails</a></li>
            <li class="small-btn"><a>css</a></li>
            <li class="small-btn"><a>javaScript</a></li>
        </ul>
        <button id="button-three" class="button-card button-three"><a>See Project</a></button>
    </div>
</div>
<div id="reverse-two" class="grid-item grid-item-4"  data-name="p-4">
    <div class="card-box">
        <img class="mobile-image" src="images/Snapshoot Portfolio4.png" alt="Snapshoot-Portfolio7"
            srcset="">
        <img class="desktop-image" src="images/Snapshoot-Portfolio5.png" alt="Snapshoot-Portfolio8"
            srcset="">
    </div>
    <div class="text-box">
        <h2 class="mobile">Multi-Post<br>Stories</h2>
        <h2 class="desktop">Uber Navigation</h2>
        <div class="canopy">
            <h4>CANOPY</h4>
            <ul class="back">
                <li><img class="dot" src="images/Counter.png" alt="dot">Back End Dev</li>
                <li><img class="dot" src="images/Counter.png" alt="dot">2015</li>
            </ul>
        </div>
        <div>
            <p>
                A daily selection of privately personalized reads; no accounts or sign-ups required.
            </p>
        </div>
        <ul class="small-btn-div">
            <li class="small-btn"><a>html</a></li>
            <li class="small-btn small-btn-dis"><a>Ruby on rails</a></li>
            <li class="small-btn"><a>css</a></li>
            <li class="small-btn"><a>javaScript</a></li>
        </ul>
        <button id="button-four" class="button-card button-four"><a>See Project</a></button>
    </div>
</div>
</div>
`;
// appending card and pop-up to html
sectionCard.appendChild(cardSection);
// functions
function myFunction() {
  document.getElementById('show').style.display = 'block';
}
function closeIcon() {
  document.getElementById('show').style.display = 'none';
}
function closeCard() {
  const remove = document.querySelector('.target-mobile');
  remove.style.display = 'none';
  sectionCard.removeChild(sectionCard.lastElementChild);
}
document.getElementById('humburger').addEventListener('click', myFunction);
// for loops
for (let i = 0; i < (document.querySelectorAll('.click')).length; i += 1) {
  document.querySelectorAll('.click')[i].addEventListener('click', closeIcon);
}
// button array
const buttonArray = [
  document.querySelector('#button-one'),
  document.querySelector('#button-two'),
  document.querySelector('#button-three'),
  document.querySelector('#button-four'),
];
// through all button items
buttonArray.forEach((buttonItem, index) => {
  const contentArray = [
    content1,
    content2,
    content3,
    content4,
  ];
  const item = contentArray[index];
  buttonItem.addEventListener('click', () => {
    const popupCard = document.createElement('div');
    sectionCard.appendChild(popupCard);
    // inner html for pop-up
    popupCard.innerHTML = `
      <!--popup mobile-->
      <div class="target-mobile">
        <div id="popup-card-menu" class="popup-card" data-target="p-1">
            <div class="card-popup">
                <div class="popup-header">
                    <h2>${item.title}</h2>
                    <img id="closing" class="closePopup" src="images/IconB.png" alt="closing">
                </div>
                <div class="canopy">
                    <h4>CANOPY</h4>
                    <ul class="back">
                        <li><img class="dot" src="images/Counter.png" alt="dot">Back End Dev</li>
                        <li><img class="dot" src="images/Counter.png" alt="dot">2015</li>
                    </ul>
                </div>
                <div class="popup-body">
                    <img src="${item.image}" alt="Snapshoot-Portfolio">
                    <div class="popup-body-desktop">
                    <div class="p-div-desktop">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div class="side">
                        <ul class="small-btn-div">
                            <li class="small-btn"><a>html</a></li>
                            <li class="small-btn"><a>css</a></li>
                            <li class="small-btn"><a>javaScript</a></li>
                        </ul>
                        <ul class="small-btn-div">
                            <li class="small-btn"><a>github</a></li>
                            <li class="small-btn"><a>ruby</a></li>
                            <li class="small-btn"><a>Bootstrap</a></li>
                        </ul>
                        <hr>
                        <div class="popup-button">
                            <button class="icon2"><a href="${item.buttonLive}">See live</a></button>
                            <button class="icon3"><a href="${item.buttonSource}">See Source</a></button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    `;
    document.querySelector('.target-mobile').style.display = 'block';
    const cloCard = document.querySelector('.closePopup');
    cloCard.addEventListener('click', closeCard);
  });
});
// // form validation
const nameForm = document.querySelector('#name');
const emailForm = document.querySelector('#email');
const textMessage = document.querySelector('#textarea');
const form = document.querySelector('#form');
const errorMessage = document.querySelector('#error');
form.addEventListener('submit', (e) => {
  const messages = [];
  let x = 0;
  if (nameForm.value === '' || nameForm.value == null) {
    messages.push('Name is required');
    x += 1;
  }
  if (emailForm.value === '' || emailForm.value == null) {
    messages.push('email is required');
    x += 1;
  }
  if (emailForm.value !== emailForm.value.toLowerCase()) {
    messages.push('*Email should be lowercase');
  }
  if (textMessage.value.length <= 6) {
    messages.push('Message should have more than 6 charaters');
    x += 1;
  }
  if (x >= 1) {
    messages.push('* Form not sent *');
  }
  if (messages.length > 0) {
    e.preventDefault();
    e.stopPropagation();
    errorMessage.innerHTML = messages.join(',<br> ');
  }
});
form.addEventListener('input', () => {
  const setValue = {
    name: nameForm.value,
    email: emailForm.value,
    message: textMessage.value,
  };
  localStorage.setItem('storedDate', JSON.stringify(setValue));
});

let itemsBe = JSON.parse(localStorage.getItem('storedDate'));
if (!itemsBe) {
  itemsBe = {
    name: '',
    email: '',
    message: '',
  };
}

nameForm.value = itemsBe.name;
emailForm.value = itemsBe.email;
textMessage.value = itemsBe.message;
