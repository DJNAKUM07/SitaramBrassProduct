
loadHeaderFooter('header.html', 'header-container');
loadHeaderFooter('footer.html', 'footer-container', () => {
  // Call hideFooterDivs after the footer is loaded
  let footerEleHide = ["latest-product-area"];
  hideHeaderFooterDivs();
});

// loadHeaderCSS();

(function ($) {
  "use strict";

  /* 1. Preloader */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });

  /* 2. Slick Nav */
  // Mobile Menu
  $(document).ready(function () {
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    }
  });

  /* 3. Main Slider */
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  /* 4. Testimonial Active */
  var testimonial = $('.h1-testimonial-active');
  if (testimonial.length) {
    testimonial.slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: false,
      loop: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
  }

  /* 5. Gallery Active */
  var client_list = $('.completed-active');
  if (client_list.length) {
    client_list.owlCarousel({
      slidesToShow: 2,
      slidesToScroll: 1,
      loop: true,
      autoplay: true,
      speed: 3000,
      smartSpeed: 2000,
      nav: false,
      dots: false,
      margin: 15,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 }
      }
    });
  }

  /* 6. Nice Select */
  var nice_Select = $('select');
  if (nice_Select.length) {
    nice_Select.niceSelect();
  }

  /* 7. Custom Sticky Menu */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky-bar");
    } else {
      $(".header-sticky").addClass("sticky-bar");
    }

    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

  /* 8. ScrollUp */
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="ti-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  /* 9. Data Background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
  });


  /* 10. WOW active */
  new WOW().init();

  /* 11. Datepicker */

  // 11. ---- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


  // 12 Pop Up Img
  var popUp = $('.single_gallery_part, .img-pop-up');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }







  /* ----------------- Other Inner page Start ------------------ */


  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  var review = $('.client_review_slider');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: false,
      navText: [" <i class='ti-angle-left'></i> ", "<i class='ti-angle-right'></i> "],
      responsive: {
        0: {
          nav: false
        },
        768: {
          nav: false
        },
        991: {
          nav: true
        }
      }
    });
  }


  var product_slide = $('.product_img_slide');
  if (product_slide.length) {
    product_slide.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: false,
      navText: [" <i class='ti-angle-left'></i> ", "<i class='ti-angle-right'></i> "],
      responsive: {
        0: {
          nav: false
        },
        768: {
          nav: false
        },
        991: {
          nav: true
        }
      }
    });
  }

  //product list slider
  var product_list_slider = $('.product_list_slider');
  if (product_list_slider.length) {
    product_list_slider.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: ["next", "previous"],
      smartSpeed: 1000,
      responsive: {
        0: {
          margin: 15,
          nav: false,
          items: 1
        },
        600: {
          margin: 15,
          items: 1,
          nav: false
        },
        768: {
          margin: 30,
          nav: true,
          items: 1
        }
      }
    });
  }

  if ($('.img-gal').length > 0) {
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  // niceSelect js code
  $(document).ready(function () {
    $('select').niceSelect();
  });

  // $('.counter').counterUp({
  //   time: 2000
  // });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay: true,
    pauseOnFocus: true,
    dots: true,
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        centerMode: false,
      }
    }]
  });


  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  //------- makeTimer js --------//  
  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("27 Sep 2019 12:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html("<span>Days</span>" + days);
    $("#hours").html("<span>Hours</span>" + hours);
    $("#minutes").html("<span>Minutes</span>" + minutes);
    $("#seconds").html("<span>Seconds</span>" + seconds);

  }
  // click counter js
  (function () {

    window.inputNumber = function (el) {

      var min = el.attr('min') || false;
      var max = el.attr('max') || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function () {
        init($(this));
      });

      function init(el) {

        els.dec.on('click', decrement);
        els.inc.on('click', increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    }
  })();

  inputNumber($('.input-number'));



  setInterval(function () {
    makeTimer();
  }, 1000);


  $('.select_option_dropdown').hide();
  $(".select_option_list").click(function () {
    $(this).parent(".select_option").children(".select_option_dropdown").slideToggle('100');
    $(this).find(".right").toggleClass("fas fa-caret-down, fas fa-caret-up");
  });

  if ($('.new_arrival_iner').length > 0) {
    var containerEl = document.querySelector('.new_arrival_iner');
    var mixer = mixitup(containerEl);
  }


  $('.controls').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


  /* ----------------- Other Inner page End ------------------ */


})(jQuery);


