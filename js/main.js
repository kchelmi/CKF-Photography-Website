// PRELOADER
const preload = document.querySelector('.preload');
preload.classList.add('show-preloader');
window.addEventListener('load',()=>{
  preload.classList.remove('show-preloader');
})

// SLIDER

const bodySlider = document.querySelector('.wrapper-slider')
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  bodySlider.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}

// Animation on Articles 

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

// Scroll To Section jQuery

$('.nav-links li a').on('click', function () {
  const goToSection = "#" + $(this).attr('class');

  $('body, html').animate({
    scrollTop: $(goToSection).offset().top - $('nav').height() - $('.separator').height()
  }, 1000)
  nav.classList.remove('nav-active')
  burger.classList.toggle('toggleBurger');
})

// BURGER MENU

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggleBurger');
})