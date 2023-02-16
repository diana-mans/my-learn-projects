$(function(){

	function disableScroll()
	{
		$('html, div').on('mousewheel', function(){
			return false;
		});
	}

	function enableScroll()
	{
		$('html, div').off('mousewheel');
	}

	$('#find-1')
		.click(function(){
			$('#find-1').animate({
				width: '200px',
			}, 100);
			$('#find-1').css({'background-position-x': '185px'});
		});

	$('#open-menu')
		.click(function(){
			$('#menu').fadeIn(300, disableScroll);
			$('#menu').animate({
				height: '700px',
			}, 400);
			$('#open-menu').hide();
			$('#close-menu').show()
		});

	$('#close-menu')
		.click(function(){
			$('#menu').fadeOut(200, enableScroll);
			$('#menu').animate({
				height: 0
			}, 300);
			$('#close-menu').hide()
			$('#open-menu').show();
		});

});