$(function(){

	// function disableScroll()
	// {
	// 	$('html, div').on('mousewheel', function(){
	// 		return false;
	// 	});
	// }

	// function enableScroll()
	// {
	// 	$('html, div').off('mousewheel');
	// }

	// $('#changeButton')
	// 	.css({
	// 		'margin-left': '20px',
	// 		'margin-bottom': '40px'
	// 	})

	// 	.click(function(){
	// 		$('#popup-container').fadeIn(300, disableScroll);
	// 		$('#popup').animate({
	// 			width: '200px',
	// 			height: '300px'
	// 		}, 400);
	// 	});
	// $('#popup-container').click(function(event){
	// 	if(event.target == this) {
	// 		$(this).fadeOut(200, enableScroll);
	// 		$('#popup').animate({
	// 			width: 0,
	// 			height: 0
	// 		}, 400);
	// 	}
	// });

	$(function(){
			$('#changeButton')
				.click(function(){
					$('#column-left h2').css('display', 'none');
			});
		});
});