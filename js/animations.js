$(function() {
  AOS.init({
    duration: 2000
  });
  //$(".home-text").attr("data-aos", "fade-right");
  $(".home-text").addClass("animated fadeInLeft");
  $(".search-bar").addClass("animated fadeInUp");
  //$(".box").addClass("animated zoomIn");
  $(".overlay").hover(
    function() {
      $(".box")
        .animate({
          height: "500px",
          marginTop: "50px"
        })
        .css("box-shadow", "2px 2px 6px 0px #ffcd03");

      $(".description-container").show();
      $(".button-container").show();
    },
    function() {
      $(".box")
        .animate({
          height: "300px",
          marginTop: "0px"
        })
        .css("box-shadow", "1px 2px 5px 0px gray");
      $(".description-container").fadeOut();
      $(".button-container").fadeOut();
    }
  );
});
