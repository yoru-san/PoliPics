(function() {
  //FN
  var main = function($) {

    var self = $.polopics = new function(){};

    $.extend(self, {
      polopicsImgs : [
        //Nicolas Sarkozy
        "http://www.dreuz.info/wp-content/uploads/2016/09/sarkozy.jpg",
        "http://referentiel.nouvelobs.com/file/rw765h740/15512501-sarkozy-intouchable-pourquoi-nous-sommes-tous-coupables.jpg",
        "http://img.humanite.fr/sites/default/files/images/nicolas-sarkozy_0.jpg",
        "http://laregledujeu.org/files/2015/03/Nicolas-Sarkozy.jpg",
        "http://static.lexpress.fr/medias_11149/w_1815,h_1362,c_crop,x_232,y_0/w_640,h_358,c_fill,g_center/v1478631542/nicolas-sarkozy-le-27-septembre-2016-a-paris_5708313.jpg",
        "http://scd.rfi.fr/sites/filesrfi/dynimagecache/0/64/3500/1977/1024/578/sites/images.rfi.fr/files/aef_image/2016-09-05t095922z_127219811_lr1ec950rqo1t_rtrmadp_3_france-politics-sarkozy-trial_0.jpg",
        "http://s1.lprs1.fr/images/2016/08/23/6062907_sarkozy-afp-bonaventure.jpg",
        "http://www.observatoiredesgaspillages.com/wp-content/uploads/2014/11/Combien-gagne-Sarkozy.jpg",
        "http://www.marianne.net/sites/default/files/7430-100239515.jpg",
        "http://s1.lemde.fr/image/2016/07/18/644x322/4971260_3_1ad5_nicolas-sarkozy-president-des-republicains-l_3cb7639264b21bc091356d4d16144941.jpg",
        "http://www.marianne.net/sites/default/files/9332-100242324.jpg",
        "http://www.closermag.fr/var/closermag/storage/images/media/images-des-contenus/actu-people/politique/20160531-en-tant/nicolas-sarkozy-lors-d-une-reunion-du-comite-departemental-de-la-federation-des-bouches-du-rhone-au3/5241522-1-fre-FR/Nicolas-Sarkozy-lors-d-une-reunion-du-comite-departemental-de-la-federation-des-Bouches-du-Rhone-au_exact1024x768_l.jpg",
        "http://i-cms.linternaute.com/image_cms/original/10416524-nicolas-sarkozy-et-les-ploucs-l-ancien-president-s-est-il-lache-en-off.jpg",
        "http://www.amisdenicolassarkozy.fr/nicolas-sarkozy-2022.jpg",
        "http://s1.lprs1.fr/images/2016/09/05/6095155_sarkozy_1000x625.jpg",
        "http://img.agoravox.fr/local/cache-vignettes/L300xH257/Sar-d3c99.jpg",
        "http://www.marianne.net/sites/default/files/7727-100239929.jpg",
        "http://www.actubis.com/wp-content/uploads/2016/09/sarko.jpg",
        "http://www.goldenmoustache.com/wp-content/uploads/2016/08/3391-nicolas-sarkozy_5623917.jpg",
        "http://referentiel.nouvelobs.com/file/15463288-sarkozy-cahuzac-et-le-theoreme-de-pasqua.jpg",
        "https://static.mediapart.fr/files/2016/01/20/sarkorevientreuters.jpg",
        "http://cdn3-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/nicolas-sarkozy-reprend-la-main-2779717/27711865-1-fre-FR/Nicolas-Sarkozy-reprend-la-main.jpg",
        "http://1.bp.blogspot.com/-UKP3geSNqyU/T79IARU5-JI/AAAAAAAAC2U/Urm7kZuEOAw/s1600/regardduweb-drole-insolite-celebrite-sarkozy15.jpg",
        "https://media.giphy.com/media/l0MYDOPOwIeIR66jK/source.gif",
        "https://media1.giphy.com/media/3o7TKDbNOfAntlCVZm/200.gif#18",
        "https://media1.giphy.com/media/3o7TKwKC8W7gUmFnxe/200.gif#20",
        "https://media2.giphy.com/media/l0MYIYA1DYi4Lxwvm/200.gif#48",
        "https://media.giphy.com/media/2QIYRKSgfY1ig/giphy.gif",
        //Francois Fillon
        "http://cdn-lejdd.ladmedia.fr/var/lejdd/storage/images/media/images/politique/francois-fillon-a-demande-a-ses-soutiens-de-se-preparer/12696484-1-fre-FR/Francois-Fillon-a-demande-a-ses-soutiens-de-se-preparer.jpg",
        "http://beninmondeinfos.com/images/FillonFranois.jpg",
        "https://comptoirdotorg.files.wordpress.com/2016/11/fillon.jpg",
        "https://s.yimg.com/uu/api/res/1.2/7AjRax4pc_jereYsTSK7Jw--/aD01MTI7dz03Njg7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/fr_FR/News/AFP/5ae3bbd1cded97580af7b4ba06c59298a739e1d5.jpg",
        "http://img.20mn.fr/oGUGN24oRxenP8jLRuuB1w/2048x1536-fit_francois-fillon-vainqueur-de-la-primaire-de-a-droite-face-a-alain-juppe-le-27-novembre-2016.jpg",
        "http://www.pourquoidocteur.fr/media/article/thunbs/uploded_fillon-1480242117.jpg",
        "http://www.usinenouvelle.com/mediatheque/8/5/8/000139858_illustration_large.jpg",
        "http://static1.terrafemina.com/articles/8/32/39/08/@/457491-fillon-le-candidat-qui-fait-peur-aux-fe-622x0-1.jpg",
        "http://img.20mn.fr/--Yqq2CmQcCdxnnMvD42TA/2048x1536-fit_francois-fillon-ancien-premier-ministre-le-15-avril-2015.jpg",
        "http://static1.ozap.com/articles/2/46/19/92/@/4473073-francois-fillon-participant-de-opengraph_1200-1.jpg",
        "http://img.gal.pmdstatic.net/fit/http.3A.2F.2Fwww.2Egala.2Efr.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultimedia.2Fbrightcove.2Fgala_video_-_quand_francois_fillon_participait_a_top_gear_france.2F3851478-1-fre-FR.2Fgala_video_-_quand_francois_fillon_participait_a_top_gear_france.2Ejpg/1140x499/quality/80/gala-video-quand-francois-fillon-participait-a-top-gear-france.jpg",
        "http://preprod-img.planet.fr/files/images/article/7/2/4/55427/1336960-inline.jpg",
        "https://media2.giphy.com/media/l2JhOfXZbYKMKzB4I/200.gif#1",
        "https://media2.giphy.com/media/3oz8xTRLcmcajnjHi0/200.gif#4",
        "https://media4.giphy.com/media/3oz8xuCHjvbRflLKU0/200.gif#18",
        "https://media3.giphy.com/media/3o6ZtgDJrGxHaCkeJy/200.gif#25",
        "https://media2.giphy.com/media/3oz8xR5cB2cmVTT8jK/200.gif#31"
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
