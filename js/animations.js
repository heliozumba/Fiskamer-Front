$(function() {
  AOS.init({
    duration: 2000
  });
  //$(".home-text").attr("data-aos", "fade-right");
  if ($("body").scrollTop() < 800) {
    $(".home-text").addClass("animated fadeInLeft");
    $(".search-bar").addClass("animated fadeInUp");
  }

  //$(".box").addClass("animated zoomIn");
  $(".box").hover(
    function(event) {
      $("#" + this.id)
        .animate({
          marginTop: "12%"
        })
        .css("box-shadow", "2px 2px 6px 0px #ffcd03");

      //$("#" + this.id + " > .description-container").show();
    },
    function() {
      $("#" + this.id)
        .animate({
          marginTop: "10%"
        })
        .css("box-shadow", "1px 2px 5px 0px gray");
      // $("#" + this.id + " > .description-container").fadeOut();
    }
  );

  function rep() {
    $(".box-master").fadeToggle("slow");
    $(".box-master2").fadeToggle("slow");
  }

  window.setInterval(rep, 5000);
});
