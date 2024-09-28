var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    history: {
        key: "slide",
      },
  });


 
 




// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 10,
//         },
//         1024: {
//           slidesPerView: 4,
//           spaceBetween: 10,
//         },
//       },
//   });
  