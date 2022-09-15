const close = document.querySelector('.close');
const nav = document.querySelector('.place');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
// work selectors
const overlay = document.querySelector('.blue-bg');
const docBody = document.querySelector('body');
const container = document.querySelector('.container');
const cardSection = document.querySelector('.works');

const projects = [
  {
    cardClass: ['showcase-1', 'showcase'],
    cardImg: ['showcase-partition', 'img-content'],
    imgDetails: ['img/Snapshoot-Portfolio.png', 'The first page of the tonic project'],
    articleClassList: ['card-partition', 'txt-content'],
    h2TitleClass: ['font'],
    name: 'Tonic',
    canopyClass: ['title', 'font', 'no-image'],
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups requiredLorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Snapshoot-Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['showcase-2', 'showcase'],
    cardImg: ['showcase-partition', 're-order', 'img-content'],
    imgDetails: ['img/Snapshoot-Portfolio2.png', 'The first page of mutli-post stories website'],
    articleClassList: ['showcase-partition', 'txt-content'],
    h2TitleClass: ['font'],
    canopyClass: ['title', 'font'],
    name: 'Multi-Post Stories',
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups requiredLorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Snapshoot-Portfolio2.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['showcase-3', 'showcase'],
    cardImg: ['showcase-partition', 'img-content'],
    imgDetails: ['img/Snapshoot-Portfolio3.png', 'The first page of the Tonic project'],
    articleClassList: ['showcase-partition', 'txt-content'],
    h2TitleClass: ['font'],
    canopyClass: ['title', 'font', 'no-image'],
    name: 'Tonic',
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups requiredLorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at sequi quae eveniet tempora, cupiditate perspiciatis, doloremque consequatur labore qui nostrum culpa placeat veritatis odio laboriosam ut quidem sunt asperiores..',
    featuredImage: 'img/Snapshoot-Portfolio3.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
  {
    cardClass: ['showcase-4', 'showcase'],
    cardImg: ['showcase-partition', 're-order', 'img-content'],
    imgDetails: ['img/Snapshoot-Portfolio4.png', 'The page of the multi-post stories project'],
    articleClassList: ['showcase-partition', 'txt-content'],
    h2TitleClass: ['font'],
    canopyClass: ['title', 'font'],
    name: 'Multi-Post Stories',
    tagline: ['CANOPY', 'Back EndDev', '2015'],
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, tenetur officiis. Temporibus aut error, obcaecatifacere alias at..',
    featuredImage: 'img/Snapshoot-Portfolio4.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://bushido-brown.github.io/My-Portfolio2/',
    source: 'https://github.com/Bushido-brown/My-Portfolio2',
  },
];

function createTag(tagname) {
  const elem = document.createElement(tagname);
  return elem;
}

function createTagWithAttribute(tagName, [attribute, value, text]) {
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value);
  tag.textContent = text;
  return tag;
}

function createTagWithAttributeOnly(tagName, [attribute, value]) {
  const tag = document.createElement(tagName);
  tag.setAttribute(attribute, value);
  return tag;
}

//  create an image tag with src & alt values
function createImgTag([srcValue, altvalue]) {
  const imgTag = document.createElement('img');
  imgTag.setAttribute('src', srcValue);
  imgTag.setAttribute('alt', altvalue);
  return imgTag;
}

function createLink(linkText, href) {
  const a = document.createElement('a');
  a.textContent = linkText;
  a.setAttribute('href', href);
  return a;
}

