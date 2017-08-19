/* 	
	Index of this JS File

	(01) On Load Scripts
	(02) Tab Script
	(03) Simple and Accordation Toggles
	(04) Hide Information Boxes (Close Button)
	(05) Filterable Pack / Sortable Portfolio
	(06) Slides Portfolio
	(07) Zoomer Portfolio
	(08) Zoom-out Portfolio
	(09) Testimonial Rotator
	(10) Image Hover Fade Effect
	(11) Image Tooltip
	(12) Custom Popup
	(13) Contact Form
	(14) Form Field Over Labels
	(15) Scroll to Top Control
	(16) Hover Intent - Compressed File 	
*/

/* ========================================================== 
	(01) On Load Scripts
============================================================ */

$(document).ready(function(){ 
	$("a[rel^='prettyPhoto']").prettyPhoto(); 	 /* Pretty Photo */
	hide_boxes();					 /* Infoboxes close button */	
});

/* ========================================================== 
	(02) Tab Script
============================================================ */

$(document).ready(function() {

	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});

/* ========================================================== 
	(03) Simple and Accordation Toggles
============================================================ */

$(document).ready(function(){	
	// Simple Toggle script start
	$(".toggle_container").hide();
	$("p.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle(350);
	});
	
	$(".toggle_container2").hide();
	$("p.trigger2").click(function(){
		$(this).toggleClass("active2").next().slideToggle(350);
	});
	
	//--Toggle Accrordation Script
	
	//Set default open/close settings
	$('.acc_container').hide(); //Hide/close all containers
	//$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

	//On Click
	$('.acc_trigger').click(function(){
		if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
			$('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
			//$(this).toggleClass('active').previous().slideUp(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
			$(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container	
		}else{
			$(this).toggleClass('active').next().slideUp();
		}
		return false; //Prevent the browser jump to the link anchor
	});
	
	//Set default open/close settings
	$('.acc_container2').hide(); //Hide/close all containers
	//$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

	//On Click
	$('.acc_trigger2').click(function(){
		if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
			$('.acc_trigger2').removeClass('active2').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
			$(this).toggleClass('active2').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container	
		}else{
			$(this).toggleClass('active2').next().slideUp();
		}
		return false; //Prevent the browser jump to the link anchor
	});
	
});

/* ========================================================== 
	(04) Hide Information Boxes (Close Button)
============================================================ */

function hide_boxes(){
	$('span.hide-boxes').click(function() {
		$(this).parent().fadeOut();					   
	});	
}

/* ========================================================== 
	(05) Filterable Pack / Sortable Portfolio
============================================================ */

/* Copyright (C) 2009 Joel Sutherland. * Liscenced under the MIT liscense */
(function($){$.fn.filterable=function(settings){settings=$.extend({useHash:true,animationSpeed:1000,show:{width:'show',opacity:'show'},hide:{width:'hide',opacity:'hide'},useTags:true,tagSelector:'#sortable-portfolio-links a',selectedTagClass:'current',allTag:'all'},settings);
                    return $(this).each(function(){$(this).bind("filter",function(e,tagToShow){if(settings.useTags){$(settings.tagSelector).removeClass(settings.selectedTagClass);
                        $(settings.tagSelector+'[href='+tagToShow+']').addClass(settings.selectedTagClass)}$(this).trigger("filterportfolio",[tagToShow.substr(1)])});
                    $(this).bind("filterportfolio",function(e,classToShow){if(classToShow==settings.allTag){$(this).trigger("show")}else{$(this).trigger("show",['.'+classToShow]);
                    $(this).trigger("hide",[':not(.'+classToShow+')'])}if(settings.useHash){location.hash='#'+classToShow}});
                        $(this).bind("show",function(e,selectorToShow){$(this).children(selectorToShow).animate(settings.show,settings.animationSpeed)});
                        $(this).bind("hide",function(e,selectorToHide){$(this).children(selectorToHide).animate(settings.hide,settings.animationSpeed)});
                        if(settings.useHash){if(location.hash!='')$(this).trigger("filter",[location.hash]);
                        else $(this).trigger("filter",['#'+settings.allTag])}if(settings.useTags){$(settings.tagSelector).click(function(){$('#sortable-portfolio').trigger("filter",[$(this).attr('href')]);
                                $(settings.tagSelector).removeClass('current');
            $(this).addClass('current')})}})}})(jQuery);
            $(document).ready(function(){$('#sortable-portfolio').filterable()});

