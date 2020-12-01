$(document).ready();
$(".shop__bannerTrack").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  prevArrow: ".shopPrevArrow",
  nextArrow: ".shopNextArrow",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
      },
    },
  ],
});
