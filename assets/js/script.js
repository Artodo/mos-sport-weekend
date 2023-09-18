'use strict'
const menuBtn = document.querySelector('#burgerBtn');
const menu = document.querySelector('#burgerMenu');
const body = document.body;

function closeBurgerMenu() {
  menuBtn.classList.remove('burger_btn-active');
  menu.classList.remove('active');
}

function isMenuOpen() {
  return menu.classList.contains("active") && menuBtn.classList.contains("active");
}

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('burger_btn-active');
  menu.classList.toggle('active');
  document.body.classList.toggle('noScroll');
})

body.addEventListener('click', function (e) {
  if (isMenuOpen()) {
    if (!e.target.classList.contains("burger-menu") && !e.target.classList.contains("header__btn") && !e.target.classList.contains("bar1") && !e.target.classList.contains("bar2") && !e.target.classList.contains("bar3")) {
      closeBurgerMenu();
    }
  }
})


const anchors = document.querySelectorAll('.burger-menu__item');

anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    closeBurgerMenu();
    document.body.classList.remove('noScroll');
  })
})


const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 14
    },
    744: {
      slidesPerView: 3,
      spaceBetween: 14
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 14
    },
    1420: {
      slidesPerView: 4.5,
      spaceBetween: 14,
    }
  }

});



function handleTabClick(tab) {
  removeActiveFromTabs();

  tab.classList.add('active');

  const contentId = tab.getAttribute('data-tab');
  document.getElementById(contentId).classList.add('active');
}


function removeActiveFromTabs() {
  Array.from(document.getElementsByClassName('timetable__tab')).forEach(tab => {
    tab.classList.remove('active');
  });
  Array.from(document.getElementsByClassName('timetable__events')).forEach(event => {
    event.classList.remove('active');
  });
}