/* ========================================================== 
	(06) Slides Portfolio
============================================================ */

$(document).ready(function(){
         $('.top-left').hover(function(){
		         $(this).children('.front').stop().animate({'top' : '190px', 'left' : '300px'}, 500);
		 }, function(){$(this).children('.front').stop().animate({'top' : '0px', 'left' : '0px'}, 500);});
		  $('.top-center').hover(function(){
		         $(this).children('.front').stop().animate({'top' : '190px'}, 500);
		 }, function(){$(this).children('.front').stop().animate({'top' : '0px', 'left' : '0px'}, 500);});
		 $('.bottom-center').hover(function(){
		         $(this).children('.front').stop().animate({'top' : '-190px'}, 500);
		 }, function(){$(this).children('.front').stop().animate({'top' : '0px', 'left' : '0px'}, 500);});
		 $('.left').hover(function(){
		         $(this).children('.front').stop().animate({'left' : '300px'}, 500);
		 }, function(){$(this).children('.front').stop().animate({'top' : '0px', 'left' : '0px'}, 500);});
		 $('.right').hover(function(){
		         $(this).children('.front').stop().animate({'left' : '-300px'}, 500);
		 }, function(){$(this).children('.front').stop().animate({'top' : '0px', 'left' : '0px'}, 500);});
		 $('.top-right').hover(function(){
		         $(this).children('.front').stop().animate({'top' : '190px','left' : '-300px'}, 500);
		 }, function(){$(this).children('.front').stop().animate({'top' : '0px', 'left' : '0px'}, 500);});

});

/* ========================================================== 
	(07) Zoomer Portfolio
============================================================ */

/* Author URL : http://addyosmani.com/blog/zoomer-gallery-a-jquery-plugin-for-displaying-images-with-flash-like-zooming-effects/ */

$(document).ready(function(){
 	$('.zoomer-portfolio ul.thumb li').Zoomer({
	
	/* Edit Speed of Zoom-in and Zoom-out Image and Title */
	
	speedView:200,
	speedRemove:400,
	altAnim:true,
	speedTitle:400,
	debug:false});
});

(function ($) {$.fn.Zoomer = function (b) {var c = $.extend({
			speedView: 200, 
			speedRemove: 400, 
			altAnim: false, 
			speedTitle: 400, 
			debug: false}, b);
			
            var d = $.extend(c, b);
            
            function e(s) {if (typeof console != "undefined" && typeof console.debug != "undefined") {console.log(s);
                    } else {alert(s);
            }}
            
            if (d.speedView == undefined || d.speedRemove == undefined || d.altAnim == undefined || d.speedTitle == undefined) {e("speedView: " + d.speedView);
                e("speedRemove: " + d.speedRemove);
                e("altAnim: " + d.altAnim);
                e("speedTitle: " + d.speedTitle);
                return false;
                }if (d.debug == undefined) {e("speedView: " + d.speedView);
                e("speedRemove: " + d.speedRemove);
                e("altAnim: " + d.altAnim);
                e("speedTitle: " + d.speedTitle);
                return false;
            }if (typeof d.speedView != "undefined" || typeof d.speedRemove != "undefined" || typeof d.altAnim != "undefined" || typeof d.speedTitle != "undefined") {if (d.debug == true) {e("speedView: " + d.speedView);
                    e("speedRemove: " + d.speedRemove);
                    e("altAnim: " + d.altAnim);
                    e("speedTitle: " + d.speedTitle);
                    }$(this).hover(function () {$(this).css({'z-index': "10"});
                    $(this).find("img").addClass("hover").stop().animate({
					
				/* Edit Height and Width, X and Y position of Mouseover Image */
				 
				marginTop: "-123px", 
				marginLeft: "-123px", 
				top: "50%", left: "50%", 
				width: "170px", 
				height: "170px", 
				padding: "30px"}, 
				d.speedView); 
					
                    if (d.altAnim == true) {var a = $(this).find("img").attr("title");
                        if (a.length != 0) {$(this).prepend("<span class=\"title\">" + a + "</span>");
                           
		     	        /* Edit Left and Top Position of Caption Title */
					
				$(".title").animate({
				marginLeft: "-68px", 
				marginTop: "105px"}, 
				d.speedTitle).css({'z-index': "10", position: "absolute", float: "left"});
            }}}, function () {$(this).css({'z-index': "0"});
                    $(this).find("img").removeClass("hover").stop().animate({
					
				/* Edit Height and Width, X and Y position after Mouseover On Image */
					
				marginTop: "0", 
				marginLeft: "0", 
				top: "0", 
				left: "0", 
				width: "115px", 
				height: "115px", 
				padding: "9px"}, 
				d.speedRemove);
                    $(this).find(".title").remove();
                });
        }};
    }(jQuery));

