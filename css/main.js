var $myCarousel = $("carouselExampleIndicators");
$myCarousel.carousel();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

var ssBackToTop = function() {
  var pxShow = 500,
    goTopButton = $(".gotopbtn");

  // Show or hide the button
  if ($(window).scrollTop() >= pxShow) goTopButton.addClass("link-is-visible");

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= pxShow) {
      if (!goTopButton.hasClass("link-is-visible"))
        goTopButton.addClass("link-is-visible");
    } else {
      goTopButton.removeClass("link-is-visible");
    }
  });
};
