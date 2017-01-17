(function() {
  //FN
  var main = function($) {

    var self = $.polopics = new function(){};

    $.extend(self, {
      polopicsImgs : [
        /* marine le pen*/
        "http://media.rtl.fr/online/image/2014/0929/7774557188_marine-le-pen-le-25-juin-a-nanterre-archives.jpg",
        "http://media.rtl.fr/online/image/2014/0929/7774557188_marine-le-pen-le-25-juin-a-nanterre-archives.jpg",
        "http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/marine-le-pen-accuse-le-gouvernement-de-sombrer-dans-lapathie-2627585/25008965-1-fre-FR/Marine-Le-Pen-accuse-le-gouvernement-de-sombrer-dans-l-apathie.jpg",
        "http://cdn-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/marine-le-pen-reconduite-a-la-tete-du-fn-934028/18740530-1-fre-FR/Marine-Le-Pen-reconduite-a-la-tete-du-FN.gif""",
        "https://www.minutenews.fr/wp-content/uploads/2016/09/1473670947-22a3d7426d11b3c5319b056f2a39a67a.jpg",
        "http://france3-regions.blog.francetvinfo.fr/midi-pyrenees-politiques-france3/wp-content/blogs.dir/137/files/2015/09/marine_le_pen_MPI.jpg",
        "http://www.marianne.net/sites/default/files/1031490020-0215.jpg",
        "http://img.20mn.fr/6rXhd658QD2BH-8UQyNa1A/2048x1536-fit_marine-pen-7-janvier-2016-nanterre.jpg",
        "http://media.rtl.fr/online/image/2015/0206/7776501073_marine-le-pen-lors-d-une-conference-de-presse-au-siege-du-front-national-le-6-fevrier-2015-a-nanterre.jpg",
        "http://img.humanite.fr/sites/default/files/images/lepen_3.jpg",
        "http://img.bfmtv.com/c/1000/600/80f/fd864680ac12e23d05fedd42c0956.jpg",
        "http://www.marianne.net/sites/default/files/11964-100245910.jpg",
        "http://referentiel.nouvelobs.com/file/7370605-marine-le-pen-et-maintenant-objectif-elysee-2017.jpg",
        "http://static.lexpress.fr/medias_11146/w_2048,h_1146,c_crop,x_0,y_215/w_640,h_360,c_fill,g_north/v1474893550/3404-marine-le-pen_5707213.jpg",
        "http://i.f1g.fr/media/ext/orig/www.lefigaro.fr/medias/2012/04/21/508db0ac-8be2-11e1-b0a5-27a13017d311-493x328.jpg",
        "http://www.atlantico.fr/sites/atlantico.fr/files/styles/une/public/images/2014/09/rtx17532.jpg",
        "http://referentiel.nouvelobs.com/file/3588921-marine-le-pen-est-elle-d-extreme-droite.jpg",
        "http://humourger.com/les-pires-grimaces-des-hommes-et-femmes-politiques/Marine_Le_Pen_tire_la_langue.jpg",
        "http://cdn-europe1.new2.ladmedia.fr/var/europe1/storage/images/le-lab/front-national-vous-avez-dit-dediabolise-648/11253-1-fre-FR/Caricatures-au-FN-Marine-Le-Pen-regrette.jpeg",
        /*Jean marie le pen*/
        "http://img.humanite.fr/sites/default/files/images/jml.jpg",
        "http://media.rtl.fr/cache/0lyHTrU7OkCPpsqi5XzxaQ/795v530-0/online/image/2015/0408/7777310232_jean-marie-le-pen-lors-d-une-conference-de-presse-a-aubigny-le-17-janvier-2015.jpg",
        "http://www.francetvinfo.fr/image/74w0kuklx-278e/1200/450/2566735.jpg",
        "http://referentiel.nouvelobs.com/file/7400487-oui-jean-marie-le-pen-a-bien-tenu-des-propos-antisemites.jpg",
        "https://etasoeurvousdittout.files.wordpress.com/2012/04/penjpg005_600.jpg",
        "http://referentiel.nouvelobs.com/wsfile/6171312296632.jpg",
        "https://oeilsurlefront.liberation.fr/images/4/2/3/3/8/42338c159d33958a5cd429f78daa502fb00f0d94-le-penazerftqrfgqzerfqzesrf.jpeg",
        "http://cdn-lejdd.ladmedia.fr/var/lejdd/storage/images/media/images/politique/jean-marie-le-pen64/12710212-1-fre-FR/Jean-Marie-Le-Pen.jpg",
        "http://s2.lemde.fr/image/2015/10/14/534x0/4789431_3_e7bd_jean-marie-le-pen-lors-d-une-conference-de_4fe023d3be10bc890fdf9da27c8a6500.jpg",
        "http://cdn2-europe1.new2.ladmedia.fr/var/europe1/storage/images/le-lab/attentats-a-paris-jean-marie-le-pen-pense-que-les-freres-koauchi-et-amely-coulibaly-etaient-membres-d-une-organisation-secrete-20632/443584-1-fre-FR/Attentats-a-Paris-Jean-Marie-Le-Pen-pense-que-les-freres-Koauchi-et-Amely-Coulibaly-etaient-membres-d-une-organisation-secrete.jpg",
        "http://s2.lemde.fr/image/2016/10/05/534x0/5008309_6_0a96_jean-marie-le-pen-le-25-janvier-2015-a-paris_bc09f2ac49ef747a63d7e7493448b925.jpg",
        "http://www.marianne.net/sites/default/files/8214-100240718.jpg",
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
