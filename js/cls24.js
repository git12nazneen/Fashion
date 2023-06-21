$(".banner-main").slick({
    slidesToShow:1,
    slidesToScroll:1,
      arrows:false,
      dots:true
})


$(".screen-main").slick({
  slidesToShow:5,
  slidesToScroll:1,
  nextArrow:".next",
  prevArrow:".prev",
})



$('.team-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.team-img'
});
$('.team-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.team-text',
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});