$(document).ready(function(){
  
  var scroll_pos = 0;
  $(document).scroll(function() { 
    var scrollPosition = $(this).scrollTop();

    if(scrollPosition > 300) {
      $("header").css('background-color', 'rgba(187, 216, 234, 0.9)');
      $("header").css('transition', '0.3s');
      }else {
        $("header").css('background-color', 'transparent');
      }
  });

  $(".icon-menu").click(function(){
    if($(".hamburger-close-icon").is('[src="assets/icons/hamburger-menu-icon.svg"]')){
      $('.hamburger-close-icon').attr('src',"assets/icons/close-menu-icon.svg");
      $('#logo').addClass("logo-color-white");
      $('#logo-name').addClass("logo-name-white");
      $("#navbar").css("display", 'block');
      }else{
        $('.hamburger-close-icon').attr('src',"assets/icons/hamburger-menu-icon.svg");
        $('#logo').attr('src',"assets/icons/logo-dog.svg");
        $('#logo').removeClass("logo-color-white");
        $('#logo-name').removeClass("logo-name-white");
        $("#navbar").css("display", 'none');
      } 
  });


  $(".service-option-wrapper").on('click', function() {
    $(this).toggleClass('is-active').children(".option-content").stop().slideToggle(500);
    $(this).toggleClass("active-background-color");
  });

  $('.product-slider').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  autoplay: false,
	  infinite: true,
	  nextArrow: $('.slider-button-next'),
	  prevArrow: $('.slider-button-prev'),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
	});
});



