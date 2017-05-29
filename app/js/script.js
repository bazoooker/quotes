
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
	$(".reasons__wrapper").find(".reason__heading").css("text-align", "center")
	
});