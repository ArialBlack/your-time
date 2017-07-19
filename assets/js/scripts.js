(function(window, document, $) {
  'use strict';

  $(window).load(function() {
    // Toggle menu
    $.app.menu.toggle();

    setTimeout(function(){
      $(window).trigger( "resize" );
    },100);
  });

  $('#stepbanner-1-2-3').fsBanner({'trigger':'mouse'});

})(window, document, jQuery);
