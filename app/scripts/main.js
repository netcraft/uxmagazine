$(document).ready(function() {
 
  // owl carousel
  $(".courses .gallery").owlCarousel({
  	singleItem: true,
  	itemForcedWidth: 394,

  	afterMove: function() {
  		var self = this;

  		$(".owl-item").removeClass("current");
  		$(".owl-item:nth-child("+(this.currentItem+1)+")").addClass("current");

  		$(".owl-item").each(function(index, element) {
  			var transform = {translateX: 0, scale: 1};
  			var zIndex = 50;

  			if (index < self.currentItem) {
  				if (index == self.currentItem-1) {
  					transform.translateX = -20;
  					transform.scale = 0.9;
  					zIndex -= 1;
  				} else {
  					transform.translateX = 20;
  					transform.scale = 0.9;
  					zIndex -= 2;
  				}
  			} else if (index > self.currentItem) {
				transform.translateX = -132-(((index-1) - self.currentItem) * 40);
				transform.scale = 0.9;
  				zIndex -= (index - self.currentItem);
  			} else {
				transform.translateX = -78;
				transform.scale = 1;
  			}

  			$(element).find(".gallery-item")
  					  .css("transform", "translateX("+transform.translateX+"px) scale("+transform.scale+")");
  			$(element).css("z-index", zIndex);
  		});
  	}
  });

  var owl = $(".owl-carousel").data('owlCarousel');
  owl.goTo(1);


  // experience slideshow
  $("#slideshow > img:gt(0)").hide();

  setInterval(function() { 
    $("#slideshow > img:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  },  4000);

  // parallax effect
  function parallaxImage1() {
    var scrolled = $(document).scrollTop();
    var screenHeight = $(document).height();

    var percentScrolled = scrolled / screenHeight;
    var remainingImageHeight = 516;

    if (scrolled > 6000 && scrolled < 8200) {
      var percent = (8200 - scrolled) / 2200;
      $(".teaching .inner-image").css("top", -(percent * remainingImageHeight) + 100 + "px");
    }
  }

  function parallaxImage2() {
    var scrolled = $(document).scrollTop();
    var screenHeight = $(document).height();

    var percentScrolled = scrolled / screenHeight;
    var remainingImageHeight = 1120;

    if (scrolled > 12000 && scrolled < screenHeight) {
      var percent = (screenHeight - scrolled) / (screenHeight - 12000);
      //console.log("percent  " + percent);
      $(".lior .inner-image").css("top", -(percent * remainingImageHeight) + "px");
    }
  }

  $(window).on("scroll", function(event){
    parallaxImage1();
    parallaxImage2();

    // var scrolled = $(document).scrollTop();
    // var screenHeight = $(document).height();
    // console.log("scrolled " + scrolled);
    // console.log("screenHeight" + screenHeight);
    // console.log(screenHeight-scrolled);
    // console.log(scrolled / screenHeight);
  });
 
});