/* ========================================================== 
	Image Pre-Loader
============================================================ */

/* Add Class or Id of image group which you want with preloader... Example

	.className img,.className2 img,.className3 img
	#idName img, #idName2 img, IdName3 img
*/

$(function () {
			$('.pf-one-full img,.pf-one-half img,.pf-one-third img,.pf-one-fourth img,.blog-post img,.popout-portfolio img,.single-page-portfolio img,.slides-portfolio img,.zoomer-portfolio img,#zoomout-portfolio img,#sortable-portfolio img,.frame-left img,.frame-right img,.footer-one-fourth-gallery img,.footer-one-third-gallery img').hide();//hide all the images on the page
		});
		
		var i = 0;//initialize
		var int=0;//Internet Explorer Fix
		$(window).bind("load", function() {//The load event will only fire if the entire page or document is fully loaded
			var int = setInterval("doThis(i)",300);//500 is the fade in speed in milliseconds
		});

		function doThis() {
			var imgs = $('img').length;//count the number of images on the page
			if (i >= imgs) {// Loop the images
				clearInterval(int);//When it reaches the last image the loop ends
			}
			$('img:hidden').eq(0).fadeIn(500);//fades in the hidden images one by one
			i++;//add 1 to the count
		} 