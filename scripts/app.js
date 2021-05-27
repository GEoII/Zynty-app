let menuToggle = document.querySelector('.icon-menu');
let menuToggleIcon = document.querySelector('.menu-toggle span');
let menu = document.getElementById('menu');

let icon = document.getElementById('iconav');

menuToggle.addEventListener('click', (e) => {
	menu.classList.toggle('activar');

	if (icon.classList.contains('icon-menu')) {
		$('div.nav-sup-div span').removeClass('icon-menu');
		$('div.nav-sup-div span').addClass('icon-cross');
	} else {
		$('div.nav-sup-div span').removeClass('icon-cross');
		$('div.nav-sup-div span').addClass('icon-menu');		
	}


})




var ultimoScroll = 0;

$(document).ready(function() {
	$(window).on('scroll', function(){
		st = $(window).scrollTop();


		if (st > ultimoScroll) {
			$('div.nav-sup-div').addClass('hide');
			$('nav.nav-sup').addClass('activar');
			$('div.nav-sup-div span').removeClass('icon-cross');
			$('div.nav-sup-div span').addClass('icon-menu');
		} else {
			$('div.nav-sup-div').removeClass('hide');
		}
		ultimoScroll = st;
	})
})