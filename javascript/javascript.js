//
// $(document).ready(function(){
//     var altura = $(window).height();
//
//     alert(altura);
// });

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

// $('.owl.carousel').owlCarousel({
//     center: true,
//     items:2,
//     loop:true,
//     margin:10,
//     responsive:{
//         600:{
//             items:4
//         }
//     }
// });
// $('.nonloop').owlCarousel({
//     center: true,
//     items:2,
//     loop:false,
//     margin:10,
//     responsive:{
//         600:{
//             items:4
//         }
//     }
// });