/* ========================================================== 
	(08) Zoom-out Portfolio
============================================================ */

 $(function() {
	$('.zoomout img').hover(
		function(){
			var $this = $(this);
			$this.stop().animate({'opacity':'1.0','height':'200px','top':'0px','left':'0px'});
		},
		function(){
			var $this = $(this);
			$this.stop().animate({'opacity':'1','height':'400px','top':'-66.5px','left':'-150px'});
		}
	);
});  

/* ========================================================== 
	(09) Testimonial Rotator
============================================================ */

$(document).ready(function(){
	$('#testimonials-rotate .testimonial-slide');
	setInterval(function(){
		$('#testimonials-rotate .testimonial-slide').filter(':visible').fadeOut(1000,function(){
			if($(this).next('div.testimonial-slide').size()){
				$(this).next().fadeIn(1000);
			}
			else{
				$('#testimonials-rotate .testimonial-slide').eq(0).fadeIn(1000);
			}
		});
	},6000); // fadein fadeout slider delay time eg. 1000 it less and 10000 is more.	
});

/* ========================================================== 
	(10) Image Hover Fade Effect
============================================================ */

jQuery(window).load(function() { 	
	jQuery(".fade-img").show();
	jQuery(".fade-img img").fadeTo('normal', 1, function() {		
		$get_id = jQuery(this).parent().parent().attr("lang");
		if($get_id != ""){
			jQuery(this).parent().parent().addClass($get_id);			
			$(this).hover(function(){
				$(this).fadeTo('normal', 0.5);
				
			}, function() {
					$(this).fadeTo('normal', 1);
			});
		}
    });
});

/* ========================================================== 
	(11) Image Tooltip
============================================================ */
/* Sticky Tooltip script (v1.0) 
* Author: Dynamic Drive at http://www.dynamicdrive.com/ 
* Visit http://www.dynamicdrive.com/ for full source code */

