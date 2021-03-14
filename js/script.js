$(document).ready(function(){

    $(".bar").click(function(){
        $(".nav").animate({
         "left":"0px"
        },200);
      });
    
      $(".close").click(function(){
        $(".nav").animate({
          "left": "-250px"
        },200);
      });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        stagePadding:50,
        slideBy:2,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            700:{
                items:3,
                loop:true
            },
            800:{
                items:4,
                loop:true
            },
            900:{
                items:4,
                loop:true
            },
            1000:{
                items:4,
                loop:true
            }
        }
    })
});