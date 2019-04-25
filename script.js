$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $("#about-btn").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about_scroll").offset().top
        }, 750);
        $(".navbar-menu").removeClass("is-active");
        $(".navbar-burger").removeClass("is-active");
    });

    $("#work-btn").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects_scroll").offset().top
        }, 750);
        $(".navbar-menu").removeClass("is-active");
        $(".navbar-burger").removeClass("is-active");
    });

    $("#contact-btn").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact_scroll").offset().top
        }, 750);
        $(".navbar-menu").removeClass("is-active");
        $(".navbar-burger").removeClass("is-active");
    });

  });