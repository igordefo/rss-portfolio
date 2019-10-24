const educationButton = document.querySelector('.education-btn');
const educationContent = document.querySelector('.education__body');
const experienceButton = document.querySelector('.experience-btn');
const experienceContent = document.querySelector('.experience__body');

experienceButton.addEventListener('click', function() {
  experienceContent.classList.toggle('hide');
});

educationButton.addEventListener('click', function() {
  educationContent.classList.toggle('hide');
});

// Slider script

let slides = document.querySelectorAll('.slider__item');
let prevButton = document.querySelector('.slider__prev');
let nextButton = document.querySelector('.slider__next');

let i = 0;

prevButton.addEventListener('click', function() {
  console.log('click');
  slides[i].classList = 'hide';
  i--;
  if (i < 0) {
    i = slides.length - 1;
  }
  slides[i].classList = 'slider__item';
});

nextButton.addEventListener('click', function() {
  slides[i].classList = 'hide';
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  slides[i].classList = 'slider__item';
});
