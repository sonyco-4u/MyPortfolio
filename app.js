/* eslint-disable no-plusplus */
const Bar = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const anchorLink = document.querySelectorAll('.anchor-link');
const Body = document.querySelector('body');

const cancelModal = document.querySelector('.cancels');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const width = window.innerWidth;
const scriptURL =
  'https://script.google.com/macros/s/AKfycbyp9Eeys3CK6h1u_yvtyqZIkQN3-cqNKR0bWl3nuPSNwMoeZFPATQW-v8nZnvzo_GT7ug/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

const cards = [
  {
    key: 0,
    name: 'Book My Ride',
    option: ['Automobile', 'Remote', '2023'],
    optionMobile: ['Automobile', 'Remote', '2023'],
    description:
      'Book my Ride, is a car rental application that provides users with the ability to reserve a car for a designated time frame.',
    featuredImage: './images/photo1dt.png',
    desktopImage: 'images/photo1dt.png',
    technologies: ['React', 'Ruby on Rails', 'PostgreSQL'],
    linktoliveversion: 'https://rentyourcar.onrender.com/',
    linktosource: 'https://github.com/sonyco-4u/book-my-ride-frontend.git',
  },
  {
    key: 1,
    name: 'Space Traveller Hub',
    option: ['Explore', 'Remote', 'Teamwork'],
    optionMobile: ['Explore', 'Remote', 'Teamwork'],
    description:
      'Space Traveller hub is web application that works with real live data from the SpaceX API. The app is for a company that provides commercial and scientific space travel services.',
    featuredImage: './images/photo2dt.png',
    desktopImage: './images/photo2dt.png',
    technologies: ['HTML5', 'React', 'JavaScript'],
    linktoliveversion: 'https://euphonious-crumble-fca2d2.netlify.app/',
    linktosource:
      'https://github.com/sonyco-4u/space-travellers-hub-setup-kanban-board.git',
  },
  {
    key: 2,
    name: 'Nigeria Fashion Show',
    option: ['Exhibition', 'Remote', 'Teamwork'],
    optionMobile: ['Exhibition', 'Remote', 'Teamwork'],
    description:
      ' An online static website built for a Nigeria fashion skill acquisition show.',
    featuredImage: './images/photo3dt.png',
    desktopImage: './images/photo3dt.png',
    technologies: ['CSS3', 'HTML5', 'JavaScript'],
    linktoliveversion: 'https://sonyco-4u.github.io/Skill-Acquiziation-Show/',
    linktosource: 'https://github.com/sonyco-4u/Fashion-Show.git',
  },
  {
    key: 3,
    name: 'Financial Metrics',
    option: ['Enterprise', 'Remote', 'Teamwork'],
    optionMobile: ['Enterprise', 'Remote', 'Teamwork'],
    description:
      'Financial Metrics is a mobile web application to check a list of metrics (numeric values).',
    featuredImage: './images/photo4dt.png',
    desktopImage: './images/photo4dt.png',
    technologies: ['CSS3', 'HTML5', 'React', 'JavaScript'],
    linktoliveversion:
      'https://deploy-preview-4--fastidious-yeot-7f3b0f.netlify.app/',
    linktosource: 'https://github.com/sonyco-4u/financial-metrics.git',
  },
];

function grab(e) {
  return document.getElementById(e);
}

// Get the button element
const resumeButton = document.querySelector('.btn-resume');

// Add an event listener to the button
resumeButton.addEventListener('click', () => {
  // Open the resume link
  window.open(
    'https://docs.google.com/document/d/1McFB8GjyvGLFCwKQpYuQRaZWGhnIbPUpDDIqQMtgGYQ/edit'
  );
});

