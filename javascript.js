$(function () {
  $(".multiple_items").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    infinite: false,
    speed: 300,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
/** datetime picker */
config = {
  dateFormat: "d-m-Y",
};
flatpickr("input[type=datetime-local]", config);
