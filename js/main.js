var swiper = new Swiper(".MySwiper", {
  slidesPerView: 1,
  effect: "animation",
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".gototop").on("click", function () {
  scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= 200) {
    $(".gototop").addClass("back_to_top");
  } else {
    $(".gototop").removeClass("back_to_top");
  }
});

jQuery(document).ready(function ($) {
  $("#menu").mmenu({
    extensions: [
      "effect-menu-zoom",
      "effect-panels-zoom",
      "pagedim-black",
      "theme-dark",
    ],
    offCanvas: {
      position: "right",
    },
    counters: true,
    iconPanels: true,
    navbars: [
      {
        position: "top",
      },
    ],
  });
});

$(".navbar li").has("ul").addClass("header_bottom_icon");
