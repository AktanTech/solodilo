(function(){'use strict'
$(function($){var vH=$(window).height()
var vW=$(window).width()
$('.fullwidth').css('width',vW)
$('.fullheight').css('height',vH)
$('.halfwidth').css('width',vW/2)
$('.halfheight').css('height',vH/2)
$('.quarterheight').css('height',vH-vH/6)
$('html, body').css('width',vW)
if(vW<=800){$('#carruselImage').attr('src','./images/featured/ParaMovil.gif')
$('.slidePhrase').attr('data-transform_out','opacity:0;s:300;s:300;')
$('.slidePhrase').attr('data-start','250')
$('.slidePhrase').attr('data-end','2720')
$('.slideLetter').attr('data-start','3000')
$('.slideLetter').attr('data-end','5720')}
$.fn.setAllToMaxHeight=function(){return this.css({'height':''}).height(Math.max.apply(this,$.map(this,function(e){return $(e).height()})))}
$('.eq-height1').setAllToMaxHeight()
$('.eq-height2').setAllToMaxHeight()
$('.eq-height3').setAllToMaxHeight()
$('.eq-height4').setAllToMaxHeight()
$('body, html').addClass('preloader-running')
$('#mastwrap').css('visibility','hidden')
$(window).load(function(){$('#status').fadeOut()
$('#preloader').delay(1000).fadeOut(1000)
$('body, html').removeClass('preloader-running')
$('body, html').addClass('preloader-done')
$('#mastwrap').delay(1000).css('visibility','visible')})
$('.main-menu li a.sub-menu-trigger').on('mouseenter',function(){$(this).next('.sub-menu').stop().slideDown(1000)})
$('.main-menu li').on('mouseleave',function(){$('.sub-menu').stop().slideUp(1000)});(function($){$.fn.menuPanelTrigger=function(){if($('.mastnav').is(':hidden')){$('.mastnav').fadeIn()}else{$('.mastnav').fadeOut()}}})(jQuery)
$('.menu-notification a, .menu-close-notification a').on('click',function(e){e.preventDefault()
$().menuPanelTrigger()})
$('.scroll').on('click',function(event){event.preventDefault()
$('html,body').animate({scrollTop:$(this.hash).offset().top},500)
$().menuPanelTrigger()})
$(window).load(function(){if(!device.tablet()&&!device.mobile()){$('.animated').appear(function(){$(this).each(function(){$(this).css('visibility','visible')
$(this).addClass($(this).data('fx'))})},{accY:-100})}else{$('.animated').css('visibility','visible')}});(function($){$.fn.filterPanelTrigger=function(){if($('.works-filter-panel').is(':hidden')){$('.works-filter-panel').slideDown()}else{$('.works-filter-panel').slideUp()}}})(jQuery)
$('.filter-notification a').on('click',function(e){e.preventDefault()
$().filterPanelTrigger()})
$('.works-filter li a').on('click',function(){$('.works-filter li a').removeClass('filter-active')
$(this).addClass('filter-active')
return!1})
if($('.works-container').length){$('.filter-notification a').show()}else{$('.filter-notification a').hide()}
var $container1=$('.works-container')
$(window).load(function(){$container1.isotope({itemSelector:'.works-item',layoutMode:'masonry',transitionDuration:'0.8s'})
setTimeout(function(){$container1.isotope('layout')},100)
$('.works-filter li a').on('click',function(){$('.works-filter li a').removeClass('active')
$(this).addClass('active')
var selector=$(this).attr('data-filter')
$('.works-container').isotope({filter:selector})
setTimeout(function(){$container1.isotope('layout')},700)
return!1})})
$(window).on('resize',function(){$container1.isotope('layout')})
window.addEventListener('orientationchange',function(){$container1.isotope('layout')},!1)
$('.venobox, .image-lightbox-link').venobox({numeratio:!0,infinigall:!0})
$('.team-carousel').owlCarousel({loop:!1,rewind:!0,margin:0,dots:!0,nav:!1,navText:!1,navSpeed:3000,responsive:{0:{items:1},600:{items:2},1000:{items:3}}})
$('.promo-carousel').owlCarousel({loop:!0,margin:0,dots:!1,nav:!0,navText:!1,navSpeed:3000,responsive:{0:{items:1},600:{items:2},1000:{items:6}}})
$('.project-carousel').owlCarousel({loop:!0,margin:0,dots:!1,nav:!0,navText:!1,responsive:{0:{items:1},600:{items:3},1000:{items:4}}})
$('.slider-for').slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:'.slider-nav'})
$('.slider-nav').slick({slidesToShow:4,slidesToScroll:1,asNavFor:'.slider-for',dots:!1,centerMode:!1,focusOnSelect:!0,responsive:[{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}},{breakpoint:320,settings:{slidesToShow:1}}]})
function parallaxInit(){$.stellar({positionProperty:'transform'})}
if(!device.tablet()&&!device.mobile()){$(window).on('load',function(){parallaxInit()})}else{$('.parallax, .parallax-layer').addClass('no-parallax')}
var setREVStartSize=function(){try{var e=new Object()
var i=jQuery(window).width()
var t=9999
var r=0
var n=0
var l=0
var f=0
var s=0
var h=0
e.c=jQuery('#rev_slider_3_1')
e.responsiveLevels=[1240,1024,778,480]
e.gridwidth=[1900,1024,778,420]
e.gridheight=[900,768,960,720]
e.sliderLayout='fullwidth'
if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),e.sliderLayout==='fullscreen'){var u=(e.c.width(),jQuery(window).height())
if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(',')
jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split('%').length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}
f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight)
e.c.closest('.rev_slider_wrapper').css({height:f})}catch(d){console.log('Failure at Presize of Slider:'+d)}}
setREVStartSize()
$(document).ready(function(){$('#rev_slider_3_1').show().revolution({sliderType:'standard',sliderLayout:'fullwidth',jsFileLocation:'javascript/',dottedOverlay:'none',delay:5000,navigation:{keyboardNavigation:'on',keyboard_direction:'horizontal',mouseScrollNavigation:'off',onHoverStop:'off',touch:{touchenabled:'on',swipe_threshold:75,swipe_min_touches:1,swipe_direction:'horizontal',drag_block_vertical:!1},arrows:{style:'hades',enable:!0,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,tmp:'<div class="tp-arr-allwrapper">   <div class="tp-arr-imgholder"></div></div>',left:{h_align:'left',v_align:'center',h_offset:20,v_offset:0},right:{h_align:'right',v_align:'center',h_offset:20,v_offset:0}},bullets:{enable:!0,hide_onmobile:!1,style:'hades',hide_onleave:!1,direction:'horizontal',h_align:'center',v_align:'bottom',h_offset:0,v_offset:20,space:5,tmp:'<span class="tp-bullet-image"></span>'}},responsiveLevels:[1240,1024,778,480],gridwidth:[1900,1024,778,420],gridheight:[900,768,960,720],lazyType:'none',parallax:{type:'mouse+scroll',origo:'slidercenter',speed:400,levels:[5,10,15,20,25,30,35,40,45,50]},shadow:0,spinner:'spinner0',stopLoop:'off',stopAfterLoops:-1,stopAtSlide:-1,shuffle:'off',autoHeight:'off',hideThumbsOnMobile:'off',hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0,debugMode:!1,fallbacks:{simplifyAll:'off',nextSlideOnWindowFocus:'off',disableFocusListener:'off'}})
if(!device.tablet()&&!device.mobile()){$('.video-bg').okvideo({source:'64686559',autoplay:!0,loop:!0,highdef:!0,hd:!0,adproof:!0,volume:0})}else{$('.video-bg').addClass('poster-img')}
var map_shown=!1
google.maps.event.addDomListener(window,'load',map_init)
function map_init(){$('.contact').waypoint(function(direction){var myLatLng=new google.maps.LatLng(21.025121,-89.649213)
if(direction==='down'&&!map_shown){map_shown=!0
var mapOptions={zoom:20,center:myLatLng}
var mapElement=document.getElementById('map')
var map=new google.maps.Map(mapElement,mapOptions)
var marker=new google.maps.Marker({position:myLatLng,map:map,title:'Solo Dilo'})}else{}},{offset:100})}})
$('.icon-serv-a').hover(function(evt){var id_div=evt.currentTarget.children[0].id
var display_info=evt.currentTarget.children[1].id
$(`#${display_info}`).show()
if($(window).width()>600){$(`#${id_div}`).removeClass('col-md-offset-4')
$(`#${id_div}`).addClass('col-md-offset-1')}},function(evt){var id_div=evt.currentTarget.children[0].id
var display_info=evt.currentTarget.children[1].id
$(`#${display_info}`).hide()
if($(window).width()>600){$(`#${id_div}`).removeClass('col-md-offset-1')
$(`#${id_div}`).addClass('col-md-offset-4')}})
$('.icon-serv-b').hover(function(evt){var id_div=evt.currentTarget.children[0].id
var display_info=evt.currentTarget.children[1].id
$(`#${display_info}`).show()
$(`#${id_div}`).addClass('col-md-4 col-sm-4')},function(evt){var id_div=evt.currentTarget.children[0].id
var display_info=evt.currentTarget.children[1].id
$(`#${display_info}`).hide()
$(`#${id_div}`).removeClass('col-md-4 col-sm-4')})
var memoDiv=new Array()
var idDiv=new Array()
var itemDiv=''
var isDrag=!1
var cli=0;function hoverOut($dato,$lista){for(let i=0;i<idDiv.length;i++){var divNone=$dato[i]
console.log(divNone);divNone.firstChild.firstElementChild.innerHTML=''
$(`#${idDiv[i]}`).removeClass()
$(`#${idDiv[i]}`).addClass($lista[i])
$('.team-caps').html('')}
$('#team-info').html('')
$('#team-info').hide()
$('.team-caps').html('')
$('.team-caps').hide()}
if($(window).width()>600){$('.team-carousel-item').click(function(evt){if(memoDiv.length>0){var imgClass=itemDiv.classList[1]
var viewActive=$('.owl-item.active'||'.owl-item.cloned.active')
switch(imgClass){case 'team-01-carousel-item-01-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-02-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-03-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-04-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-05-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-06-hover':hoverOut(viewActive,memoDiv)
break}
memoDiv=new Array()
idDiv=new Array()
itemDiv=''}
else{isDrag=!1
var imgClass=evt.currentTarget.classList[1]
itemDiv=evt.currentTarget
var viewActive=$('.owl-item.active'||'.owl-item.cloned.active')
switch(imgClass){case 'team-01-carousel-item-01':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-01 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-01-hover text-center img-bg-hover disable-owl-swipe')
var divA="<h1>Sindy Tec</h1><h4>CEO Y DIRECTOR CREATIVO</h4><h3>'Al compromiso no le <br>importa como te sientas, <br>¡ve y hazlo!'<br><div><a href='https://www.instagram.com/sindy_teher/?hl=es-la' target='_blank'><i class='fab fa-instagram'></i></a><a href='https://www.facebook.com/Sindy-Teher-293837087909110/' target='_blank'><i style='font-size: 2.4rem;' class='fab fa-facebook-f'></i></a></div></h3>"
var divB='<h5>Me defino sin filtros, proactiva y terca. Agradecida totalmente de la vida, la oveja creativa de la familia y divertida.</h5>'
hoverIn(viewActive,memoDiv,divA,divB)
break
case 'team-01-carousel-item-02':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-02 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-02-hover text-center img-bg-hover disable-owl-swipe')
var divA='<h1>Alejandro Valera</h1><h4>SOCIO EJECUTIVO</h4><h3>"Encuentra una manera de resolverlo, osea ¡SOLUCIÓNALO!"<br><div><a href="https://www.instagram.com/alejandrovalera__/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/Alejandro-Valera-2237305619837723/" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
var divB='<h5>Soy una persona auténtica, que te dice la verdad, me encanta el trato con la gente e ir por retos nuevos para cumplir con mi mision</h5>'
hoverIn(viewActive,memoDiv,divA,divB)
break
case 'team-01-carousel-item-03':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-03 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-03-hover text-center img-bg-hover disable-owl-swipe')
var divA='<h1>Alex Zapata</h1><h4>JEFE DE PRODUCCION</h4><h3>"No estoy loco soy mentalmente divertido"<br><div><a href="https://www.instagram.com/aljozaso/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/aljozaso" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
var divB='<h5>Soy un hombre divertido, creativo, amiguero, empático, soñador. La vida me ha dado la fortuna rodearme de gente que me ama. Amante de los deportes y el cine.</h5>'
hoverIn(viewActive,memoDiv,divA,divB)
break
case 'team-01-carousel-item-04':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-04 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-04-hover text-center img-bg-hover disable-owl-swipe')
$(evt.currentTarget).css('background-size','contain !important')
var divA='<h1>Armando Carvajal & Victor Perera</h1><h4>DESARROLLO WEB</h4><h3>"Siempre innovando y hacia adelante"<br><div><a href="https://www.instagram.com/armando.carvajal.142/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/armando.carvajal.142" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
var divB='<h5>Una pareja profesional y única con extensos conocimientos de programación, gestión de proyectos de software y diseño web. Amantes de la tecnología y de los retos</h5><h3><br><div><a href="https://www.instagram.com/vic_rpr/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/victor.raul2" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
hoverIn(viewActive,memoDiv,divA,divB)
break
case 'team-01-carousel-item-05':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-05 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-05-hover text-center img-bg-hover disable-owl-swipe')
var divA='<h1>Mariel Alvizo</h1><h4>DISEÑADORA</h4><h3>"Diseñando la vida es más sabrosa"<br><div><a href="https://www.instagram.com/marie_alvizo/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/mariel.alvizoperera" target="_blank"><i style="font-size: 2.4rem;" class="fab fa-facebook-f"></i></a></div></h3>'
var divB='<h5>Desde pequeña prefería que me compraran plumones, colores o tijeras en vez de una muñeca. Cuando algo se rompe en mi casa siempre intento repararlo.Soy amante de los animales, tengo tres gatos, tres perros y un pececito llamado Sushi</h5>'
hoverIn(viewActive,memoDiv,divA,divB)
break}}},null)
$('.team-carousel').mousedown(function(){isDrag=!1})
$('.team-carousel').mousemove(function(){isDrag=!0})
$('.team-carousel').mouseup(function(){var wasDragging=isDrag
isDrag=!1
if(wasDragging&&memoDiv.length>0){var viewActive=$('.owl-item.active'||'.owl-item.cloned.active')
hoverOut(viewActive,memoDiv)
memoDiv=new Array()
idDiv=new Array()
itemDiv=''}})
$('.team-carousel').mouseleave(function(evt){if(memoDiv.length>0){var imgClass=itemDiv.classList[1]
var viewActive=$('.owl-item.active'||'.owl-item.cloned.active')
switch(imgClass){case 'team-01-carousel-item-01-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-02-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-03-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-04-hover':hoverOut(viewActive,memoDiv)
break
case 'team-01-carousel-item-05-hover':hoverOut(viewActive,memoDiv)
break}
memoDiv=new Array()
idDiv=new Array()
itemDiv=''}})
function hoverIn($dato,$lista,$divA,$divB){for(let i=0;i<$dato.length;i++){const classText=$dato[i].firstChild.className
if(!(classText.indexOf('img-bg-hover')>-1)){var divNone=$dato[i]
$lista.push(divNone.firstChild.className)
idDiv.push(divNone.firstChild.id)
$(divNone.firstChild).removeClass()
$(divNone.firstChild).addClass('team-carousel-item white-bg text-center img-bg disable-owl-swipe')
if($lista.length==2){divNone.firstChild.firstElementChild.innerHTML=$divA}
if($lista.length==3){divNone.firstChild.firstElementChild.innerHTML=$divB}
$('.team-caps').show(1000)}}}}else{$('.team-carousel-item').click(function(evt){cli++;if(cli==1){var divEvt=evt.currentTarget.classList[1]
switch(divEvt){case 'team-01-carousel-item-01':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-01 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-01-hover text-center img-bg-hover')
var divA="<h1>Sindy Tec</h1><h4>CEO Y DIRECTOR CREATIVO</h4><h3>'Al compromiso no le <br>importa como te sientas, <br>¡ve y hazlo!'<br><div><a href='https://www.instagram.com/sindy_teher/?hl=es-la' target='_blank'><i style='font-size: 2rem;' class='fab fa-instagram'></i></a><a href='https://www.facebook.com/Sindy-Teher-293837087909110/' target='_blank'><i style='font-size: 2rem;' class='fab fa-facebook-f'></i></a></div></h3> <br> <h5>Me defino sin filtros, proactiva y terca. Agradecida totalmente de la vida, la oveja creativa de la familia y divertida.</h5>"
$('#team-info').html(divA)
break
case 'team-01-carousel-item-02':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-02 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-02-hover text-center img-bg-hover')
var divA='<h1>Alejandro Valera</h1><h4>SOCIO EJECUTIVO</h4><h3>"Encuentra una manera de resolverlo, osea ¡SOLUCIÓNALO!"<br><div><a href="https://www.instagram.com/alejandrovalera__/?hl=es-la" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/Alejandro-Valera-2237305619837723/" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3><br> <h5>Soy una persona auténtica, que te dice la verdad, me encanta el trato con la gente e ir por retos nuevos para cumplir con mi mision</h5>'
$('#team-info').html(divA)
break
case 'team-01-carousel-item-03':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-03 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-03-hover text-center img-bg-hover')
var divA='<h1>Alex Zapata</h1><h4>JEFE DE PRODUCCION</h4><h3>"No estoy loco soy mentalmente divertido"<br><div><a href="https://www.instagram.com/aljozaso/?hl=es-la" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/aljozaso" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3> <br> <h5>Soy un hombre divertido, creativo, amiguero, empático, soñador. La vida me ha dado la fortuna rodearme de gente que me ama. Amante de los deportes y el cine.</h5>'
$('#team-info').html(divA)
break
case 'team-01-carousel-item-04':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-05 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-04-hover text-center img-bg-hover')
var divA='<h1>Armando Carvajal & Victor Perera</h1><h4>DESARROLLO WEB</h4><h3>"Siempre innovando y hacia adelante"<br><div><a href="https://www.instagram.com/armando.carvajal.142/?hl=es-la" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/armando.carvajal.142" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3> <br> <h5>Una pareja profesional y única con extensos conocimientos de programación, gestión de proyectos de software y diseño web. Amantes de la tecnología y de los retos</h5><h3><br><div><a href="https://www.instagram.com/vic_rpr/" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/victor.raul2" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3>'
$('#team-info').html(divA)
break
case 'team-01-carousel-item-05':idDiv.push(evt.currentTarget.id)
memoDiv.push('team-carousel-item team-01-carousel-item-06 text-center img-bg')
$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-05-hover text-center img-bg-hover')
var divA='<h1>Mariel Alvizo</h1><h4>DISEÑADORA</h4><h3>"Diseñando la vida es más sabrosa"<br><div><a href="https://www.instagram.com/marie_alvizo/" target="_blank"><i style="font-size: 2rem;" class="fab fa-instagram"></i></a><a href="https://www.facebook.com/mariel.alvizoperera" target="_blank"><i style="font-size: 2rem;" class="fab fa-facebook-f"></i></a></div></h3> <br> <h5>Desde pequeña prefería que me compraran plumones, colores o tijeras en vez de una muñeca. Cuando algo se rompe en mi casa siempre intento repararlo.Soy amante de los animales, tengo tres gatos, tres perros y un pececito llamado Sushi</h5>'
$('#team-info').html(divA)
break}
$('#team-info').show(1000)}
else{var divEvt=evt.currentTarget.classList[1]
switch(divEvt){case 'team-01-carousel-item-01-hover':$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-01 text-center img-bg')
break
case 'team-01-carousel-item-02-hover':$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-02 text-center img-bg')
break
case 'team-01-carousel-item-03-hover':$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-03 text-center img-bg')
break
case 'team-01-carousel-item-04-hover':$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-04 text-center img-bg')
break
case 'team-01-carousel-item-05-hover':$(evt.currentTarget).removeClass()
$(evt.currentTarget).addClass('team-carousel-item team-01-carousel-item-05 text-center img-bg')
break}
$('#team-info').html('')
$('#team-info').hide()
memoDiv=new Array()
cli=0}})
$(".team-carousel-item").bind("touchmove",function(e){isDrag=!0
var wasDragging=isDrag
isDrag=!1
if(wasDragging&&cli==1){var viewActive=$('.owl-item.active'||'.owl-item.cloned.active')
hoverOut(viewActive,memoDiv)
memoDiv=new Array()
idDiv=new Array()
itemDiv=''
cli=0;console.log("Exito")}})}})})()

