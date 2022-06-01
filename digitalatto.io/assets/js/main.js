/*====================================================
Template Name: DGTL
Description: Cryptocurrency Bootstrap 5 HTML Template
Author: Youtoview
Version: 1.0
======================================================

- back to top script
- progressbar
- tab
- Chart
- Countdown Timer
- horizontal timeline
- video-popup
- owlcarusel
- carousel resize
- animation wow
- preloader
- fat-nav 
========================================================*/

jQuery(function() {

    // -------back to top script-----------
    var offset = 500;
    var back_top = jQuery('.backtop');
    jQuery(window).scroll(function(){
        (jQuery(this).scrollTop() > offset) ? back_top.addClass('show_icon') :  back_top.removeClass('show_icon');
    });


    // ----------progressbar--------------
    if (jQuery('#progressbar').length > 0) {
        jQuery( "#progressbar" ).progressbar({
            value: 70
        });
    }
    if (jQuery('#progressbar2').length > 0) {
        jQuery( "#progressbar2" ).progressbar({
            value: 70
        });
    }

    // ----------------tab-------------------
    if (jQuery('#horizontalTab').length > 0) {
        jQuery('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            //closed: 'accordion', // Start closed if in accordion view
            activate: function() { // Callback function if tab is switched
                var $tab = jQuery(this);
                var $info = jQuery('#tabInfo');
                var $name = jQuery('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    // ---------------countdown timer--------------

    // clock-1 - index-1.html
    if (jQuery('#clock').length > 0) {
        var exp_date = "JUN 27, 2022 00:00:00";
        timer("clock", exp_date);
    }

    function timer(clockID, exp_date) {
        // Set the date we're counting down to
        var countDownDate = new Date(exp_date).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            //add a zero (0) if value less then 9
            var days    = ( days < 10 ) ? '0' + days : days;
            var hours   = ( hours < 10 ) ? '0' + hours : hours;
            var minutes = ( minutes < 10 ) ? '0' + minutes : minutes;
            var seconds = ( seconds < 10 ) ? '0' + seconds : seconds;

            // Output the result in an element with id="demo"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = minutes;
            document.getElementById("secs").innerHTML = seconds;

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                var distance= 0;
                document.getElementById("days").innerHTML = 00;
                document.getElementById("hours").innerHTML = 00;
                document.getElementById("mins").innerHTML = 00;
                document.getElementById("secs").innerHTML = 00;

            }
        }, 1000);
    }

    //------------- horizontal timeline--------------
    if (jQuery('.timeline').length > 0) {
        timeline(document.querySelectorAll('.timeline'), {
            forceVerticalMode: 767,
            mode: 'horizontal',
            verticalStartPosition: 'left',
            visibleItems: 4
        });
    }

    // -------------video-popup-------------------
    if (jQuery('.video-button').length > 0) {
        jQuery(".video-button").modalVideo({
            youtube:{
                autoplay: 1,
                controls: 1              
            },
            ratio:'16:9'
        });
    }

    // ------------owlcarusel----------
    if (jQuery('.client-logos-slider').length > 0) {
        jQuery(".client-logos-slider").owlCarousel({
            items: 6, // The number of items you want to see on the screen.
            margin: 0, //margin-right(px) on item.
            loop: true, //Infinity loop. Duplicate last and first items to get loop illusion.
            autoplay: true, //Autoplay true or false
            // width: auto,
            mouseDrag: true, // Mouse drag enabled.
            touchDrag: true, // Touch drag enabled.
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
            nav: false, // Show next/prev buttons.
            dotsEach: false, //Show dots each x item.
            smartSpeed: 750, // slide speed
            dots: false, //Show dots navigation.
            lazyLoad:true,
            responsive: {
                0:{
                    items: 2
                },480:{
                    items: 3
                },767:{
                    items: 4
                },991:{
                    items: 5
                },992:{
                    items: 6
                }
            }
        });
    }

    //---------- animation wow-------------
    if (jQuery('.wow').length > 0) {
        jQuery(function(){
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                scrollContainer: null,
            });
            wow.init();
        });
    }
});


//-------- page loader--------------
jQuery(window).on('load', function() {
    setTimeout(function(){ 
        jQuery('.preloader').fadeOut('slow');
    }, 500);

});


//--------- fat-nav-----------------
jQuery(document).ready(function() {

    if (jQuery('.fat-nav').length > 0) {
        (function() { jQuery.fatNav(); }());
        var fatContent = jQuery( '.main-menu ul').html();
        var fatHeaderRight = jQuery( '.header-right').html();
        var fatNav = '<div class="fat-nav__wrapper" id="fatmenu"><ul>' + fatContent + '<div class="header-right">' + fatHeaderRight + '</div></ul></div>';
        jQuery( '.fat-nav' ).html( fatNav );
        jQuery('#fatmenu ul li.menu-item-has-children').append("<span class='toggle_button'><small></small></span>");
        jQuery('#fatmenu ul ul').hide();
        jQuery('ul li.menu-item-has-children > .toggle_button').click(function() {
            if(jQuery(this).parent().children('ul').hasClass('submenu') ) {
                jQuery(this).parent().children('ul').removeClass("submenu").slideUp(400);
                jQuery(this).removeClass( 'active_item' );
            }
            else{
                jQuery(this).parent().children('ul').addClass("submenu").slideDown(400);
                jQuery(this).addClass( 'active_item' );
            }
        });
    }

    jQuery('.main-menu ul li ul').parent('li').addClass('menuarrow');

});


jQuery(window).resize(function() {
    var win_width = jQuery(window).width();
    if (win_width > 1099) {
        jQuery('.fat-nav').removeClass('active').css("display", "none");
        jQuery('.hamburger').removeClass('active');
    }

});


/* Intro timer script */
function handleTickInit(tick) {
    // create the countdown counter
    /* If you need to set a new end date for timer just edit date below */
    const counter = Tick.count.down('2022-06-27T00:00:00');

    counter.onupdate = function (value) {
        tick.value = value;
    };
}