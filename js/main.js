/*--------------------------------------------------------------
 Custom js
 --------------------------------------------------------------*/
var snapper = new Snap({
    element: document.getElementById('page'),
    dragger: document.getElementsByClassName('page'),
    disable: 'right',
    slideIntent: 10,
});
var addEvent = function addEvent(element, eventName, func) {
    if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};
addEvent(document.getElementById('open-left'), 'click', function () {
    snapper.open('left');
});
jQuery(document).ready(function ($) {
    'use strict';

    // search in menu
    var $search_btn = $('.search-box > i'),
        $search_form = $('form.search-form');

    $search_btn.on('click', function () {
        $search_form.toggleClass('open');
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest($search_btn).length == 0
            && $(e.target).closest('input.search-field').length == 0
            && $search_form.hasClass('open')) {
            $search_form.removeClass('open');
        }
    });
    if ($('.one-page-scroll').length > 0) {
        onePageScroll();
        $(window).resize(function () {
            onePageScroll();
        });
    }
    // Set height for onepage-scroll
    function onePageScroll() {
        var $opScroll = $('.one-page-scroll'),
            $hWindows = $(window).height(),
            $hHeader = $('.site-header').outerHeight(),
            $hFooter = $('.site-footer').outerHeight();
        $opScroll.onepage_scroll({
            sectionContainer: '.one-page-scroll > .vc_row',
            loop: false
        });

        $opScroll.css('height', $hWindows - ( $hHeader + $hFooter ) + 'px');
    }

    var $window = $(window);
    // Scroll up
    var $scrollup = $('.scrollup');

    $window.scroll(function () {
        if ($window.scrollTop() > 100) {
            $scrollup.addClass('show');
        } else {
            $scrollup.removeClass('show');
        }
    });

    $scrollup.on('click', function (evt) {
        $("html, body").animate({scrollTop: 0}, 600);
        evt.preventDefault();
    });

    // Menu mobile
    var $menu = $( '.mobile-menu' );

    $menu.find( '.sub-menu-toggle' ).on( 'click', function( e ) {
        var subMenu = $( this ).next();

        if ( subMenu.css( 'display' ) == 'block' ) {
            subMenu.css( 'display', 'block' ).slideUp().parent().removeClass( 'expand' );
        } else {
            subMenu.css( 'display', 'none' ).slideDown().parent().addClass( 'expand' );
        }
        e.stopPropagation();
    } );

});


