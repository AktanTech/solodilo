/*
 * IGNITE - Premium HTML5 Template from Designova
 * Author: Designova, http://www.designova.net
 * Copyright (C) 2015 Designova
 * This is a premium product. For licensing queries please contact info@designova.net
 */

/* global $:false */
/* global window: false */
(function () {
  'use strict'
  $(function ($) {
    // Detecting viewpot dimension
    var vH = $(window).height()
    var vW = $(window).width()
    // Adjusting Intro Components Spacing based on detected screen resolution
    $('.fullwidth').css('width', vW)
    $('.fullheight').css('height', vH)
    $('.halfwidth').css('width', vW / 2)
    $('.halfheight').css('height', vH / 2)
    $('.quarterheight').css('height', vH - vH / 6)
    $('html, body').css('width', vW)

    if (vW <= 800) {
      // Cambio de imagen
      $('#carruselImage').attr('src', './images/featured/ParaMovil.gif')

      // Frase de Slider
      $('.slidePhrase').attr('data-transform_out', 'opacity:0;s:300;s:300;')
      $('.slidePhrase').attr('data-start', '250')
      $('.slidePhrase').attr('data-end', '2720')

      // Letras de Slider
      $('.slideLetter').attr('data-start', '3000')
      $('.slideLetter').attr('data-end', '5720')
    }

    /* Equal Heights JS by Designova */
    $.fn.setAllToMaxHeight = function () {
      return this.css({ 'height': '' }).height(Math.max.apply(this, $.map(this, function (e) { return $(e).height() })))
    }
    $('.eq-height1').setAllToMaxHeight()
    $('.eq-height2').setAllToMaxHeight()
    $('.eq-height3').setAllToMaxHeight()
    $('.eq-height4').setAllToMaxHeight()

    // PRELOADER
    $('body, html').addClass('preloader-running')
    $('#mastwrap').css('visibility', 'hidden')
    $(window).load(function () {
      $('#status').fadeOut()
      $('#preloader').delay(1000).fadeOut(1000)
      $('body, html').removeClass('preloader-running')
      $('body, html').addClass('preloader-done')
      $('#mastwrap').delay(1000).css('visibility',
        'visible')
    })

    // Sub Menu Trigger
    $('.main-menu li a.sub-menu-trigger').on('mouseenter', function () {
      $(this).next('.sub-menu').stop().slideDown(1000)
    })
    $('.main-menu li').on('mouseleave', function () {
      $('.sub-menu').stop().slideUp(1000)
    });

    // Main Menu Trigger
    (function ($) {
      $.fn.menuPanelTrigger = function () {
        if ($('.mastnav').is(':hidden')) {
          $('.mastnav').fadeIn()
        } else {
          $('.mastnav').fadeOut()
        }
      }
    })(jQuery)
    $('.menu-notification a, .menu-close-notification a').on('click', function (e) {
      e.preventDefault()
      $().menuPanelTrigger()
    })

    // Scrolling Sections
    $('.scroll').on('click', function (event) {
      event.preventDefault()
      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500)
      $().menuPanelTrigger()
    })

    // On-Scroll Animations
    $(window).load(function () {
      if (!device.tablet() && !device.mobile()) {
        $('.animated').appear(function () {
          $(this).each(function () {
            $(this).css('visibility', 'visible')
            $(this).addClass($(this).data('fx'))
          })
        }, { accY: -100 })
      } else {
        $('.animated').css('visibility', 'visible')
      }
    });

    // PORTFOLIO UX
    (function ($) {
      $.fn.filterPanelTrigger = function () {
        if ($('.works-filter-panel').is(':hidden')) {
          $('.works-filter-panel').slideDown()
        } else {
          $('.works-filter-panel').slideUp()
        }
      }
    })(jQuery)
    $('.filter-notification a').on('click', function (e) {
      e.preventDefault()
      $().filterPanelTrigger()
    })
    $('.works-filter li a').on('click', function () {
      $('.works-filter li a').removeClass('filter-active')
      $(this).addClass('filter-active')
      return false
    })

    if ($('.works-container').length) {
      $('.filter-notification a').show()
    } else {
      $('.filter-notification a').hide()
    }

    // ISOTOPE

    // ISOTOPE GLOBALS
    var $container1 = $('.works-container')

    // ISOTOPE INIT
    $(window).load(function () {
      $container1.isotope({
        // options
        itemSelector: '.works-item',
        layoutMode: 'masonry',
        transitionDuration: '0.8s'
      })
      // forcing a perfect masonry layout after initial load
      setTimeout(function () {
        $container1.isotope('layout')
      }, 100)
      // filtering
      $('.works-filter li a').on('click', function () {
        $('.works-filter li a').removeClass('active')
        $(this).addClass('active')

        var selector = $(this).attr('data-filter')
        $('.works-container').isotope({
          filter: selector
        })
        setTimeout(function () {
          $container1.isotope('layout')
        }, 700)
        return false
      })
    })

    // Isotope ReLayout on Window Resize event.
    $(window).on('resize', function () {
      $container1.isotope('layout')
    })

    // Isotope ReLayout on device orientation changes
    window.addEventListener('orientationchange', function () {
      $container1.isotope('layout')
    }, false)

    // VENOBOX
    $('.venobox, .image-lightbox-link').venobox({
      numeratio: true,
      infinigall: true
    })

    // CAROUSEL
    $('.team-carousel').owlCarousel({
      loop: false,
      rewind: true,

      margin: 0,
      dots: true,
      nav: false,
      navText: false,
      navSpeed: 3000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })

    $('.promo-carousel').owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      nav: true,
      navText: false,
      navSpeed: 3000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 6
        }
      }
    })
    $('.project-carousel').owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      nav: true,
      navText: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })

    // Slick Carousel / Synchronized:

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    })

    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
    // PARALLAX LAYERS:

    // Initialize Each Parallax Layer
    function parallaxInit () {
      $.stellar({
        positionProperty: 'transform'
      })
    }

    if (!device.tablet() && !device.mobile()) {
      // Activating Parallax effect if non-mobile device is detected
      $(window).on('load', function () {
        parallaxInit()
      })
    } else {
      // Dectivate Parallax effect if mobile device is detected (bg image is displayed)
      $('.parallax, .parallax-layer').addClass('no-parallax')
    }

    /******************************************
          SLIDER REVOLUTION  -
        ******************************************/

    var setREVStartSize = function () {
      try {
        var e = new Object()

        var i = jQuery(window).width()

        var t = 9999

        var r = 0

        var n = 0

        var l = 0

        var f = 0

        var s = 0

        var h = 0
        e.c = jQuery('#rev_slider_3_1')
        e.responsiveLevels = [1240, 1024, 778, 480]
        e.gridwidth = [1900, 1024, 778, 420]
        e.gridheight = [900, 768, 960, 720]

        e.sliderLayout = 'fullwidth'
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
          f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
        }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), e.sliderLayout === 'fullscreen') {
          var u = (e.c.width(), jQuery(window).height())
          if (void 0 != e.fullScreenOffsetContainer) {
            var c = e.fullScreenOffsetContainer.split(',')
            jQuery.each(c, function (e, i) {
              u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
            }), e.fullScreenOffset.split('%').length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
          }
          f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight)
        e.c.closest('.rev_slider_wrapper').css({
          height: f
        })
      } catch (d) {
        console.log('Failure at Presize of Slider:' + d)
      }
    }

    setREVStartSize()

    $(document).ready(function () {
      $('#rev_slider_3_1').show().revolution({
        sliderType: 'standard',
        sliderLayout: 'fullwidth',
        jsFileLocation: 'javascript/',
        dottedOverlay: 'none',
        delay: 5000,
        navigation: {
          keyboardNavigation: 'on',
          keyboard_direction: 'horizontal',
          mouseScrollNavigation: 'off',
          onHoverStop: 'off',
          touch: {
            touchenabled: 'on',
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: 'horizontal',
            drag_block_vertical: false
          },
          arrows: {
            style: 'hades',
            enable: true,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '<div class="tp-arr-allwrapper">   <div class="tp-arr-imgholder"></div></div>',
            left: {
              h_align: 'left',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0
            },
            right: {
              h_align: 'right',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0
            }
          },
          bullets: {
            enable: true,
            hide_onmobile: false,
            style: 'hades',
            hide_onleave: false,
            direction: 'horizontal',
            h_align: 'center',
            v_align: 'bottom',
            h_offset: 0,
            v_offset: 20,
            space: 5,
            tmp: '<span class="tp-bullet-image"></span>'
          }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1900, 1024, 778, 420],
        gridheight: [900, 768, 960, 720],
        lazyType: 'none',
        parallax: {
          type: 'mouse+scroll',
          origo: 'slidercenter',
          speed: 400,
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
        },
        shadow: 0,
        spinner: 'spinner0',
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: 'off',
        autoHeight: 'off',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: 'off',
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: 'off'
        }
      })
      // FULLSCREEN BG VIDEO:

      /* plays the BG Vimeo or Youtube video if non-mobile device is detected */
      if (!device.tablet() && !device.mobile()) {
        /* plays the BG Vimeo or Youtube video if non-mobile device is detected */
        $('.video-bg').okvideo({
          source: '64686559', // set your video source here
          autoplay: true,
          loop: true,
          highdef: true,
          hd: true,
          adproof: true,
          volume: 0 // control the video volume by setting a value from 0 to 99
        })
      } else {
        /* displays a poster image if mobile device is detected */
        $('.video-bg').addClass('poster-img')
      }

      // GOOLGE MAPS with SNAZZY MAP:
      // When the window has finished loading create our google map below
      var map_shown = false
      google.maps.event.addDomListener(window, 'load', map_init)

      function map_init () {
        // Setup waypoints plugin
        $('.contact').waypoint(function (direction) {
          var myLatLng = new google.maps.LatLng(21.025121, -89.649213)
          if (direction === 'down' && !map_shown) {
            map_shown = true
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 20,

              // The latitude and longitude to center the map (always required)
              center: myLatLng // New York

              // How you would like to style the map.
              // This is where you would paste any style found on Snazzy Maps.
              // styles: [{ "stylers": [{ "visibility": "simplified" }] }, { "stylers": [{ "color": "#131314" }] }, { "featureType": "water", "stylers": [{ "color": "#131313" }, { "lightness": 7 }] }, { "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "lightness": 25 }] }]
            }

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body class="-body">
            var mapElement = document.getElementById('map')

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions)

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Solo Dilo'
            })
          } else {
          }
        }, { offset: 100 })
      }
    }) // ready

    $('.icon-serv-a').hover(function (evt) {
      var id_div = evt.currentTarget.children[0].id
      var display_info = evt.currentTarget.children[1].id
      $(`#${display_info}`).show()
      if ($(window).width() > 600) {
        $(`#${id_div}`).removeClass('col-md-offset-4')
        $(`#${id_div}`).addClass('col-md-offset-1')
      }
    }, function (evt) {
      var id_div = evt.currentTarget.children[0].id
      var display_info = evt.currentTarget.children[1].id
      $(`#${display_info}`).hide()
      if ($(window).width() > 600) {
        $(`#${id_div}`).removeClass('col-md-offset-1')
        $(`#${id_div}`).addClass('col-md-offset-4')
      }
    })

    $('.icon-serv-b').hover(function (evt) {
      var id_div = evt.currentTarget.children[0].id
      var display_info = evt.currentTarget.children[1].id
      $(`#${display_info}`).show()
      $(`#${id_div}`).addClass('col-md-4 col-sm-4')
    }, function (evt) {
      var id_div = evt.currentTarget.children[0].id
      var display_info = evt.currentTarget.children[1].id
      $(`#${display_info}`).hide()
      $(`#${id_div}`).removeClass('col-md-4 col-sm-4')
    })

    var memoDiv = new Array()
    var idDiv = new Array()
    var itemDiv = ''
    var isDrag = false

    if ($(window).width() > 600) {
      $('.team-carousel-item').click(function (evt) {
        isDrag = false
        var imgClass = evt.currentTarget.classList[1]
        itemDiv = evt.currentTarget
        var viewActive = $('.owl-item.active' || '.owl-item.cloned.active')
        switch (imgClass) {
          case 'team-01-carousel-item-01':
            idDiv.push(evt.currentTarget.id)
            memoDiv.push('team-carousel-item team-01-carousel-item-01 text-center img-bg')
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-01-hover text-center img-bg-hover disable-owl-swipe')
            var divA = "<h1>Sindy Tec</h1><h4>CEO Y DIRECTOR CREATIVO</h4><h3>'Al compromiso no le <br>importa como te sientas, <br>¡ve y hazlo!'<br><div><a href='https://www.instagram.com/sindy_teher/?hl=es-la' target='_blank'><i class='fab fa-instagram'></i></a><a href='https://www.facebook.com/Sindy-Teher-293837087909110/' target='_blank'><i style='font-size: 2.4rem;' class='fab fa-facebook-f'></i></a></div></h3>"
            var divB = '<h5>Me defino sin filtros, proactiva y terca. Agradecida totalmente de la vida, la oveja creativa de la familia y divertida.</h5>'
            hoverIn(viewActive, memoDiv, divA, divB)
            break

          case 'team-01-carousel-item-02':
            idDiv.push(evt.currentTarget.id)
            memoDiv.push('team-carousel-item team-01-carousel-item-02 text-center img-bg')
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-02-hover text-center img-bg-hover disable-owl-swipe')
            var divA = '<h1>Alejandro Valera</h1><h4>SOCIO EJECUTIVO</h4><h3>"Encuentra una manera de resolverlo, osea ¡SOLUCIÓNALO!"<br><div><a href="https://www.instagram.com/alejandrovalera__/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/Alejandro-Valera-2237305619837723/" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
            var divB = '<h5>Soy una persona auténtica, que te dice la verdad, me encanta el trato con la gente e ir por retos nuevos para cumplir con mi mision</h5>'
            hoverIn(viewActive, memoDiv, divA, divB)
            break
          case 'team-01-carousel-item-03':
            idDiv.push(evt.currentTarget.id)
            memoDiv.push('team-carousel-item team-01-carousel-item-03 text-center img-bg')
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-03-hover text-center img-bg-hover disable-owl-swipe')
            var divA = '<h1>Alex Zapata</h1><h4>JEFE DE PRODUCCION</h4><h3>"No estoy loco soy mentalmente divertido"<br><div><a href="https://www.instagram.com/aljozaso/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/aljozaso" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
            var divB = '<h5>Soy un hombre divertido, creativo, amiguero, empático, soñador. La vida me ha dado la fortuna rodearme de gente que me ama. Amante de los deportes y el cine.</h5>'
            hoverIn(viewActive, memoDiv, divA, divB)
            break
          case 'team-01-carousel-item-04':
            idDiv.push(evt.currentTarget.id)
            memoDiv.push('team-carousel-item team-01-carousel-item-04 text-center img-bg')
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-04-hover text-center img-bg-hover disable-owl-swipe')
            $(evt.currentTarget).css('background-size', 'contain !important')
            var divA = '<h1>Armando Carvajal & Victor Perera</h1><h4>DESARROLLO WEB</h4><h3>"Siempre innovando y hacia adelante"<br><div><a href="https://www.instagram.com/armando.carvajal.142/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/armando.carvajal.142" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
            var divB = '<h5>Una pareja profesional y única con extensos conocimientos de programación, gestión de proyectos de software y diseño web. Amantes de la tecnología y de los retos</h5><h3><br><div><a href="https://www.instagram.com/vic_rpr/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/victor.raul2" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
            hoverIn(viewActive, memoDiv, divA, divB)
            break
          case 'team-01-carousel-item-05':
            idDiv.push(evt.currentTarget.id)
            memoDiv.push('team-carousel-item team-01-carousel-item-05 text-center img-bg')
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-05-hover text-center img-bg-hover disable-owl-swipe')
            var divA = '<h1>Mariel Alvizo</h1><h4>DISEÑADORA</h4><h3>"Diseñando la vida es más sabrosa"<br><div><a href="https://www.instagram.com/marie_alvizo/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/mariel.alvizoperera" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
            var divB = '<h5>Desde pequeña prefería que me compraran plumones, colores o tijeras en vez de una muñeca. Cuando algo se rompe en mi casa siempre intento repararlo.Soy amante de los animales, tengo tres gatos, tres perros y un pececito llamado Sushi</h5>'
            hoverIn(viewActive, memoDiv, divA, divB)
            break
          case 'team-01-carousel-item-06':
            idDiv.push(evt.currentTarget.id)
            memoDiv.push('team-carousel-item team-01-carousel-item-06 text-center img-bg')
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-06-hover text-center img-bg-hover disable-owl-swipe')
            $(evt.currentTarget).css('background-size', 'contain !important')
            var divA = '<h1>Naomy King</h1><h4>COMMUNITY MANAGER</h4><h3>"Si amas lo que haces, ni los lunes te quitarán tu sonrisa"<br><div><a href="https://www.instagram.com/naomyking/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/naomy.king" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
            var divB = '<h5>Soy una mujer alegre y divertida que le gusta estar rodeada de buenos amigos y familia. Me gustaría tener mis propios negocios y ser una empresaria exitosa a nivel internacional</h5>'
            hoverIn(viewActive, memoDiv, divA, divB)
            break
        }
      }, null)

      $('.team-carousel').mousedown(function () {
        isDrag = false
      })
      $('.team-carousel').mousemove(function () {
        isDrag = true
      })

      $('.team-carousel').mouseup(function () {
        var wasDragging = isDrag
        isDrag = false
        if (wasDragging && memoDiv.length > 0) {
          // var imgClass = itemDiv.classList[1];
          var viewActive = $('.owl-item.active' || '.owl-item.cloned.active')
          hoverOut(viewActive, memoDiv)
          memoDiv = new Array()
          idDiv = new Array()
          itemDiv = ''
        }
      })

      $('.team-carousel').mouseleave(function (evt) {
        if (memoDiv.length > 0) {
          var imgClass = itemDiv.classList[1]

          var viewActive = $('.owl-item.active' || '.owl-item.cloned.active')
          switch (imgClass) {
            case 'team-01-carousel-item-01-hover':
              hoverOut(viewActive, memoDiv)
              break

            case 'team-01-carousel-item-02-hover':
              // $(itemDiv).removeClass();
              // $(itemDiv).addClass('team-carousel-item team-01-carousel-item-02 text-center img-bg');
              hoverOut(viewActive, memoDiv)
              break
            case 'team-01-carousel-item-03-hover':
              // $(itemDiv).removeClass();
              // $(itemDiv).addClass('team-carousel-item team-01-carousel-item-03 text-center img-bg');
              hoverOut(viewActive, memoDiv)
              break
            case 'team-01-carousel-item-04-hover':
              // $(itemDiv).removeClass();
              // $(itemDiv).addClass('team-carousel-item team-01-carousel-item-04 text-center img-bg');
              hoverOut(viewActive, memoDiv)
              break
            case 'team-01-carousel-item-05-hover':
              // $(itemDiv).removeClass();
              // $(itemDiv).addClass('team-carousel-item team-01-carousel-item-05 text-center img-bg');
              hoverOut(viewActive, memoDiv)
              break
            case 'team-01-carousel-item-06-hover':
              // $(itemDiv).removeClass();
              // $(itemDiv).addClass('team-carousel-item team-01-carousel-item-06 text-center img-bg');
              hoverOut(viewActive, memoDiv)
              break
          }

          memoDiv = new Array()
          idDiv = new Array()
          itemDiv = ''
        }
      })

      function hoverIn ($dato, $lista, $divA, $divB) {
        for (let i = 0; i < $dato.length; i++) {
          const classText = $dato[i].firstChild.className

          if (!(classText.indexOf('img-bg-hover') > -1)) {
            var divNone = $dato[i]
            $lista.push(divNone.firstChild.className)
            idDiv.push(divNone.firstChild.id)
            $(divNone.firstChild).removeClass()
            $(divNone.firstChild).addClass('team-carousel-item white-bg text-center img-bg disable-owl-swipe')
            if ($lista.length == 2) {
              divNone.firstChild.firstElementChild.innerHTML = $divA
            }
            if ($lista.length == 3) {
              divNone.firstChild.firstElementChild.innerHTML = $divB
            }
            $('.team-caps').show(1000)
          }
        }
      }

      function hoverOut ($dato, $lista) {
        for (let i = 0; i < idDiv.length; i++) {
          var divNone = $dato[i]
          divNone.firstChild.firstElementChild.innerHTML = ''
          $(`#${idDiv[i]}`).removeClass()
          $(`#${idDiv[i]}`).addClass($lista[i])
          $('.team-caps').html('')
        }
        $('.team-caps').html('')
        $('.team-caps').hide()
      }
    } else {
      $('.team-carousel-item').hover(function (evt) {
        var divEvt = evt.currentTarget.classList[1]
        switch (divEvt) {
          case 'team-01-carousel-item-01':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-01-hover text-center img-bg-hover')
            var divA = "<h1>Sindy Tec</h1><h4>CEO Y DIRECTOR CREATIVO</h4><h3>'Al compromiso no le <br>importa como te sientas, <br>¡ve y hazlo!'<br><div><a href='https://www.instagram.com/sindy_teher/?hl=es-la' target='_blank'><i style='font-size: 2rem;' class='fab fa-instagram'></i></a><a href='https://www.facebook.com/Sindy-Teher-293837087909110/' target='_blank'><i style='font-size: 2rem;' class='fab fa-facebook-f'></i></a></div></h3> <br> <h5>Me defino sin filtros, proactiva y terca. Agradecida totalmente de la vida, la oveja creativa de la familia y divertida.</h5>"
            $('#team-info').html(divA)
            break

          case 'team-01-carousel-item-02':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-02-hover text-center img-bg-hover')
            var divA = '<h1>Alejandro Valera</h1><h4>SOCIO EJECUTIVO</h4><h3>"Encuentra una manera de resolverlo, osea ¡SOLUCIÓNALO!"<br><div><a href="https://www.instagram.com/alejandrovalera__/?hl=es-la" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/Alejandro-Valera-2237305619837723/" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3><br> <h5>Soy una persona auténtica, que te dice la verdad, me encanta el trato con la gente e ir por retos nuevos para cumplir con mi mision</h5>'
            $('#team-info').html(divA)
            break

          case 'team-01-carousel-item-03':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-03-hover text-center img-bg-hover')
            var divA = '<h1>Alex Zapata</h1><h4>JEFE DE PRODUCCION</h4><h3>"No estoy loco soy mentalmente divertido"<br><div><a href="https://www.instagram.com/aljozaso/?hl=es-la" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/aljozaso" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3> <br> <h5>Soy un hombre divertido, creativo, amiguero, empático, soñador. La vida me ha dado la fortuna rodearme de gente que me ama. Amante de los deportes y el cine.</h5>'
            $('#team-info').html(divA)
            break

          case 'team-01-carousel-item-04':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-04-hover text-center img-bg-hover')
            var divA = '<h1>Armando Carvajal & Victor Perera</h1><h4>DESARROLLO WEB</h4><h3>"Siempre innovando y hacia adelante"<br><div><a href="https://www.instagram.com/armando.carvajal.142/?hl=es-la" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/armando.carvajal.142" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3> <br> <h5>Una pareja profesional y única con extensos conocimientos de programación, gestión de proyectos de software y diseño web. Amantes de la tecnología y de los retos</h5><h3><br><div><a href="https://www.instagram.com/vic_rpr/" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/victor.raul2" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3>'
            $('#team-info').html(divA)
            break

          case 'team-01-carousel-item-05':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-05-hover text-center img-bg-hover')
            var divA = '<h1>Mariel Alvizo</h1><h4>DISEÑADORA</h4><h3>"Diseñando la vida es más sabrosa"<br><div><a href="https://www.instagram.com/marie_alvizo/" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/mariel.alvizoperera" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3> <br> <h5>Desde pequeña prefería que me compraran plumones, colores o tijeras en vez de una muñeca. Cuando algo se rompe en mi casa siempre intento repararlo.Soy amante de los animales, tengo tres gatos, tres perros y un pececito llamado Sushi</h5>'
            $('#team-info').html(divA)
            break

          case 'team-01-carousel-item-06':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-06-hover text-center img-bg-hover')
            var divA = '<h1>Naomy King</h1><h4>COMMUNITY MANAGER</h4><h3>"Si amas lo que haces, ni los lunes te quitarán tu sonrisa"<br><div><a href="https://www.instagram.com/naomyking/" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/naomy.king" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3> <br> <h5>Soy una mujer alegre y divertida que le gusta estar rodeada de buenos amigos y familia. Me gustaría tener mis propios negocios y ser una empresaria exitosa a nivel internacional</h5>'
            $('#team-info').html(divA)
            break
        }
        $('#team-info').show(1000)
      }, function (evt) {
        var divEvt = evt.currentTarget.classList[1]
        console.log(divEvt)

        switch (divEvt) {
          case 'team-01-carousel-item-01-hover':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-01 text-center img-bg')
            break

          case 'team-01-carousel-item-02-hover':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-02 text-center img-bg')
            break
          case 'team-01-carousel-item-03-hover':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-03 text-center img-bg')
            break
          case 'team-01-carousel-item-04-hover':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-04 text-center img-bg')
            break
          case 'team-01-carousel-item-05-hover':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-05 text-center img-bg')
            break
          case 'team-01-carousel-item-06-hover':
            $(evt.currentTarget).removeClass()
            $(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-06 text-center img-bg')
            break
        }
        $('#team-info').html('')
        $('#team-info').hide()
      })
    }
  })
  // $(function ($)  : ends
})()
//  JSHint wrapper $(function ($)  : ends
