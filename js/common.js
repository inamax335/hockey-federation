$(function() {

  var HeaderTop = $('.main_menu_wrap').offset().top;

  $(window).scroll(function(){
      if( $(window).scrollTop() > HeaderTop ) {
        $('.main_menu_wrap').addClass('fixed_menu animated fadeInDown');
      } else {
        $('.main_menu_wrap').removeClass('fixed_menu animated fadeInDown');
      }
  });

  var owl_events = $('.events_carousel');
  owl_events.owlCarousel({
    loop: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 2,
        loop: true
      },
      // breakpoint from 480 up
      480 : {
        items: 3,
        loop: true
      },
      // breakpoint from 768 up
      768 : {
        items: 4,
        loop: true
      },
      1200 : {
        items: 6,
        loop: true
      }
    }
  });
  // Go to the next item
  $('.events_customNextBtn').click(function() {
      owl_events.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.events_customPrevBtn').click(function() {
      owl_events.trigger('prev.owl.carousel');
  });


  $('.news_carousel').owlCarousel({
      responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 480 up
      480 : {
        items: 1
      },
      // breakpoint from 768 up
      768 : {
        items: 1,
        dots: true
      }
    }
  });

  var owl_birthday = $('.birthday_carousel');
  owl_birthday.owlCarousel({
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 2,
        loop: true
      },
      // breakpoint from 480 up
      480 : {
        items: 2,
        loop: true
      },
      // breakpoint from 768 up
      768 : {
        items: 4,
        loop: true
      },
      // breakpoint from 768 up
      1200 : {
        items: 6,
        loop: true
      }
    }
  });
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl_birthday.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      owl_birthday.trigger('prev.owl.carousel');
  });



  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,

    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }

  });

  $('.zoom-gallery2').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,

    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }

  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $(".toggle-mnu").on('click', function() {
    $(this).toggleClass("on");
    $('.mob-mnu').toggleClass("on");
  });

   $(".search_toggle").on('click', function() {
    $(this).toggleClass("show");
    $('.search_menu').toggleClass("show");
  });

   $(".live_video_btn").on('click', function() {
    $(this).toggleClass("on");
    $('.live_video_content').toggle("slow");
  });

   $(".turnir_btn").on('click', function() {
    $(this).toggleClass("on");
    $('.turnir_name').toggle("slow");
    $('#turniryTabContent').toggle("slow");
  });

   $(".tablo_btn").on('click', function() {
    $(this).toggleClass("on");
    $('.body_tablo').toggle("hide");
  });


});
