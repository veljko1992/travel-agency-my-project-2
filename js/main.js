//Navigation
var nav = $("nav");
var menuBtn = $("#menu-btn");
var winWidth = $(window).width();

if (winWidth >= 992) {
  nav.css("display", "block");
  menuBtn.css("display", "none");
} else {
  nav.css("display", "none");
  menuBtn.css("display", "block");
}

$(window).resize(function() {
  winWidth = $(window).width();
  if (winWidth >= 992) {
    nav.css("display", "block");
    menuBtn.css("display", "none");
  } else {
    nav.css("display", "none");
    menuBtn.css("display", "block");
  }
});

menuBtn.on("click", function() {
  if ($(nav).attr("class") == "open") {
    $("#menu-btn span").removeClass("bOpen");
    nav.fadeOut(400, function() {
      nav.removeClass("open");
    });
  } else {
    $("#menu-btn span").addClass("bOpen");
    nav.fadeIn(400);
    nav.addClass("open");
  }
});
nav.on("click", function() {
  if (winWidth < 992 || $(this).attr("class") == "open") {
    $("#menu-btn span").removeClass("bOpen");
    $(this).fadeOut(400, function() {
      $(this).removeClass("open");
    });
  }
});
//Navigation END

//Shrink hedera on scrool
var fromTop;

$(window).on("scroll", function() {
  fromTop = $(this).scrollTop();
  if (fromTop > 200) {
    $("header").addClass("small");
  } else {
    $("header").removeClass("small");
  }
});
//Shrink hedera on scrool END

//Carusel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
//Carusel END