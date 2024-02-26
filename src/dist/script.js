const navbar = document.querySelector(".navigation");
const announcement = document.querySelector(".announcement");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", function() {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    navbar.classList.add("navigation-scroll");
    announcement.classList.add("announcement-scroll");
  } else {
    navbar.classList.remove("navigation-scroll");
    announcement.classList.remove("announcement-scroll");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".content-wrapper", {
    slidesPerView: 2,
    spaceBetween: 25,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".nextslide",
      prevEl: ".backslide",
    },
  });
});
