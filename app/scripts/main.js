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

  // $(".gallery-item").on("click", function(event){
  //   var $this = $(this);
  //   var galleryItems = $(".gallery-item");

  //   for (var i = 0; i < galleryItems.length; i++) {
  //     console.log(galleryItems[i]);
  //     console.log($this);
  //     if (galleryItems[i] === $this) {
  //       console.log(i);
  //     }
  //   };
  // });

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

  // parallax effect - teaching image
  function parallaxImage1() {
    var scrolled = $(document).scrollTop();
    var screenHeight = $(document).height();

    var percentScrolled = scrolled / screenHeight;
    var remainingImageHeight = 516;

    if (scrolled > 6000 && scrolled < 8200) {
      var percent = (8200 - scrolled) / 2200;
      $(".teaching .inner-image").css("top", -(percent * remainingImageHeight) + 50 + "px");
    }
  }

  // parallax effect - lior bottom image
  function parallaxImage2() {
    var scrolled = $(document).scrollTop();
    var screenHeight = $(document).height();

    var percentScrolled = scrolled / screenHeight;
    var remainingImageHeight = 1120;

    if (scrolled > 11400 && scrolled < screenHeight) {
      var percent = (screenHeight - scrolled) / (screenHeight - 11400);
      $(".lior .inner-image").css("top", -(percent * remainingImageHeight) + 100 + "px");
    }
  }

  // parallax effect - digital play image
  function parallaxImage3() {
    var scrolled = $(document).scrollTop();
    var screenHeight = $(document).height();

    var percentScrolled = scrolled / screenHeight;
    var remainingImageHeight = 420;

    if (scrolled > 9200 && scrolled < 10800) {
      var percent = (10800 - scrolled) / 1600;
      $(".digital-play .inner-image").css("top", -(percent * remainingImageHeight) + 100 + "px");
    }
  }

  $(window).on("scroll", function(event){
    parallaxImage1();
    parallaxImage2();
    parallaxImage3();
  });
 
});