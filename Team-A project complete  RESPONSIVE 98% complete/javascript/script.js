// screnn shot  slider js 

$(document).ready(function(){
    $('.slide_container').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        focusOnSelect:true,
        responsive:[
          // XXlarg device
          {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
          }
        },
        // xlarge device
        {
          breakpoint: 1399.98,
          settings: {}
        },
        // large device
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 4,

          }
        },
        // medium device
        {
          breakpoint: 992.98,
          settings: {
            slidesToShow: 3,

          }
        },
        // small device
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,

          }
        },
        // extra small device
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
          }
        }
      ]
    });
  });

  // testimonial slider js
  $(document).ready(function(){
    $('.testimonial_slider').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade:true,
        responsive:[
          // X-small device
          {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            infinite: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            fade:true,
          }
        },
      ]
    });
  });

  // team slide js
  $(document).ready(function(){
    $('.team_slide_container').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        focusOnSelect:true,
        responsive:[
          // large device
          {
            breakpoint: 1199.98,
            settings: {
            slidesToShow: 4,

            }
          },
          // mediumdevice 
         { breakpoint: 992.98,
          settings: {
            slidesToShow: 3,

          }
        },
          // small device
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              autoplay: false,

  
            }
          },
          // Xsmall device
          {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 2000,
            focusOnSelect:true,
          }
        },
      ]

    });
  });

// counter up js
$('.counter').counterUp({
  delay: 5,
  time: 1000,
});

// wow js
new WOW().init();