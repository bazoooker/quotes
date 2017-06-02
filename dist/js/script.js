
$(function(){
  $('.hero-slider').slick({
  accessibility: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
});

$(function(){
  $('.quotes__slider').slick({
  accessibility: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  dotsClass: 'quotes__slider_dots',
  // appendDots: $(.quotes)
});
});

$("document").ready(function() {
	$(".nav__menu").on("click", function() {
    $('.nav-main').toggleClass('nav-main_on');
    $('.nav__menu').toggleClass('nav__menu_close');
    $('.nav__menu_text').toggleClass('nav__menu_text_close');
    // $('.nav__menu').empty();
  });	
});