// CAROUSEL
$(document).ready(function(){
    var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
});
// CAROUSEL

// Descer suave
    jQuery(document).ready(function($){
        $(".scroll").click(function(event){
            if ($(window).width() > 768){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 900);
            }
            if ($(window).width() < 768){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top - 80}, 900);
            }
        });
    });
// Descer suave

// Fechar menu ao clicar em link e fora das opções
$(function(){
    var navMain = $("#barra-navegacao");

    $('body').click(function(){
        navMain.collapse('hide');
    });

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// Fechar menu ao clicar em link e fora das opções
