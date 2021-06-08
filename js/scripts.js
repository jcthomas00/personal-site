/*
*   Author: beshleyua
*   Author URL: http://themeforest.net/user/beshleyua
*/


/*
	Preloader
*/

$(window).on("load", function () {
	var preload = $('.preloader');
	preload.find('.spinner').fadeOut(function () {
		preload.fadeOut();
	});
});

$(function () {
	'use strict';

	/*
		Typed
	*/

	$('.subtitle.subtitle-typed').each(function () {
		var subtitleContainer = $(this);

		subtitleContainer.typed({
			stringsElement: subtitleContainer.find('.typing-title'),
			backDelay: 3500, /* Delay in text change */
			typeSpeed: 0, /* Typing speed */
			loop: true
		});
	});


});

