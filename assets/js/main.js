$(document).ready(function(){
	/*scroll about start*/
	var $menu = $("#sticky-header");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 200 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});
	/*scroll about end*/

	var breakpoint  = 1024;
	var $window     = $(window);
	var $navul      = $('nav ul');
	var $navtrigger = $('#mobile-nav-trigger');

	$navtrigger.on('click', function() { 
		var $that = $(this);


		$that.prop('disabled', true);

		$navul.slideToggle(function() {
			$that.toggleClass('active').prop('disabled', false);
		});
	});

	if ($window.width() <= breakpoint) {
		$navtrigger.show();
		$navul.hide();
	}

	$window.on('resize', function() {
		if ($window.width() <= breakpoint) {
			if ($navtrigger.is(':hidden')) {
				$navtrigger.removeClass('active').show();
				$navul.hide();

			}
		} else {
			if ($navtrigger.is(':visible')) {
				$navtrigger.hide().removeClass('active');
				$navul.show();
			}
		}
	});

	/*top navigation end*/
	/*slider start*/
	$('.my-slider').slick({
		'dots': true,
		'arrows': false, 
		'draggable': true,
		'autoplay': true, 
		'autoplaySpeed': 2000, 
		'slidesToShow': 1, 
		'slidesToScroll': 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	/*sleder arrow start*/
	$(document).on('click', '.prev', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickPrev');
	});
	
	$(document).on('click', '.next', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickNext');
	});
	/*sleder arrow end*/

	/*slider end*/
	
});

/*second slider start*/
$('.team_slider').slick({
		'dots': false,
		'arrows': true, 
		'draggable': true,
		'autoplay': true, 
		'autoplaySpeed': 2000, 
		'slidesToShow': 1, 
		'slidesToScroll': 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

/*second slider end*/





/*map start*/
function initMap() {
	var myLatLng = {lat: -25.363, lng: 131.044};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});
}

/*map end*/

/*scroll to top start*/
var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
/*scroll to top end*/

/*side_panel start*/
$(document).ready(function(){
  //Инициализация всплывающей панели для
  //элементов веб-страницы, имеющих атрибут
  //data-toggle="popover"
  $('[data-toggle="popover"]').popover({
    //Установление направления отображения popover
    title: 'Заголовок панели',
    content: 'Текст панели',
    trigger: 'hover',
    placement : 'top'
});
});
/*side_panel end*/