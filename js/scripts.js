// all functions ------------------
function initBionick() {
    "use strict";
	// window load  ------------------
	$(window).load(function() {
		var a = [],
		b = window.location.href.split("#")[1],
		c = $("header").outerHeight(true),
		hb = $("html, body");
		$(".scroll-nav a").each(function() {
			var b = new Image();
			b.src = $(this).data("bgscr");
			a.push(b);
		});
		$(".loader").fadeOut(500, function() {
			$("#main").animate({
				opacity: "1"
			}, 500);
			contanimshow();
		});
		if (b && $("#" + b).length) {
			hb.animate({
				scrollTop: 0
			}, 1);
			setTimeout(function() {
				hb.animate({
					scrollTop: $("#" + b).offset().top - c
				}, {
					queue: false,
					duration: 800,
					easing: "easeInOutExpo"
				});
			}, 1550);
		}
	});
    function ahc() {
        $(" .fwslider .item").css({
            height: $(".fwslider").outerHeight(true)
        });
        $(".height-emulator").css({
            height: $("footer").outerHeight(true)
        });
        $(".nav-inner nav ").css({
            "margin-top": -1 * $(".nav-inner nav ").height() / 2 + "px"
        });
    }
    ahc();
    $(window).resize(function() {
        ahc();
    });
    $(".wrapper-inner , .fixed-column , footer , .hero-wrapper").addClass("viselem");
    $("nav li.subnav a").append('<svg class="icon subnavicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>');
	// owlCarousel ------------------
    var fw = $(".fwslider");
    fw.owlCarousel({
        items: 1,
        nav: false
    });
    $(".fwslider-holder a.next-slide").on("click", function() {
        $(this).closest(".fwslider-holder").find(fw).trigger("next.owl.carousel");
    });
    $(".fwslider-holder a.prev-slide").on("click", function() {
        $(this).closest(".fwslider-holder").find(fw).trigger("prev.owl.carousel");
    });
	// other functions ------------------
    $(".scroll-nav-holder").scrollToFixed({
        minWidth: 1036
    });
	// scroll animation ------------------
    var bnt;
    $(window).scroll(function() {
        var a = $(this).scrollTop();
        if (a > 300) $("footer").addClass("visfooter"); else $("footer").removeClass("visfooter");
        clearTimeout(bnt);
        bnt = setTimeout(function() {
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - 2) {
                var c = $(".scroll-nav a").last();
                $(".scroll-nav a").removeClass("act-link");
                c.addClass("act-link");
                $(".bg-scroll").css("background-image", "url(" + c.data("bgscr") + ")");
                $(".bg-title span").html(c.data("bgtex"));
            }
        }, 300);
    });
    $(".nav-inner nav li").on("mouseenter", function() {
        $(this).find("ul").stop().slideDown();
        $(".nav-inner").addClass("menhov");
    });
    $(".nav-inner nav li").on("mouseleave", function() {
        $(this).find("ul").stop().slideUp();
        $(".nav-inner").removeClass("menhov");
    });
    $(".subnav a.custom-scroll-link").on("click", function() {
        var a = $(window).width();
        if (a < 1036) setTimeout(function() {
            hidemenu();
        }, 450);
    });
    var bgi2 = $(".fbgs").data("bgscr");
    var bgt2 = $(".fbgs").data("bgtex");
    $(".bg-scroll").css("background-image", "url(" + bgi2 + ")");
    $(".bg-title span").html(bgt2);
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link",
        onComplete: function() {
            if ($(".scroll-nav  a").hasClass("act-link")) $(".scroll-nav  a.act-link").each(function() {
                var a = $(this).data("bgscr"),
                b = $(this).data("bgtex");
                $(".bg-scroll").css("background-image", "url(" + a + ")");
                $(".bg-title span").html(b);
            });
        }
    });
    $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    var cm = $(".nav-button");
    var nh = $(".nav-inner");
    function showmenu() {
        setTimeout(function() {
            nh.addClass("vismen");
        }, 120);
        cm.addClass("cmenu");
        nh.removeClass("isDown");
    }
    function hidemenu() {
        nh.addClass("isDown");
        cm.removeClass("cmenu");
        nh.removeClass("vismen");
    }
    cm.on("click", function() {
        if (nh.hasClass("isDown")) showmenu(); else hidemenu();
    });
    $(".sect-subtitle span").fitText(3.2, {
        minFontSize: "120px",
        maxFontSize: "140px"
    });
	// content show ------------------
function contanimshow() {
    $(".content-holder").removeClass("scale-bg2");
    setTimeout(function() {
        $(".viselem").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 1
                }, 900);
            }, 480 * a);
        });
    }, 250);
}

}
$(document).ready(function() {
    initBionick();
});
