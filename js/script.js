$(document).ready(function() {


  $(".logo").click(function() {
    $(".navTriangle").toggleClass("active");
    $(".navbarUL").toggleClass("active");
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 635) {
      if (!$(".nav2").hasClass("visible")) {
        $(".nav2").toggleClass("visible");
      }
    } else if ($(window).scrollTop() < 635) {
      if ($(".nav2").hasClass("visible")) {
        $(".nav2").toggleClass("visible");
      }
    }



  });


});
