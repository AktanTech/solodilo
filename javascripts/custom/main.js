/*
 * IGNITE - Premium HTML5 Template from Designova
 * Author: Designova, http://www.designova.net
 * Copyright (C) 2015 Designova
 * This is a premium product. For licensing queries please contact info@designova.net
 */

/*global $:false */
/*global window: false */
(function () {
    "use strict";
    $(function ($) {

        //Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();
        //Adjusting Intro Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);
        $('.quarterheight').css('height', vH - vH / 6);
        $('html, body').css('width', vW);


        /*Equal Heights JS by Designova*/
        $.fn.setAllToMaxHeight = function () {
            return this.css({ 'height': '' }).height(Math.max.apply(this, $.map(this, function (e) { return $(e).height() })));
        }
        $('.eq-height1').setAllToMaxHeight();
        $('.eq-height2').setAllToMaxHeight();
        $('.eq-height3').setAllToMaxHeight();
        $('.eq-height4').setAllToMaxHeight();


        //PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function () {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility',
                'visible');
        });

        //Sub Menu Trigger
        $('.main-menu li a.sub-menu-trigger').on('mouseenter', function () {
            $(this).next('.sub-menu').stop().slideDown(1000);
        });
        $('.main-menu li').on('mouseleave', function () {
            $('.sub-menu').stop().slideUp(1000);
        });

        //Main Menu Trigger
        (function ($) {
            $.fn.menuPanelTrigger = function () {
                if ($(".mastnav").is(":hidden")) {
                    $('.mastnav').fadeIn();
                }
                else {
                    $('.mastnav').fadeOut();
                }
            };
        })(jQuery);
        $('.menu-notification a, .menu-close-notification a').on('click', function (e) {
            e.preventDefault();
            $().menuPanelTrigger();
        });

        //Scrolling Sections
        $(".scroll").on('click', function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
            $().menuPanelTrigger();
        });

        //On-Scroll Animations
        $(window).load(function () {

            if (!device.tablet() && !device.mobile()) {

                $('.animated').appear(function () {
                    $(this).each(function () {
                        $(this).css('visibility', 'visible');
                        $(this).addClass($(this).data('fx'));
                    });
                }, { accY: -100 });

            }

            else {
                $('.animated').css("visibility", "visible");
            }
        });

        //PORTFOLIO UX
        (function ($) {
            $.fn.filterPanelTrigger = function () {
                if ($(".works-filter-panel").is(":hidden")) {
                    $('.works-filter-panel').slideDown();
                }
                else {
                    $('.works-filter-panel').slideUp();
                }
            };
        })(jQuery);
        $('.filter-notification a').on('click', function (e) {
            e.preventDefault();
            $().filterPanelTrigger();
        });
        $('.works-filter li a').on('click', function () {
            $('.works-filter li a').removeClass('filter-active');
            $(this).addClass('filter-active');
            return false;
        });


        if ($(".works-container").length) {
            $('.filter-notification a').show();
        }
        else {
            $('.filter-notification a').hide();
        }

        //ISOTOPE

        //ISOTOPE GLOBALS
        var $container1 = $('.works-container');

        //ISOTOPE INIT
        $(window).load(function () {
            $container1.isotope({
                // options
                itemSelector: '.works-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            //forcing a perfect masonry layout after initial load
            setTimeout(function () {
                $container1.isotope('layout');
            }, 100);
            // filtering
            $('.works-filter li a').on('click', function () {
                $('.works-filter li a').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.works-container').isotope({
                    filter: selector
                });
                setTimeout(function () {
                    $container1.isotope('layout');
                }, 700);
                return false;
            });
        });

        //Isotope ReLayout on Window Resize event.
        $(window).on('resize', function () {
            $container1.isotope('layout');
        });

        //Isotope ReLayout on device orientation changes
        window.addEventListener("orientationchange", function () {
            $container1.isotope('layout');
        }, false);

        //VENOBOX
        $('.venobox, .image-lightbox-link').venobox({
            numeratio: true,
            infinigall: true
        });

        //CAROUSEL
        $(".team-carousel").owlCarousel({
            loop: true,
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
        });

        $(".promo-carousel").owlCarousel({
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
        });
        $(".project-carousel").owlCarousel({
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
        });

        //Slick Carousel / Synchronized:

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });

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
        });
        //PARALLAX LAYERS:

        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $.stellar({
                positionProperty: 'transform'
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).on('load', function () {
                parallaxInit();
            });

        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }

        /******************************************
          SLIDER REVOLUTION  -
        ******************************************/

        var setREVStartSize = function () {
            try {
                var e = new Object,
                    i = jQuery(window).width(),
                    t = 9999,
                    r = 0,
                    n = 0,
                    l = 0,
                    f = 0,
                    s = 0,
                    h = 0;
                e.c = jQuery('#rev_slider_3_1');
                e.responsiveLevels = [1240, 1024, 778, 480];
                e.gridwidth = [1900, 1024, 778, 420];
                e.gridheight = [900, 768, 960, 720];

                e.sliderLayout = "fullwidth";
                if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
                    f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
                }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
                    var u = (e.c.width(), jQuery(window).height());
                    if (void 0 != e.fullScreenOffsetContainer) {
                        var c = e.fullScreenOffsetContainer.split(",");
                        jQuery.each(c, function (e, i) {
                            u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                        }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
                    }
                    f = u
                } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
                e.c.closest(".rev_slider_wrapper").css({
                    height: f
                })
            } catch (d) {
                console.log("Failure at Presize of Slider:" + d)
            }
        };


        setREVStartSize();

        $(document).ready(function () {
            $('#rev_slider_3_1').show().revolution({
                sliderType: "standard",
                sliderLayout: "fullwidth",
                jsFileLocation: "javascript/",
                dottedOverlay: "none",
                delay: 5000,
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: "hades",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-arr-allwrapper">   <div class="tp-arr-imgholder"></div></div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        enable: true,
                        hide_onmobile: false,
                        style: "hades",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 5,
                        tmp: '<span class="tp-bullet-image"></span>'
                    }
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [1900, 1024, 778, 420],
                gridheight: [900, 768, 960, 720],
                lazyType: "none",
                parallax: {
                    type: "mouse+scroll",
                    origo: "slidercenter",
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                },
                shadow: 0,
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: "off",
                },
            });
            //FULLSCREEN BG VIDEO:

            /* plays the BG Vimeo or Youtube video if non-mobile device is detected*/
            if (!device.tablet() && !device.mobile()) {

                /* plays the BG Vimeo or Youtube video if non-mobile device is detected*/
                $(".video-bg").okvideo({
                    source: '64686559', //set your video source here
                    autoplay: true,
                    loop: true,
                    highdef: true,
                    hd: true,
                    adproof: true,
                    volume: 0 // control the video volume by setting a value from 0 to 99
                });
            } else {
                /* displays a poster image if mobile device is detected*/
                $('.video-bg').addClass('poster-img');

            }
            //CONTACT FORM VALIDATION
            $(document).ready(function ($) {

                // hide messages 
                $(".error").hide();
                $(".success").hide();
                $('#contactForm input').on('click', function () {
                    $(".error").fadeOut();
                    return false;
                });
                // on submit...
                $("#contactForm #submit").on('click', function () {
                    $(".error").hide();
                    //required:
                    //name
                    var name = $("input#name").val();
                    if (name == "") {
                        //$("#error").fadeIn().text("Name required.");
                        $('#fname').fadeIn('slow');
                        $("input#name").focus();
                        return false;
                    }

                    //email (check if entered anything)
                    var email = $("input#email").val();
                    //email (check if entered anything)
                    if (email == "") {
                        //$("#error").fadeIn().text("Email required");
                        $('#fmail').fadeIn('slow');
                        $("input#email").focus();
                        return false;
                    }

                    //email (check if email entered is valid)

                    if (email !== "") {  // If something was entered
                        if (!isValidEmailAddress(email)) {
                            $('#fmail').fadeIn('slow'); //error message
                            $("input#email").focus();   //focus on email field
                            return false;
                        }
                    }

                    function isValidEmailAddress(emailAddress) {
                        var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
                        return pattern.test(emailAddress);
                    };

                    // comments
                    var comments = $("#msg").val();

                    if (comments == "") {
                        //$("#error").fadeIn().text("Email required");
                        $('#fmsg').fadeIn('slow');
                        $("input#msg").focus();
                        return false;
                    }

                    return false;
                });
                // on success...
                function success() {
                    $("#success").fadeIn();
                    $("#contactForm").fadeOut();
                }
                return false;
            });
            //GOOLGE MAPS with SNAZZY MAP:
            // When the window has finished loading create our google map below
            var map_shown = false;
            google.maps.event.addDomListener(window, 'load', map_init);

            function map_init() {

                //Setup waypoints plugin
                $('.contact').waypoint(function (direction) {
                    var myLatLng = new google.maps.LatLng(21.025121, -89.649213)
                    if (direction === 'down' && !map_shown) {
                        map_shown = true;
                        // Basic options for a simple Google Map
                        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                        var mapOptions = {
                            // How zoomed in you want the map to start at (always required)
                            zoom: 15,

                            // The latitude and longitude to center the map (always required)
                            center: myLatLng, // New York

                            // How you would like to style the map. 
                            // This is where you would paste any style found on Snazzy Maps.
                            // styles: [{ "stylers": [{ "visibility": "simplified" }] }, { "stylers": [{ "color": "#131314" }] }, { "featureType": "water", "stylers": [{ "color": "#131313" }, { "lightness": 7 }] }, { "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "lightness": 25 }] }]
                        };

                        // Get the HTML DOM element that will contain your map 
                        // We are using a div with id="map" seen below in the <body class="-body">
                        var mapElement = document.getElementById('map');

                        // Create the Google Map using our element and options defined above
                        var map = new google.maps.Map(mapElement, mapOptions);

                        // Let's also add a marker while we're at it
                        var marker = new google.maps.Marker({
                            position: myLatLng,
                            map: map,
                            title: 'Solo Dilo',
                        });
                    }
                    else {
                    }
                }, { offset: 100 });
            }
        }); //ready

        $(".icon-a").click(function(evt){
            var id_div = evt.currentTarget.offsetParent.id;
            var display_info = evt.currentTarget.hash;

            $(`${display_info}`).on('show.bs.collapse', function () {
                $(`#${id_div}`).removeClass("col-md-12");
                $(`#${id_div}`).addClass("col-md-4");
            })
            $(`${display_info}`).on('hidden.bs.collapse', function () {
                $(`#${id_div}`).removeClass("col-md-4");
                $(`#${id_div}`).addClass("col-md-12");
            })
        })

        $(".hover-team").click(function(evt){
            var id_div = evt.currentTarget.id;
            var ancho = $(".info-gral-1").width();
            $(".hover-team").css("display","none");

            switch(id_div){
                case "sindy":
                    $("#full-team").fadeIn('slow',function(){
                        $("#full-team").removeClass();
                        $("#full-team").addClass("team-01-carousel-item-02 hover-contain img-bg-full");    
                        $("#full-team").css("z-index","3");
                        $(".info-gral-1").css("display","block");
                        $(".work-description-1").css("display","block");
                        $(".info-gral-1>h1").show("slide");
                        $(".work-description-1>h5").show("drop");
                    })
                break;
                case "alejandro":
                    $("#full-team").fadeIn('slow',function(){
                        $("#full-team").removeClass("team-01-carousel-item-01 img-bg");
                        $("#full-team").addClass("team-01-carousel-item-03 hover-contain");
                        $("#full-team").css("z-index","3");
                        $(".info-gral-2").css("display","block");
                        $(".work-description-2").css("display","block");
                        $(".info-gral-2>h1").show("slide");
                        $(".work-description-2>h5").show("drop");
                    })
                break;
                case "alex":
                    $("#full-team").fadeIn('slow',function(){
                        $("#full-team").removeClass("team-01-carousel-item-01 img-bg");
                        $("#full-team").addClass("team-01-carousel-item-04 hover-contain");
                        $("#full-team").css("z-index","3");
                        $(".info-gral-3").css("display","block");
                        $(".work-description-3").css("display","block");
                        $(".info-gral-3>h1").show("slide");
                        $(".work-description-3>h5").show("slide");
                    })
                break;
                case "web":
                    $("#full-team").fadeIn('slow',function(){
                        $("#full-team").removeClass("team-01-carousel-item-01 img-bg");
                        $("#full-team").addClass("team-01-carousel-item-05 hover-contain");
                        $("#full-team").css("z-index","3");
                        $(".info-gral-4").css("display","block");
                        $(".work-description-4").css("display","block");
                        $(".info-gral-4>h1").show("slide");
                        $(".work-description-4>h5").show("slide");
                    })
                break;
            }
            
        });

        $("#full-team").hover(null, function(){
            if(!($("#full-team").hasClass("team-01-carousel-item-01"))){
                $("#full-team").fadeOut(function(){
                    $("#full-team").removeClass();
                    $("#full-team").addClass("team-01-carousel-item-01 img-bg img-bg-full");
                    $("#full-team").css("display","block");
                    $(".hover-team").css("display","block");
                    //Team-1
                    $(".info-gral-1").css("display","none");
                    $(".work-description-1").css("display","none");
                    $(".info-gral-1>h1").hide("drop");
                    $(".work-description-1>h5").hide("fold");
                    //Team-2
                    $(".info-gral-2").css("display","none");
                    $(".work-description-2").css("display","none");
                    $(".info-gral-2>h1").hide("drop");
                    $(".work-description-2>h5").hide("fold");
                    //Team-3
                    $(".info-gral-3").css("display","none");
                    $(".work-description-3").css("display","none");
                    $(".info-gral-3>h1").hide("drop");
                    $(".work-description-3>h5").hide("fold");
                    //Team-4
                    $(".info-gral-4").css("display","none");
                    $(".work-description-4").css("display","none");
                    $(".info-gral-4>h1").hide("drop");
                    $(".work-description-3>h5").hide("fold");
                })
            }
        });
    });
    // $(function ($)  : ends
    
})();
//  JSHint wrapper $(function ($)  : ends

