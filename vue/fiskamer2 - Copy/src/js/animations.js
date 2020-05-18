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
    console.log("In");
  }

  //window.setInterval(rep, 5000);
  //$(this).height
  $(window).scroll(function() {
    $("#home-nav").toggleClass("bg-dark", $(this).scrollTop() > 10);
  });

  $("#nextMaster").click(function() {
    $("#bm-1").effect("slide");
    $();
  });

  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $("#myCarousel > .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#myCarousel > .carousel-item")
            .eq(i)
            .appendTo("#myCarousel > .carousel-inner");
        } else {
          $("#myCarousel > .carousel-item")
            .eq(0)
            .appendTo($(this).find("#myCarousel > .carousel-inner"));
        }
      }
    }
  });
});
