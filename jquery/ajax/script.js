$('.btn').click(function(ev) {
	ev.preventDefault();

	$.get('/data.txt', function(response) {
		$('.text').html(response);

	})
});