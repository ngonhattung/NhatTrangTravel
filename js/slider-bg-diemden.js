$(document).ready(function(){
    $('.backgroup-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
    });
  });

  $(document).ready(function(){
    $('.slider-pg4-diemden').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
         prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
         nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });
      
      