const Openpopup =
  ({
    name,
    description,
    featuredImage,
    desktopImage,
    technologies,
    linktoliveversion,
    linktosource,
    option,
    optionMobile,
  }) =>
  () => {
    let displayModal = '';
    modal.classList.add('show-modal');

    displayModal += `
         <div class="modal-head">
          <h3 class="modal-title">${name}</h3>
         </div>
         <ul class="card-detail-header-container">
             <li class="card-detail canopy-modal">${
               width > 1024 ? option[0] : optionMobile[0]
             }</li>
             <li class="card-detail canopy-modal option-modal"><span class="circle-desktop"></span> ${
               width > 1024 ? option[1] : optionMobile[1]
             }</li>
             <li class="card-detail canopy-modal option-modal"><span class="circle-desktop"></span>${
               width > 1024 ? option[2] : optionMobile[2]
             } </li>
           </ul>

          <div class='modal-img-container' >
            <img src='${
              width > 1024 ? desktopImage : featuredImage
            }' alt="modal picture" class="modal-img">
          </div>
          <div class="modal-text">
            <div class="popup-description">
            ${description}
            </div>
            <div>
              <ul class="anchor-div technologies-langu">
                <li><a href="#">${technologies[0]}</a></li>
                <li><a href="#">${
                  technologies[1] ? technologies[1] : ''
                }</a></li>
                <li><a href="#">${
                  technologies[2] ? technologies[2] : ''
                }</a></li>
              </ul>
              <div class="modal-buttons ">
                <a href='${linktoliveversion}' class="source-btn mr source-desktop" target="_blank">
                  See Live
                  <img src="images/Live-icon.svg" class="iconlink" alt="live icon">
                </a>
                <a href='${linktosource}' class="source-btn mr" target="_blank">
                  See Source
                <img src="images/Github-icon.svg" class="iconlink" alt="Git hub">
                </a>
              </div>
            </div>
          </div>
      `;

    modalInner.innerHTML = displayModal;
  };

function showWorks() {
  const works = [
    {
      title: 'Book My Ride',
      options: ['Automobile', 'Remote', '2023'],
      imgMobile: 'images/photo1.png',
      imgDesktop: 'images/photo1dt.png',
      description:
        'Book my Ride, is a car rental application that provides users with the ability to reserve a car for a designated time frame.',
      descriptionD:
        'Book my Ride, is a car rental application that provides users with the ability to reserve a car for a designated time frame.',
      languages: ` <li class="langu langu-a">Ruby on Rails</li>
      <li class="langu langu-b">React</li>
      <li class="langu langu-c">PostgreSQL</li>
      <li class="langu2">Ruby on Rails</li>
      <li class="langu2">React</li>
      <li class="langu2">PostgreSQL</li>`,
    },
    {
      title: 'Space Traveller Hub',
      options: ['Explore', 'Remote', 'Teamwork'],
      imgMobile: 'images/photo2.png',
      imgDesktop: 'images/photo2dt.png',
      description:
        'Space Traveller hub is web application that works with real live data from the SpaceX API. The app is for a company that provides commercial and scientific space travel services.',
      descriptionD:
        'Space Traveller hub is web application that works with real live data from the SpaceX API. The app is for a company that provides commercial and scientific space travel services.',
      languages: `<li class="langu">HTML5</li>
      <li class="langu">React</li>
      <li class="langu">JavaScript</li>
      <li class="langu2">HTML5</li>
      <li class="langu2">React</li>
      <li class="langu2">JavaScript</li>
      <li class="langu2">Redux</li>`,
    },
    {
      title: 'Nigeria Fashion Show',
      options: ['Exhibition', 'Remote', 'Teamwork'],
      imgMobile: 'images/photo3.png',
      imgDesktop: 'images/photo3dt.png',
      description:
        'An online static website built for a Nigeria fashion skill acquisition show.',
      descriptionD:
        'An online static website built for a Nigeria fashion skill acquisition show.',
      languages: `<li class="langu">HTML5</li>
      <li class="langu">CSS3</li>
      <li class="langu">JavaScript</li>
      <li class="langu2">HTML5</li>
      <li class="langu2">CSS3</li>
      <li class="langu2">JavaScript</li>`,
    },
    {
      title: 'Financial Metrics',
      options: ['Enterprise', 'Remote', 'Teamwork'],
      imgMobile: 'images/photo4.png',
      imgDesktop: 'images/photo4dt.png',
      description:
        'Financial Metrics is a mobile web application to check a list of metrics (numeric values).',
      descriptionD:
        'Financial Metrics is a mobile web application to check a list of metrics (numeric values).',
      languages: `<li class="langu">HTML5</li>
      <li class="langu">CSS3</li>
      <li class="langu">React</li>
      <li class="langu2">HTML5L</li>
      <li class="langu2">CSS3</li>
      <li class="langu2">React</li>`,
    },
  ];

  for (let k = 0; k < works.length; k++) {
    const work = works[k];
    const template = document.createElement('template');

    if (k % 2 === 0) {
      template.innerHTML = `<div class="project-card desktop">
        <div class="mobile-image">
          <img src="${work.imgMobile}" alt="First Card">
        </div>
        <div class="desktop-image">
          <img src="${work.imgDesktop}" alt="First card-desktop">
        </div>


        <div class="contents-two">
          <h2 class="head">${work.title}</h2>
          <h4 class="desktop_show">${work.title}</h4>
          <div class="card-detail-box">
            <ul class="cards-container">
              <li class="card-detail canopy">${work.options[0]}</li>
              <li class="card-detail option  "><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
              <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>

              <li class="card-detail dcanopy2_face">${work.options[0]}</li>
              <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
              <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>
            </ul>

            <p class="instruction">${work.description}</p>
            <p class="instruction-show">${work.description}</p>

            <div class="language1 inline">
              <ul>${work.languages}</ul>
            </div>
          </div>
          <button type="button" class="btn-one btns">See project</button>
        </div>
      </div>
    `.trim();
    } else {
      template.innerHTML = `<div class="project-card card-flex">
      <div class="mobile-image">
        <img src="${work.imgMobile}" alt="First Card">
      </div>
      <div class="desktop-image">
        <img src="${work.imgDesktop}" alt="First card-desktop">
      </div>


      <div class="contents">
        <h2 class="head">${work.title}</h2>
        <h4 class="desktop_show">${work.title}</h4>
        <div class="card-detail-box">
          <ul class="cards-container">
            <li class="card-detail canopy">${work.options[0]}</li>
            <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
            <li class="card-detail option"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>

            <li class="card-detail dcanopy2_face">${work.options[0]}</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[1]}</li>
            <li class="card-detail optiond2_full"><img src="images/bullets.png" alt="bullet"> ${work.options[2]}</li>
          </ul>

          <p class="instruction">${work.description}</p>
          <p class="instruction-show">${work.description}</p>

          <div class="language1 inline">
            <ul>${work.languages}</ul>
          </div>
        </div>
        <button type="button" class="btn-one btns">See project</button>
      </div>
    </div>
  `.trim();
    }
    const child = template.content.firstChild;
    grab('work').appendChild(child);
  }
}

