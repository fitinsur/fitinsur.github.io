$(document).ready(function() {

	$(window).scroll( function() {
		var top = $(this).scrollTop();
		if(top > 8) {
			$('header').addClass('-fix');
		}
		else {
			$('header').removeClass('-fix');
		}
	});

	$(this).on('click', 'a.menu-link[href^="#"]', function (event) {
		event.preventDefault();
		event.stopPropagation();
		var target = $(this).attr("href");

		if($(this).hasClass('-mobile')) {
			toggleMenu();
		}
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top+24
        }, 500, function() {
			localStorage.hash = target;
		});
	});

	$('.mobile-menu').on('click', function(e) {
		$(this).toggleClass('close');
		$('body').toggleClass('no-overflow');
		$('.novidario-menu-mobile').toggleClass('hidden');
		e.preventDefault();
	});

	

});

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();	

	$('.section-scroll').each(function(i) {		
		if (i == 4) {
			var footer = $(this)[0];	
			if ($(this).position().top <= (scrollDistance + footer.offsetHeight)) {
				$('.menu-link.-active').removeClass('-active');
				$('.menu-link').eq(i).addClass('-active');
			}
		}
		else {
			if ($(this).position().top <= (scrollDistance + ($(this).height()/2)) ) {
				$('.menu-link.-active').removeClass('-active');
				$('.menu-link').eq(i).addClass('-active');
			}
		}
	});
}).scroll();