var stickytooltip={
	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips
	fadeinspeed: 200, //duration of fade effect in milliseconds
	rightclickstick: false, //sticky tooltip when user right clicks over the triggering element (apart from pressing "s" key) ?
	stickybordercolors: ["black", "darkred"], //border color of tooltip depending on sticky state
	stickynotice1: ["Press \"s\"", "or right click", "to sticky box"], //customize tooltip status message
	stickynotice2: "Click outside this box to hide it", //customize tooltip status message

isdocked:false,positiontooltip:function($,$tooltip,e){var x=e.pageX+this.tooltipoffsets[0],y=e.pageY+this.tooltipoffsets[1]
var tipw=$tooltip.outerWidth(),tiph=$tooltip.outerHeight(),x=(x+tipw>$(document).scrollLeft()+$(window).width())?x-tipw-(stickytooltip.tooltipoffsets[0]*2):x
y=(y+tiph>$(document).scrollTop()+$(window).height())?$(document).scrollTop()+$(window).height()-tiph-10:y
$tooltip.css({left:x,top:y})},showbox:function($,$tooltip,e){$tooltip.fadeIn(this.fadeinspeed)
this.positiontooltip($,$tooltip,e)},hidebox:function($,$tooltip){if(!this.isdocked){$tooltip.stop(false,true).hide()
$tooltip.css({borderColor:'black'}).find('.stickystatus:eq(0)').css({background:this.stickybordercolors[0]}).html(this.stickynotice1)}},docktooltip:function($,$tooltip,e){this.isdocked=true
$tooltip.css({borderColor:'darkred'}).find('.stickystatus:eq(0)').css({background:this.stickybordercolors[1]}).html(this.stickynotice2)},init:function(targetselector,tipid){jQuery(document).ready(function($){var $targets=$(targetselector)
var $tooltip=$('#'+tipid).appendTo(document.body)
if($targets.length==0)
return
var $alltips=$tooltip.find('div.atip')
if(!stickytooltip.rightclickstick)
stickytooltip.stickynotice1[1]=''
stickytooltip.stickynotice1=stickytooltip.stickynotice1.join(' ')
stickytooltip.hidebox($,$tooltip)
$targets.bind('mouseenter',function(e){$alltips.hide().filter('#'+$(this).attr('rev')).show()
stickytooltip.showbox($,$tooltip,e)})
$targets.bind('mouseleave',function(e){stickytooltip.hidebox($,$tooltip)})
$targets.bind('mousemove',function(e){if(!stickytooltip.isdocked){stickytooltip.positiontooltip($,$tooltip,e)}})
$tooltip.bind("mouseenter",function(){stickytooltip.hidebox($,$tooltip)})
$tooltip.bind("click",function(e){e.stopPropagation()})
$(this).bind("click",function(e){if(e.button==0){stickytooltip.isdocked=false
stickytooltip.hidebox($,$tooltip)}})
$(this).bind("contextmenu",function(e){if(stickytooltip.rightclickstick&&$(e.target).parents().andSelf().filter(targetselector).length==1){stickytooltip.docktooltip($,$tooltip,e)
return false}})
$(this).bind('keypress',function(e){var keyunicode=e.charCode||e.keyCode
if(keyunicode==115){stickytooltip.docktooltip($,$tooltip,e)}})})}}
stickytooltip.init("*[rev]","mystickytooltip")

/* ========================================================== 
	(12) Custom Popup
============================================================ */

$(document).ready(function() {

//When you click on a link with class of poplight and the href starts with a # 
$('a.poplight[href^=#]').click(function() {
    var popID = $(this).attr('rel'); //Get Popup Name
    var popURL = $(this).attr('href'); //Get Popup href to define size

    //Pull Query & Variables from href URL
    var query= popURL.split('?');
    var dim= query[1].split('&');
    var popWidth = dim[0].split('=')[1]; //Gets the first query string value

    //Fade in the Popup and add close button
    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close" title="Close"><span class="btn_close">Close</span></a>');

    //Define margin for center alignment (vertical   horizontal) - we add 80px to the height/width to accomodate for the padding  and border width defined in the css
    var popMargTop = ($('#' + popID).height() + 80) / 2;
    var popMargLeft = ($('#' + popID).width() + 80) / 2;

    //Apply Margin to Popup
    $('#' + popID).css({
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });

    //Fade in Background
    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
    $('#fade').css({'filter' : 'alpha(opacity=30)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=30)'}) is used to fix the IE Bug on fading transparencies 

    return false;
});

//Close Popups and Fade Layer
$('a.close, #fade').live('click', function() { //When clicking on the close or fade layer...
    $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();  //fade them both out
    });
    return false;
});

});

/* ========================================================== 
	(13) Contact Form
============================================================ */

jQuery(document).ready(function(){	
	jQuery("input:text, input:password, textarea").forminput();
	jQuery("#contact_form").contact_form({
			response: "#msg",
			submit: "#submit",
			timer: 4500,
			easing: "",
			speedIn: 700,
			speedOut: 700
	});
});
// Input Field Script
(function($) {
	$.fn.forminput = function() {
		return this.each(function() {
			var $root = $(this);
			var inputValue = $root.val();
			
			function reset() {
				var value = $root.val();
				if(inputValue == value) {
					$root.val("");
				}
			}
			
			function blur() {
				var value = $root.val();
				if(value == "") {
					$root.val(inputValue);
				}
			}
			
			$root.focus(function() {
  				reset();
			});
			$root.blur(function() {
  				blur();
			});
		});
	}
})(jQuery);

