(function() {
  //nCage
  var main = function($) {

    var self = $.nCage = new function(){};

    $.extend(self, {
      nCageImgs : [
        /*"http://www.businesspundit.com/wp-content/uploads/2015/11/Donald-Trump-and-Waterboarding-ISIS.jpg",
        "http://sites.middlebury.edu/trump/files/2015/10/6358235333419573281092854367_donald-trump.jpg",
        "http://sites.psu.edu/juanitauribercl/wp-content/uploads/sites/38826/2016/01/donald-trumps-hair_zpswqc4ev8g.jpg",
        "http://sites.middlebury.edu/trump/files/2015/10/6358235333419573281092854367_donald-trump.jpg",
        "http://www.thewrap.com/wp-content/uploads/2016/08/GettyImages-501018436-300x200.jpg",
        "https://v.cdn.vine.co/r/avatars/39B82B578D1327063860116865024_55340f8d882.3.0.jpg?versionId=SYkfvDlws1HspvvwwuS8GI7PbhZPEMam",
        "https://vice-images.vice.com/images/content-images/2015/08/06/how-donald-trump-explains-america-806-body-image-1438885099.jpg?resize=900:*&output-quality=75",
        "http://www.policestateusa.com/wp-content/uploads/2015/06/Donald-Trump-2.jpg",
        "http://nationalreport.net/wp-content/uploads/2015/12/Trump_Debate.jpg",
        "http://vh1.mtvnimages.com/uri/mgid:file:http:shared:vh1.com/news/wp-content/uploads/2016/02/trumpmean-1455926297.jpg?quality=0.85&format=jpg&width=480",
        "http://e-spaces.eu/wp-content/uploads/2016/03/donald-trump1.jpg",
        "https://southfront.org/wp-content/uploads/2015/10/Make-America-Great-Again.jpg",
        "https://i.ytimg.com/vi/76C72mPGLuk/hqdefault.jpg",
        "http://img.20mn.fr/x3Qn9KmuQ2iMiZKsl4J-iw/2048x1536-fit_donald-trump-tient-pancarte-femmes-trump-apres-rencontre-valdosta-etats-unis-29-fevrier-2016.jpg",
        "http://cdn1-public.ladmedia.fr/var/public/storage/images/news/donald-trump-est-un-chien-un-porc-misogyne-sa-femme-melania-le-defend-1152055/16932931-1-fre-FR/Donald-Trump-est-un-chien-un-porc-misogyne-sa-femme-Melania-le-defend_portrait_w674.jpg",
        "http://www.ndf.fr/wp-content/uploads/2016/06/donald-trump.jpg",
        "https://i.imgflip.com/1126t1.jpg",
        "http://static4.businessinsider.com/image/57757e444321f172088b5510-1190-625/donald-trump-jokes-at-outdoor-rally-that-could-be-a-mexican-plane-theyre-getting-ready-to-attack.jpg",
        "http://pixel.nymag.com/imgs/daily/intelligencer/2016/12/09/magazine/09-chait.w710.h473.jpg",*/
        "https://media.giphy.com/media/3o6ZsVbs2GzgKNvVpS/giphy.gif",

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
