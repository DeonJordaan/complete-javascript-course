'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//. LECTURE 183
/*
// Selecting Elements
console.log(document);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelector('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating & Inserting Elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics. <button class="btn button--close-cookie">Got it!</button>';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn button--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message)

// Delete Elements
document
  .querySelector('.button--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
*/

// LECTURE 184
/*
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // This does not work because .style cannot read this element property
console.log(message.style.backgroundColor); // Can only read element properties that were also set with .style

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height);

// Setting custom properties
document.documentElement.style.setProperty('--color-primary', 'blue');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

console.log(logo.designer); // Does not work because not a standard property expected to be on images. But of course, there is another way of doing it>>>
console.log(logo.getAttribute('designer'));

//Can also set these values
logo.alt = 'Beautiful Minimalist Logo';

//As well as creating and setting new attributes
logo.setAttribute('company', 'Bankist');
logo.setAttribute('CEO', 'Deon Jordaan');

// Getting the src URL
console.log(logo.src); //This gives the ABSOLUTE URL
console.log(logo.getAttribute('src')); // This gives the RELATIVE URL

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// CLasses
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); //NOT .includes like in arrays
*/

// LECTURE 185

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // Scrolling
  // Option 1
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Option 2 gives a smoother scrolling effect by passing in an object instead of just one argument
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// LECTURE 186

const h1 = document.querySelector('h1');

// Accepted way of listening for events
// Save event listener function to a variable
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

// Add eventListener
h1.addEventListener('mouseenter', alertH1);

//Remove eventListener
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Old way of listening for events
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
