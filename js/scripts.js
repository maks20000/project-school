$(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
    });

    if ($(window).scrollTop()>10) {
        white_header();
    }

    var owl = $(".owl-carousel");
    $(".a_left").click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $(".a_right").click(function() {
        owl.trigger('next.owl.carousel', [300]);
    });

    owl.on('changed.owl.carousel', function(event) {
        var num = $(".num_page .num");
        num.html(event.page.index+1)
    })

    $("nav .menu").click(function() {
        var v = $("nav");
        $("nav .menu .s1").toggleClass("toggle1");
        $("nav .menu .s2").toggleClass("toggle2");
        $(".nav-menu").toggleClass("nav-visible");
        if (v.attr("menu")==0) v.attr("menu",1)
        else v.attr("menu",0)
        if (v.attr("value")==0) {
            white_header();
        }
        else if (v.attr("value")>0 && v.attr("menu")==0 && $(window).scrollTop()<=10){
            reset_header ();
        }
    });


    $(window).scroll(function() {
        if ($(window).scrollTop()>10) {
            white_header();
        }
        if ($(window).scrollTop()<=10) {
            var v = $("nav");
            if (v.attr("value")>0 && v.attr("menu")==0)
            reset_header();
        }
    });


    function white_header () {
        var nav = $("nav");
        var phone = $("nav .phone");
        $("nav .logo .white").css("display", "none")
        $("nav .logo .black").css("display", "block")
        $("nav .menu span").css("backgroundColor", "#000")
        nav.css("backgroundColor", "#fff");
        phone.css("color", "#000");
        nav.attr("value",1);
    }

    function reset_header () {
        var nav = $("nav");
        var phone = $("nav .phone");
        $("nav .logo .white").css("display", "block")
        $("nav .logo .black").css("display", "none")
        $("nav .menu span").css("backgroundColor", "#fff")
        nav.css("backgroundColor", "transparent");
        phone.css("color", "#fff");
        nav.attr("value",0);
    }

});