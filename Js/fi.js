(function() {
  //FN
  var main = function($) {

    var self = $.polopics = new function(){};

    $.extend(self, {
      polopicsImgs : [
        /*Mélenchon*/
        "http://www.francetvinfo.fr/image/759ujl2rb-7891/1500/843/11056201.jpg",
        "http://www.lepoint.fr/images/2016/12/20/6492437lpw-6496497-article-francevotepg-jpg_3974542_660x281.jpg",
        "http://static.lexpress.fr/medias/1188/608363_social-retraites-partis-gauche.jpg",
        "http://media.rtl.fr/online/image/2013/1201/7767489565_jean-luc-melenchon-le-29-novembre-2013-a-paris.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jean-Luc_M%C3%A9lenchon_-_avril_2012.jpg/220px-Jean-Luc_M%C3%A9lenchon_-_avril_2012.jpg",
        "http://www.prechi-precha.fr/wp-content/uploads/2016/09/3170150_3_2bad_jean-luc-melenchon-lors-d-un-meeting-de_9e7e15d3e5f98f2938218290579cfb96.jpg",
        "http://www.mouv.fr/sites/default/files/2012/10/12/37976/MELENCHON.jpg",
        "http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/le-lab/jean-luc-melenchon-sen-prend-aux-journalistes-deuxieme-peau-du-systeme-que-combat-le-mouvement-nuit-debout-2713618/26518357-1-fre-FR/Jean-Luc-Melenchon-s-en-prend-aux-journalistes-deuxieme-peau-du-systeme-que-combat-le-mouvement-Nuit-Debout.jpg",
        "http://cdn-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/pour-lentourage-de-melenchon-labsence-de-soutien-du-pcf-ne-change-rien-2892110/29681084-1-fre-FR/Pour-l-entourage-de-Melenchon-l-absence-de-soutien-du-PCF-ne-change-rien.jpg",
        "http://www.challenges.fr/assets/img/2016/02/11/cover-r4x3w1000-578e59b921143-melenchon.jpg",
        "http://www.atlantico.fr/sites/atlantico.fr/files/styles/une/public/images/2014/04/rtxz6ar.jpg",
        "http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/le-lab/les-bonnes-resolutions-philosophico-politiques-de-jean-luc-melenchon-pour-2016-2643567/25306953-1-fre-FR/Les-bonnes-resolutions-philosophico-politiques-de-Jean-Luc-Melenchon-pour-2016.jpg",
        /*Staline*/
        "https://www.world-lolo.com/images/uploads/image.num1470699041.of.world-lolo.com.jpg",
        "http://1.bp.blogspot.com/-bG4xB-9a4nw/U8rPXkttfyI/AAAAAAAAACg/Tf5N3S5EKBY/s1600/Staline.jpg",
        "http://www.communisme-bolchevisme.net/images/Staline_portrait.jpg",
        "http://www.larousse.fr/encyclopedie/data/images/1315441-Staline.jpg",
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
      self.handleImages(self.polopicsImgs, 3000);
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
