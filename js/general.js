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
	
		/*var swiper = new Swiper(".tld-slider", {
			loop:true,
			spaceBetween: 6,
			slidesPerView: 1,
			direction: "vertical",
			//centeredSlides: true,
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			slideToClickedSlide: true,
			thumbs: {
				swiper: swiper2,
			},
			navigation: {
				nextEl: ".tld-button-next",
				prevEl: ".tld-button-prev",
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 5,
			// 		spaceBetween: 6,
			// 	},
			// 	768: {
			// 		slidesPerView: 9,
			// 		spaceBetween: 8,
			// 	},
			// 	992: {
			// 		slidesPerView: 13.1,
			// 		spaceBetween: 8,
			// 	},
			// 	1300: {
			// 		slidesPerView: 14,
			// 		spaceBetween: 8,
			// 	},
			// }
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

		//swiper.controller.control = swiper2;
		//swiper2.controller.control = swiper;

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

		
		var main = new Splide( '.main-slider', {
			type   : 'fade',
			heightRatio: 0.5,
			pagination : false,
			arrows     : false,
			cover      : true,
		} );
		  
		var thumbnails = new Splide( '.thumbnail-slider', {
			type   : 'loop',
			isNavigation    : true,
			gap             : 0,
			focus           : 1,
			pagination      : false,
			cover           : true,
			direction       : 'ttb',
			heightRatio : 3.1,
			perPage: 15,
			// dragMinThreshold: {
			//   mouse: 4,
			//   touch: 10,
			// },
			breakpoints : {
				419: {
					heightRatio: 1.8,
					perPage: 6,
				},
				575: {
					heightRatio : 1.6,
					perPage: 7,
				},
				767: {
					heightRatio : 1.6,
					perPage: 7,
				},
				991: {
					heightRatio : 2,
					perPage: 10,
				},
				1199: {
					heightRatio : 2.2,
					perPage: 14,
				},
				1399: {
					heightRatio : 2.3,
					perPage: 14,
				},
			},
		} );
		  
		main.sync( thumbnails );
		main.mount();
		thumbnails.mount();
		

		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  			return new bootstrap.Tooltip(tooltipTriggerEl)
		})

		
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	});	

/*All function nned to define here for use strict mode
----------------------------------------------------------------------------------------------------------------------------------------*/


	
/*--------------------------------------------------------------------------------------------------------------------------------------*/
})(jQuery, window, document);