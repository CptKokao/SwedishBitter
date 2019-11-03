'use strict';

const introMore = document.querySelector('.intro__btn');
const introModal = document.querySelector('.intro-modal');
const introModalClose = document.querySelector('.intro-modal__close');

introMore.addEventListener('click', () => {
  introModal.classList.toggle("hidden");
});

introModalClose.addEventListener('click', () => {
  introModal.classList.toggle("hidden");
});
