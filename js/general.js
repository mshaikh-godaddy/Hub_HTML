/* Custom General jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;(function($, window, document, undefined) {
	//Genaral Global variables
	"use strict";
	var $win = $(window);
	var $doc = $(document);
	var $winW = function(){ return $(window).width(); };
	var $winH = function(){ return $(window).height(); };
	var $screensize = function(element){  
			$(element).width($winW()).height($winH());
		};
		
		var screencheck = function(mediasize){
			if (typeof window.matchMedia !== "undefined"){
				var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
				if( screensize.matches ) {
					return true;
				}else {
					return false;
				}
			} else { // for IE9 and lower browser
				if( $winW() <=  mediasize ) {
					return true;
				}else {
					return false;
				}
			}
		};

	$doc.ready(function() {
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	
		var swiper = new Swiper(".tld-slider", {
			loop:true,
			freeMode: true,
			slidesPerView: 8.6,
			spaceBetween: 0,
			centeredSlides: false,
			direction: "vertical",
			mousewheel: true,
			keyboard: true,
			watchSlidesProgress: true,
			thumbs: {
				swiper: swiper2,
			},
			navigation: {
				nextEl: ".tld-button-next",
				prevEl: ".tld-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 5,
					spaceBetween: 6,
				},
				768: {
					slidesPerView: 9,
					spaceBetween: 8,
				},
				992: {
					slidesPerView: 13.1,
					spaceBetween: 8,
				},
				1300: {
					slidesPerView: 14,
					spaceBetween: 8,
				},
			}
		});
		var swiper2 = new Swiper(".home-slider", {
			loop: true,
			spaceBetween: 0,
			effect: "fade",
			grabCursor: false,
			navigation: {
				nextEl: ".tld-button-next",
				prevEl: ".tld-button-prev",
			},
			thumbs: {
			  swiper: swiper,
			},
		});


		/*TLD category slider
		---------------------------------------------------------------------*/
		if($('.tld-category-slider').length){
			var swiper = new Swiper('.tld-category-slider', {
				slidesPerView: 3,
				grid: {
					rows: 3,
				},
				spaceBetween: 24,
				pagination: {
				el: ".swiper-pagination",
				clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				breakpoints: {
					0: {
						slidesPerView: 1.33,
					},
					767: {
						slidesPerView: 2.1,
					},
					991: {
						slidesPerView: 2.5,
					},
					1024: {
						slidesPerView:3,
					},
				}
			});
		}
		
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	});	

/*All function nned to define here for use strict mode
----------------------------------------------------------------------------------------------------------------------------------------*/


	
/*--------------------------------------------------------------------------------------------------------------------------------------*/
})(jQuery, window, document);