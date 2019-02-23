$(document).ready(function(){
    'use strict';
    new WOW().init();
    $("div#amplitude-right").niceScroll({
        cursorcolor: "#0d0d18",
        cursorwidth: "8px",
        cursorborder: "1px solid transparent",
        autohidemode: false
    });

    $('select').niceSelect();

    $('.scrollToTop').fadeOut();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('fixed-top');
            $('.scrollToTop').fadeIn();
        } else {
            $('.navbar').removeClass('fixed-top');
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});