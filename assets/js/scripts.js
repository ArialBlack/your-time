(function(window, document, $) {
  'use strict';



  

  $(window).load(function() {
    // Toggle menu
    $.app.menu.toggle();

    setTimeout(function(){
      $(window).trigger( "resize" );
    },100);
  });



})(window, document, jQuery);

//vertical-layout vertical-menu 2-columns fixed-navbar collapsed  menu-collapsed pace-done
//vertical-layout vertical-menu 2-columns fixed-navbar collapsed  menu-collapsed pace-done