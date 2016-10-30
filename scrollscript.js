$(function() {
  //debouncing function so that functions don't fire too much and brick the page
  /*function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
*/
  //for making the navbar do the cool scroll-then-stick thing
    $(window).scroll(function(){
      console.log($(window).scrollTop());
      if ($(window).scrollTop()>40) {
          $(".gsr-navbar").addClass("gsr-fixed-nav");
      }
      if ($(window).scrollTop()<41) {
          $(".gsr-navbar").removeClass("gsr-fixed-nav");
      }
    });

    $(".offcanvas-nav-toggle").click(function() {
      $(".offcanvas-nav").toggleClass("in");
    });
});