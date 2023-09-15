'use strict'
console.log("Hi");

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 4.5,
  spaceBetween: 20,
  

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
  
    992: {
      slidesPerView: 3,
      spaceBetween: 14
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