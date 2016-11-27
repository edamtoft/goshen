jQuery(function($) {
  $("[data-video]").click(function() {
      var $this = $(this);
      var videoId = $this.data("video");
      var target = $this.data("target");
      $(target).attr("src","https://www.youtube.com/embed/"+videoId);
  });
});