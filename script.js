let menu = document.querySelector('#menu-bars');
let headernav = document.querySelector('.headernav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    headernav.classList.toggle('active');
}

let section= document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .headernav a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    headernav.classList.remove('active');



        
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
    
}


document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true,
  });

var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
       },
   loop:true,
    });