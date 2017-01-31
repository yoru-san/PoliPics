//polipics
(function($) {

    var self = $.polipics = new function(){};

    $.extend(self, {

        polipicsImgs : {
          fn: [
            /* marine le pen*/
            "http://media.rtl.fr/online/image/2014/0929/7774557188_marine-le-pen-le-25-juin-a-nanterre-archives.jpg",
            "http://media.rtl.fr/online/image/2014/0929/7774557188_marine-le-pen-le-25-juin-a-nanterre-archives.jpg",
            "http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/marine-le-pen-accuse-le-gouvernement-de-sombrer-dans-lapathie-2627585/25008965-1-fre-FR/Marine-Le-Pen-accuse-le-gouvernement-de-sombrer-dans-l-apathie.jpg",
            "http://cdn-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/marine-le-pen-reconduite-a-la-tete-du-fn-934028/18740530-1-fre-FR/Marine-Le-Pen-reconduite-a-la-tete-du-FN.gif",
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
            "http://www.dakaractu.com/photo/art/grande/8164135-12742580.jpg?v=1440103403",
            "http://img1.closermag.fr/var/closermag/storage/images/media/images-des-contenus/actu-people/politique/201512146/jean-marie-le-pen-ex-president-du-front-national-fn-le-16-octobre-2015/5005198-1-fre-FR/Jean-Marie-Le-Pen-ex-president-du-Front-National-FN-le-16-octobre-2015_exact1024x768_l.jpg"
          ],
          ps: [
            /*Hollande*/
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
            /*Valls*/
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
            /*Cazeneuve*/
            "http://s1.lprs1.fr/images/2016/09/15/6122739_azeneuve_1000x625.jpg",
            "http://www.challenges.fr/assets/img/2013/03/27/cover-r4x3w1000-57988092d2b90-portrait-cazeneuve.jpg",
            "http://media.rtl.fr/cache/abQWJbAfa8R7DujfSKZslA/795v530-0/online/image/2015/0220/7776680497_bernard-cazeneuve-lors-d-un-discours.jpg",
            "http://md1.libe.com/photo/973638-le-premier-ministre-bernard-cazeneuve-le-9-decembre-2016-a-bordeaux.jpg?modified_at=1481313041&width=960",
            "http://www.lopinion.fr/sites/nb.com/files/styles/w_1000/public/styles/paysage/public/cms/edito/201411/cazeneuve_pays_sipa.jpg?itok=qh_r9Zdb",
            "http://s-www.republicain-lorrain.fr/images/9D5B334C-0870-4FD6-969E-CAE7F157DF53/LRL_v0_03/bernard-cazeneuve-ne-gere-pas-lui-meme-sonc-ompte-twitter-a-fait-savoir-son-equipe-photo-afp-1463408416.jpg",
            "http://md1.libe.com/photo/520421-le-ministre-delegue-au-budget-bernard-cazeneuve-le-22-mai-2013-a-caen.jpg?modified_at=1369992045&width=750"
          ],
          lr: [
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
          fi: [
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
            "http://www.larousse.fr/encyclopedie/data/images/1315441-Staline.jpg"
          ]
        },

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
						$(item).on('load', function(){
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
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
      chrome.storage.local.get('polipicsParti', function (result) {
        polipicsParti = result.polipicsParti;
        self.handleImages(self.polipicsImgs[polipicsParti], 3000);
      });
    });
})(jQuery);