// Form Script
(function($) {
	$.fn.contact_form = function(options) {
		var defaults = {
			response: "#msg",
			submit: "#submit",
			timer: 4500,
			easing: "",
			speedIn: 700,
			speedOut: 700
		};
		var options = $.extend({}, defaults, options);
		
		return this.each(function () {
			var $root = $(this);
			var $response = $(options.response);
			var $submit = $(options.submit);
			
			function showMsg($timer) {
				$response.css("opacity", 0);
				$response.show().stop().animate({
					opacity: 1
				}, options.speedIn, options.easing, function(){
					interval = setInterval(hideMsg, $timer);
				});
			}
			
			function hideMsg() {
				clearInterval(interval);
				$response.stop().animate({
					opacity:0
				}, options.speedIn, options.easing, function() {
					$response.hide();
					$submit.fadeIn(700);
				});
			}
			
			$root.submit(function(){
				$.ajax({
					type: "POST",
					url: "sendmail.php",
					data: $(this).serialize(),
					success: function(output) {
						$response.ajaxComplete(function() {
							if(output == 'ok') {
								$('#contactdiv').html("<div id='smessage'></div>");
								$('#smessage').html("<h3>Contact Form Submitted!</h3>").append("<p>We will be in touch soon.</p>").hide().fadeIn(1500, function() {
								  $('#smessage').append("");
								});
							} else {
								$(this).html(output);
								showMsg(options.timer);
							}
						});
					}
				});
				return false;
			});
		});
	}
})(jQuery);

/* ========================================================== 
	(14) Form Field Over Labels
============================================================ */

//compressed code
$(document).ready(function(){$("label.overlabel").overlabel();});(function($){$.fn.overlabel=function(options){var opts=$.extend({},$.fn.overlabel.defaults,options);var selection=this.filter('label[for]').map(function(){var label=$(this);var id=label.attr('for');var field=document.getElementById(id);if(!field)return;var o=$.meta?$.extend({},opts,label.data()):opts;label.addClass(o.label_class);var hide_label=function(){label.css(o.hide_css)};var show_label=function(){this.value||label.css(o.show_css)};$(field).parent().addClass(o.wrapper_class).end().focus(hide_label).blur(show_label).each(hide_label).each(show_label);return this;});return opts.filter?selection:selection.end();};$.fn.overlabel.defaults={label_class:'overlabel-apply',wrapper_class:'overlabel-wrapper',hide_css:{'text-indent':'-10000px'},show_css:{'text-indent':'0px','cursor':'text'},filter:false};})(jQuery);

/* ========================================================== 
	(15) Scroll to Top Control
============================================================ */

//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.

var scrolltotop={
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
	controlHTML: '<img src="images/backgrounds/up.png" class="gotopimg" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: {offsetx:5, offsety:5}, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	//compressed code
	state:{isvisible:false,shouldvisible:false},scrollup:function(){if(!this.cssfixedsupport)
	this.$control.css({opacity:0})
	var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto)
	if(typeof dest=="string"&&jQuery('#'+dest).length==1)
	dest=jQuery('#'+dest).offset().top
	else
	dest=0
	this.$body.animate({scrollTop:dest},this.setting.scrollduration);},keepfixed:function(){var $window=jQuery(window)
	var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx
	var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety
	this.$control.css({left:controlx+'px',top:controly+'px'})},togglecontrol:function(){var scrolltop=jQuery(window).scrollTop()
	if(!this.cssfixedsupport)
	this.keepfixed()
	this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false
	if(this.state.shouldvisible&&!this.state.isvisible){this.$control.stop().animate({opacity:1},this.setting.fadeduration[0])
	this.state.isvisible=true}
	else if(this.state.shouldvisible==false&&this.state.isvisible){this.$control.stop().animate({opacity:0},this.setting.fadeduration[1])
	this.state.isvisible=false}},init:function(){jQuery(document).ready(function($){var mainobj=scrolltotop
	var iebrws=document.all
	mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest
	mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body')
	mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>').css({position:mainobj.cssfixedsupport?'fixed':'absolute',bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:'pointer'}).attr({title:'Scroll Back to Top'}).click(function(){mainobj.scrollup();return false}).appendTo('body')
	if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!='')
	mainobj.$control.css({width:mainobj.$control.width()})
	mainobj.togglecontrol()
	$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup()
	return false})
	$(window).bind('scroll resize',function(e){mainobj.togglecontrol()})})}}	
	$(function() { scrolltotop.init() });
	
/* ========================================================== 
	(16) Hover Intent - Compressed File
============================================================ */

(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);