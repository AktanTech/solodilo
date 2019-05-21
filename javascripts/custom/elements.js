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