function createCard(projects, index) {
  //  create outer div for a card
  const card = createTag('div');
  card.classList.add(...projects[index].cardClass);

  const cardImg = createTag('div');
  cardImg.classList.add(...projects[index].cardImg);
  card.appendChild(cardImg);

  // create the project image tag
  const imgTag = createImgTag([projects[index].imgDetails[0], projects[index].imgDetails[1]]);
  cardImg.appendChild(imgTag);

  //  create the article
  const article = createTag('article');
  article.classList.add(...projects[index].articleClassList);
  card.appendChild(article);

  //  create title
  const h2Title = createTag('h2');
  h2Title.classList.add(...projects[index].h2TitleClass);
  h2Title.textContent = projects[index].name;
  article.appendChild(h2Title);

  //  create options div
  const options = createTag('div');
  options.classList.add('options');
  article.appendChild(options);

  //  create options link;
  const link1 = createLink('CANOPY', '#');
  link1.classList.add(...projects[index].canopyClass);
  options.appendChild(link1);

  const link2 = createLink('Back End Dev', '#');
  link2.classList.add('history', 'font');
  options.appendChild(link2);

  const link3 = createLink('2015', '#');
  link3.classList.add('history', 'font');
  options.appendChild(link3);

  //  create paragraph and append to article
  const p = createTag('p');
  p.classList.add('font');
  p.textContent = projects[index].p;
  article.appendChild(p);

  const langDiv = createTag('div');
  langDiv.classList.add('language');
  article.appendChild(langDiv);

  //  create languge div links
  const link4 = createLink('html', '#');
  link4.classList.add('font');
  langDiv.appendChild(link4);

  const link5 = createLink('css', '#');
  link5.classList.add('font');
  langDiv.appendChild(link5);

  const link6 = createLink('javascript', '#');
  link6.classList.add('font');
  langDiv.appendChild(link6);

  //  create a button
  const button = createTag('button');
  button.type = 'submit';
  button.name = index;
  button.textContent = 'See Project';
  article.appendChild(button);
  cardSection.appendChild(card);
}

createCard(projects, 0);
createCard(projects, 1);
createCard(projects, 2);
createCard(projects, 3);

const projectBtns = document.querySelectorAll('.showcase  button');

const modalWindow = createTag('div');
modalWindow.classList.add('modal-window');
const modalHeader = createTag('div');
modalHeader.classList.add('modal-header');
const innerModalHeader = createTag('div');
innerModalHeader.classList.add('inner-modal-header');

//  cretae the buttton here
const modalBtn = createTag('button');
modalBtn.classList.add('modal-button');
modalBtn.type = 'button';
modalBtn.innerHTML = '&times;';
const modalBody = createTag('div');
modalBody.classList.add('modal-body');

close.addEventListener('click', () => {
  nav.classList.add('hide');
});

hamburger.addEventListener('click', () => {
  nav.classList.remove('hide');
});

Array.from(navLinks).forEach((navlink) => navlink.addEventListener('click', () => {
  nav.classList.add('hide');
}));

document.getElementById('upper').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const emailError = document.getElementById('email-error');
    emailError.classList.add('active');
  }
});

const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const userData = { // Object to store user data
  name: 'name',
  email: 'email',
  message: 'message',
};

// Store data using localStorage
function storeData() {
  userData.name = userName.value;
  userData.email = email.value;
  userData.message = message.value;
  localStorage.setItem('userData', JSON.stringify(userData));
}
// call storeData at every event
userName.addEventListener('keyup', storeData);
email.addEventListener('keyup', storeData);
message.addEventListener('keyup', storeData);

// Check for info in local-storage
const savedUserData = localStorage.getItem('userData');
document.getElementById('name').value = JSON.parse(savedUserData).name;
document.getElementById('email').value = JSON.parse(savedUserData).email;
document.getElementById('message').value = JSON.parse(savedUserData).message;

