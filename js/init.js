(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });
    $('.carousel.carousel-slider').carousel({
      duration: 10
    });
    $('.carousel.carousel-slider').carousel({
      indicators: true
    });  

  }); // end of document ready
})(jQuery); // end of jQuery name space
