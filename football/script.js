//20-677
//220-1170

$('#ball').on('click', function() {
	var t = Math.floor(Math.random() * (677 - 20)) + 20;
	var l = Math.floor(Math.random() * (1170 - 220)) + 220;
	$('#ball').animate({
		top: t,
		left: l,
	}, 800, function() {
		if (l <= 247 && t >= 340 && t <= 386 || l >= 1165 && t >= 340 && t <= 386 ) {
			$('#scrimer-container').show();
		}
	})
})
