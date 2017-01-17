(function() {
  //FN
  var main = function($) {

    var self = $.nCage = new function(){};

    $.extend(self, {
      nCageImgs : [
        "http://institutdeslibertes.org/wp-content/uploads/2015/09/french-president-francois-hollande-might-give-up.jpg",
        "http://www.telegraph.co.uk/content/dam/news/2016/07/13/hollande_2661326b-xlarge_trans%2B%2BpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg",
        "https://cdnfr1.img.sputniknews.com/images/102662/32/1026623274.jpg",
        "http://img.20mn.fr/8YzqO3nMRgOLSjx-VDIuRA/2048x1536-fit_francois-hollande-elysee.jpg",
        "http://www.observatoiredesgaspillages.com/wp-content/uploads/2014/10/Quand-Hollande-se-vantait-d%E2%80%99-%C3%AAtre-pay%C3%A9-%C3%A0-ne-rien-faire.jpg",
        "http://www.gilbertcollard.fr/wp-content/uploads/2015/12/CgfNZvul7eJeCjMpGfJP3mbV_Mo.jpg",
        "http://www.lepoint.fr/images/2015/12/31/2686522lpw-2689533-article-hollande-jpg_3300284_660x281.jpg",
        "http://blog.gaborit-d.com/wp-content/uploads/2013/09/parodies-hollande-rentree-afp-2.jpg",
        "http://www.atlantico.fr/sites/atlantico.fr/files/styles/une/public/images/2015/04/politico-scanner-solo.jpg",
        "http://i-cms.linternaute.com/image_cms/original/10258146-francois-hollande-volte-face-ideologique-sur-la-jungle-de-calais.jpg",
        "http://www.polemia.com/wp-content/uploads/2015/05/1-Valls-paroles.jpg",
        "http://img.over-blog-kiwi.com/1/42/10/09/20150318/ob_fcbbcc_valls-bilan.png",
        "http://img.humanite.fr/sites/default/files/images/valls3005_0.jpg",
        "http://i.f1g.fr/media/figaro/805x453_crop/2016/05/23/XVM4fd2be34-20fb-11e6-85bf-82d1da223fc8.jpg",
        "https://leblogdenathaliemp.files.wordpress.com/2016/12/manuel-valls-pm-acc80-lan1.jpg",
        "http://www.atlantico.fr/sites/atlantico.fr/files/styles/une/public/images/2016/01/valls.jpg",
        "http://cdn2-europe1.new2.ladmedia.fr/var/europe1/storage/images/le-lab/manuel-valls-je-ne-veux-ni-de-la-peine-de-mort-ni-de-guantanamo-ni-de-la-vente-des-armes-2772245/27579134-1-fre-FR/Manuel-Valls-Je-ne-veux-ni-de-la-peine-de-mort-ni-de-Guantanamo-ni-de-la-vente-des-armes.jpg",
        "http://www.delitdimages.org/wp-content/uploads/2014/05/valls.jpg",
        "http://o.aolcdn.com/dims-shared/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4697664%2Fimages%2Fn-MANUEL-VALLS-628x314.jpg",
        "http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/le-lab/manuel-valls-et-des-ministres-ne-se-cachent-meme-plus-pour-critiquer-emmanuel-macron-2797603/28027258-1-fre-FR/Manuel-Valls-et-des-ministres-ne-se-cachent-meme-plus-pour-critiquer-Emmanuel-Macron.jpg",
        "http://s1.lprs1.fr/images/2016/09/15/6122739_azeneuve_1000x625.jpg",
        "http://www.challenges.fr/assets/img/2013/03/27/cover-r4x3w1000-57988092d2b90-portrait-cazeneuve.jpg",
        "http://media.rtl.fr/cache/abQWJbAfa8R7DujfSKZslA/795v530-0/online/image/2015/0220/7776680497_bernard-cazeneuve-lors-d-un-discours.jpg",
        "http://md1.libe.com/photo/973638-le-premier-ministre-bernard-cazeneuve-le-9-decembre-2016-a-bordeaux.jpg?modified_at=1481313041&width=960",
        "http://www.lopinion.fr/sites/nb.com/files/styles/w_1000/public/styles/paysage/public/cms/edito/201411/cazeneuve_pays_sipa.jpg?itok=qh_r9Zdb",
        "http://s-www.republicain-lorrain.fr/images/9D5B334C-0870-4FD6-969E-CAE7F157DF53/LRL_v0_03/bernard-cazeneuve-ne-gere-pas-lui-meme-sonc-ompte-twitter-a-fait-savoir-son-equipe-photo-afp-1463408416.jpg",
        "http://md1.libe.com/photo/520421-le-ministre-delegue-au-budget-bernard-cazeneuve-le-22-mai-2013-a-caen.jpg?modified_at=1369992045&width=750"

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