/* ----------------- Load Header & Footer ------------------ */

function loadHeaderFooter(pageName, containerId, callback = null) {
  document.addEventListener("DOMContentLoaded", async function () {
    try {
      // Fetch the header/footer HTML content based on the page name
      const response = await fetch(`Pages/${pageName}`); // Dynamically load the page
      const data = await response.text(); // Wait for the text content of the response

      // Inject the HTML into the specified container by ID
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = data;

        // If callback is provided, call it after the content is loaded
        if (callback) {
          callback(); // Calls the callback function to hide divs or any other post-load action
        }
      } else {
        console.error(`Container with ID '${containerId}' not found.`);
      }
    } catch (error) {
      console.error('Error loading the header/footer:', error); // Handle errors here
    }
  });
}


/* ----------------- Load Header ------------------ */

/* ----------------- hide Div's From Header & Footer ------------------ */

function hideHeaderFooterDivs() {
  // check which html page is loaded & base on that map ids to hide
  let ids = [];
  const pageName = window.location.pathname.split('/').pop().split('.').shift();

  switch (pageName) {
    case 'index':
      break;
    case 'Category':
      ids = ["latest-product-area"];
      break;
    case 'product_list':
      ids = ["latest-product-area", "best-product-area", "best-collection-area", "latest-offers", "shop-method-area", "gallery-area"];
      break;
    case 'contact':
      ids = ["latest-product-area", "best-product-area", "best-collection-area", "latest-offers", "shop-method-area", "gallery-area"];
    case 'QualityPolicy':
      ids = ["latest-product-area", "best-product-area", "best-collection-area", "latest-offers", "shop-method-area", "gallery-area"];
      break;
    default:
      break;
  }

  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none'; // Sets display to none
    }
  });
}

/* ----------------- hide Div's From Header & Footer ------------------ */

/* ----------------- loadHeaderCSS ------------------ */


function loadHeaderCSS() {
  // Create a <style> element to inject CSS into the <head> section
  var style = document.createElement("style");
  style.innerHTML = `
        /* Ensure that the main menu is hidden on small screens */
        .main-menu {
            display: none;
        }

        /* Make the mobile menu visible only on small screens */
        .mobile_menu {
            display: block;
        }

        /* SlickNav Button (Mobile Menu Button) */
        .slicknav_btn {
            background-color: #333;
            color: #fff;
            font-size: 16px;
            padding: 10px;
            border: none;
            cursor: pointer;
        }

        .slicknav_btn:hover {
            background-color: #444;
        }

        .slicknav_icon {
            display: block;
            position: relative;
        }

        .slicknav_icon-bar {
            width: 22px;
            height: 3px;
            background-color: #fff;
            margin: 4px 0;
            transition: all 0.3s ease;
        }

        /* Mobile Menu Items */
        .slicknav_menu {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .slicknav_menu li {
            background-color: #333;
            margin: 5px 0;
            border-radius: 5px;
        }

        .slicknav_menu li a {
            display: block;
            padding: 10px;
            color: #fff;
            text-decoration: none;
            font-size: 16px;
        }

        .slicknav_menu li a:hover {
            background-color: #444;
            color: #fff;
        }

        /* Submenu Items */
        .slicknav_menu .submenu li a {
            background-color: #555;
            padding-left: 30px;
        }

        .slicknav_menu .submenu li a:hover {
            background-color: #666;
        }

        /* Ensure Menu is hidden and shows on mobile */
        @media (max-width: 992px) {
            .main-menu {
                display: none;
            }

            .mobile_menu {
                display: block;
            }

            .slicknav_btn {
                display: block;
            }

            /* Adjust menu items for mobile */
            .slicknav_menu li {
                background-color: #333;
                padding-left: 20px;
            }

            /* Customize menu item text */
            .slicknav_menu li a {
                font-size: 18px;
            }

            /* Adjust submenu for mobile */
            .slicknav_menu .submenu li a {
                font-size: 16px;
                padding-left: 40px;
            }
        }
    `;

  // Append the style to the <head> section
  document.head.appendChild(style);
}

/* ----------------- loadHeaderCSS ------------------ */




