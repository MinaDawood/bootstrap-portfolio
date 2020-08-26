/*========== Vanilla Java script Code ==========*/

window.onload = function () {
  /**
   * The Page Load First Then The Loader Fades Out And Content Shows
   */
  $('.loader').fadeOut();
};

/*========== JQuery Code ==========*/

$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 20,
  items: 2,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  navText: [
    "<i class='fas fa-caret-left p-3 fa-2x text-white'></i>",
    "<i class='fas fa-caret-right p-3 fa-2x text-white'></i>",
  ],
  responsive: {
    0: {
      nav: false,
    },
    600: {
      nav: false,
    },
    1000: {
      nav: true,
    },
  },
});