Array.from(projectBtns).forEach((projectBtn) => projectBtn.addEventListener('click', (e) => {
  const project = projects[+(e.target.name)];
  modalWindow.appendChild(modalHeader);
  modalWindow.appendChild(modalBody);
  docBody.appendChild(modalWindow);
  const modalTitle = createTag('h1');
  modalTitle.classList.add('font');
  modalTitle.classList.add('modal-h1');
  modalTitle.textContent = project.name;
  innerModalHeader.appendChild(modalTitle);
  modalHeader.appendChild(innerModalHeader);
  modalHeader.appendChild(modalBtn);

  const taglineDiv = createTag('div');
  taglineDiv.classList.add('tagline');
  const ul = createTag('ul');
  const li1 = createTag('li');
  li1.classList.add('title');
  const li2 = createTag('li');
  li2.classList.add('bg-dot');
  const li3 = createTag('li');
  li3.classList.add('bg-dot');
  li1.appendChild(createTagWithAttribute('a', ['href', '#', project.tagline[0]]));
  li2.appendChild(createTagWithAttribute('a', ['href', '#', project.tagline[1]]));
  li3.appendChild(createTagWithAttribute('a', ['href', '#', project.tagline[2]]));
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  taglineDiv.appendChild(ul);
  modalBody.appendChild(taglineDiv);
  const imageDiv = createTag('div');
  imageDiv.classList.add('modal-img');
  const imgTag = createTagWithAttributeOnly('img', ['src', project.featuredImage]);
  imageDiv.appendChild(imgTag);
  modalBody.appendChild(imageDiv);
  const lowerContentDiv = createTag('div');
  lowerContentDiv.classList.add('lower-content');
  modalBody.appendChild(lowerContentDiv);

  //  create the modal paragraph
  const paragraph = createTag('p');
  paragraph.textContent = project.description;
  paragraph.classList.add('description');
  lowerContentDiv.appendChild(paragraph);
  const asideContentDiv = createTag('div');
  asideContentDiv.classList.add('modal-aside');

  //  create the modal paragraph
  const techDiv = createTag('div');
  techDiv.classList.add('technologies');
  const ul2 = createTag('ul');
  ul2.classList.add('tech-list');
  const li4 = createTag('li');
  li4.classList.add('tech-item');
  const li5 = createTag('li');
  li5.classList.add('tech-item');
  const li6 = createTag('li');
  li6.classList.add('tech-item');
  li4.appendChild(createTagWithAttribute('a', ['href', '#', project.technologies[0]]));
  li5.appendChild(createTagWithAttribute('a', ['href', '#', project.technologies[1]]));
  li6.appendChild(createTagWithAttribute('a', ['href', '#', project.technologies[2]]));
  ul2.appendChild(li4);
  ul2.appendChild(li5);
  ul2.appendChild(li6);
  techDiv.appendChild(ul2);
  asideContentDiv.appendChild(techDiv);

  //  add see source & live links
  const extDiv = createTag('div');
  extDiv.classList.add('ext-div');
  const ul3 = createTag('ul');
  ul3.classList.add('ext-list');
  const li7 = createTag('li');
  li7.classList.add('ext-item', 'live');
  const li8 = createTag('li');
  li8.classList.add('ext-item', 'source');
  li7.appendChild(createTagWithAttribute('a', ['href', project.live, 'See live']));
  li8.appendChild(createTagWithAttribute('a', ['href', project.source, 'See Source']));
  ul3.appendChild(li7);
  ul3.appendChild(li8);
  extDiv.appendChild(ul3);
  asideContentDiv.appendChild(extDiv);
  lowerContentDiv.appendChild(asideContentDiv);

  //  class additions and removals
  docBody.classList.add('still');
  overlay.classList.add('active');
  container.classList.add('blur-effect');
  modalWindow.classList.remove('close');
}));

window.addEventListener('load', () => {
  overlay.classList.remove('active');
  modalWindow.classList.add('close');
  container.classList.remove('blur-effect');
  docBody.classList.remove('still');
});

modalBtn.addEventListener('click', () => {
  modalWindow.classList.add('close');
  overlay.classList.remove('active');
  container.classList.remove('blur-effect');
  docBody.classList.remove('still');
  innerModalHeader.innerHTML = '';
  modalBody.innerHTML = '';
});