function closePopup() {
  modal.classList.remove('show-modal');
}

document.addEventListener('DOMContentLoaded', () => {
  const modalButton = document.querySelectorAll('.btns');
  modalButton.forEach((button, i) => {
    button.addEventListener('click', Openpopup(cards[i]));
  });
});

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  Body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  Body.classList.remove('noscroll');
}

Bar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
cancelModal.addEventListener('click', closePopup);

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});

window.onload = showWorks();
const saveData = (data) =>
  localStorage.setItem('last_info', JSON.stringify(data));
const formContainer = document.querySelector('.con-form');
const mailInput = document.getElementById('mail');
const messageError = document.querySelector('.error-message');
const msgInput = document.querySelector('#msg');
const nameInput = document.querySelector('#names');

let data = {};
const savedData = JSON.parse(localStorage.getItem('last_info'));
if (savedData) {
  mailInput.value = savedData.email;
  msgInput.value = savedData.msg;
  nameInput.value = savedData.names;
  data = savedData;
}

mailInput.addEventListener('input', () => {
  data.email = mailInput.value;
  saveData(data);
});

msgInput.addEventListener('input', () => {
  data.msg = msgInput.value;
  saveData(data);
});

nameInput.addEventListener('input', () => {
  data.names = nameInput.value;
  saveData(data);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Thank you for your message!';
      setTimeout(function () {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});

function toggleFrameworks() {
  const list = document.getElementById('frameworks');
  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}
toggleFrameworks();

function toggleSkills() {
  const list = document.getElementById('skills');
  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}
toggleSkills();

function toggleLanguages() {
  const list = document.getElementById('languages');
  if (list.style.display === 'none') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}
toggleLanguages();
