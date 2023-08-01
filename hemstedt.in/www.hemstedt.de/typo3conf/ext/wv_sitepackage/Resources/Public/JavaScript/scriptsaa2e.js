jQuery(document).ready(function($) {

    $('.mmenu').mmenu({
        offCanvas: {
           position: "left",
           zposition: "front"
        },
        onClick: {
            close: false
        }
    }).removeClass('mmenu-hidden');

    var mmenu = $('.mmenu').data('mmenu');

    $(".mmenu-toggle").click(function() {
        mmenu.open();
    });

    $(".mm-next, .mm-prev").click(function(e) {
        e.preventDefault();
        var $target = $(this).data('target');
            $target = $($target);

        mmenu.openPanel($target);
    });

    // Slick slider for Header-slideshow
    $(".header-slider .ce-inner").slick({
        adaptiveHeight: true,
        mobileFirst:    true,
        infinite:       true,
        autoplay:       true,
        autoplaySpeed:  5000,
        fade:           true,
        arrows:         false,
        dots:           false
    });

    $(".slickslider.one-item > div > ul").slick({
        mobileFirst: true,
        infinite: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".slickslider.two-items > div > ul").slick({
        mobileFirst: true,
        infinite: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false
            }
        },
        {
            breakpoint: 1023,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
        ]
    });

    $(".slickslider.three-items > div > ul").slick({
        mobileFirst: true,
        infinite: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false
            }
        },
        {
            breakpoint: 1023,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
        ]
    });

    $(".slickslider.four-items > div > ul").slick({
        mobileFirst: true,
        infinite: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false
            }
        },
        {
            breakpoint: 1023,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
        ]
    });

    $(".slickslider.five-items > div > ul").slick({
        mobileFirst: true,
        infinite: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false
            }
        },
        {
            breakpoint: 1023,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }
        ]
    });

    // Anker- un Parameter-Links trotz base-Tag
   $("a[href^='\#']").each(function(){
      this.href=location.href.split("#")[0]+'#'+this.href.substr(this.href.indexOf('#')+1);
   });
   $("a[href^='\?']").each(function(){
      this.href=location.href.split("?")[0]+'?'+this.href.substr(this.href.indexOf('?')+1);
   });

    // Sprachenwechsler / Suche
    $('#buttonMap').click(function(){
        $('#changeLang').toggle('500');
    });
    $('#buttonLupe').click(function(){
        $('#topSearch').toggle('50000');
        $('.searchField').val('').focus();
    });

    $('.hidden-onload').removeClass('hidden-onload');

    // Kontext-Menü bei Bildern verhindern
    /*
    $('body').bind('contextmenu',function(e){
        return false;
    });
    */

    // Vita
    $('.vita').hide();
    $('.vita-headline').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('.vita').slideToggle();
    });

});