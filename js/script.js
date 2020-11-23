$(document).ready(function () {
	$('.intro__slider-list').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		speed: 1000,
		autoplaySpeed: 800,
	});
});

$(document).ready(function () {
	$('.news__slider-list').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		responsive: [{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
});


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href')

		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}


function initMap() {
	var pos = {
		lat: 46.386248001380146,
		lng: 30.733765273033526
	};
	var opt = {
		center: pos,
		zoom: 15,
	};

	var myMap = new google.maps.Map(document.getElementById('map'), opt);
	var marker = new google.maps.Marker({
		position: pos,
		map: myMap,
		title: 'Два Академика',
	});
}