(function(){'use strict'
$(function($){$('.dropdown').hover(function(){$('.dropdown-menu',this).stop(!0,!0).slideDown('fast')
$(this).toggleClass('open')},function(){$('.dropdown-menu',this).stop(!0,!0).slideUp('fast')
$(this).toggleClass('open')})
$('#myCarousel').carousel({interval:40000})
$('.carousel .item').each(function(){var next=$(this).next()
if(!next.length){next=$(this).siblings(':first')}
next.children(':first-child').clone().appendTo($(this))
if(next.next().length>0){next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest')}else{$(this).siblings(':first').children(':first-child').clone().appendTo($(this))}})
$('.skills').waypoint(function(direction){$('.progress-bar').each(function(){var progressValue=$(this).attr('data-skills-value')
$(this).animate({width:progressValue+'%'},2500)})},{offset:'35%'});(function($){$.fn.countTo=function(options){options=$.extend({},$.fn.countTo.defaults,options||{})
var loops=Math.ceil(options.speed/options.refreshInterval)
var increment=(options.to-options.from)/loops
return $(this).each(function(){var _this=this
var loopCount=0
var value=options.from
var interval=setInterval(updateTimer,options.refreshInterval)
function updateTimer(){value+=increment
loopCount++
$(_this).html(value.toFixed(options.decimals))
if(typeof(options.onUpdate)==='function'){options.onUpdate.call(_this,value)}
if(loopCount>=loops){clearInterval(interval)
value=options.to
if(typeof(options.onComplete)==='function'){options.onComplete.call(_this,value)}}}})}
$.fn.countTo.defaults={from:0,to:100,speed:1000,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}})(jQuery)
$('.elements-counter-wrap').waypoint(function(direction){if(direction==='down'){$(this).css('opacity',1)
$('.elements-counter').each(function(){var $endNum=parseInt($(this).find('.number').text())
$(this).find('.number').countTo({from:0,to:$endNum,speed:2500,refreshInterval:40})})}else{}},{offset:'35%'})})})()
