(function() {
  //FN
  var main = function($) {

    var self = $.nCage = new function(){};

    $.extend(self, {
      nCageImgs : [
        "http://media.rtl.fr/online/image/2014/0929/7774557188_marine-le-pen-le-25-juin-a-nanterre-archives.jpg",
        "http://media.rtl.fr/online/image/2014/0929/7774557188_marine-le-pen-le-25-juin-a-nanterre-archives.jpg",
        "http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/marine-le-pen-accuse-le-gouvernement-de-sombrer-dans-lapathie-2627585/25008965-1-fre-FR/Marine-Le-Pen-accuse-le-gouvernement-de-sombrer-dans-l-apathie.jpg",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",

         ],


    handleImages : function (lstImgs, time)
      {
        $.each($('img'), function(i,item) {
          //Skip if image is already replaced
          if($.inArray($(item).attr('src'), lstImgs) == -1)
          {
            var h = $(item).height();
            var w = $(item).width();

            //If image loaded
            if(h > 0 && w > 0)
            {
              //Replace
              $(item).css('width', w + 'px').css('height', h + 'px');
              $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
            }
            else
            {
              //Replace when loaded
              $(item).load(function(){
                //Prevent 'infinite' loop
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
                  var h = $(item).height();
                  var w = $(item).width();
                  $(item).css('width', w + 'px').css('height', h + 'px');
                  $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                }
              });
            }
          }
        });

        //Keep replacing
        if(time > 0)
        setTimeout(function(){self.handleImages(lstImgs, time);},time);
      }
    });

    //Run on jQuery ready
    $(function(){
      self.handleImages(self.nCageImgs, 3000);
    });
  };

  //Method to load jQuery
  function loadJS(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function() {
      var state = s.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        callback.done = true;
        callback();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(s);
  }

  //Add jQuery if not present, then run main
  if(typeof jQuery == 'undefined') {
    loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
      jQuery.noConflict();
      main(jQuery);
    });
  }else {
    main(jQuery);
  }
})();
