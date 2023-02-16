var add = document.querySelector('#add');
var taskes = document.querySelector('#taskes');

add.addEventListener('click', function() {
	if (document.querySelector('textarea').value !== '') {
		var p1 = document.createElement('p');
		p1.innerHTML = '&#9745; ' + document.querySelector('textarea').value;
		taskes.appendChild(p1);
		document.querySelector('textarea').value = '';
	}
})

taskes.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'P') {
		var taskText = ev.target.textContent;
		ev.target.innerHTML = '<s>' + taskText + '</s>';
	}
})