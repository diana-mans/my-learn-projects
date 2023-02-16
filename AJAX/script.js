var btn1 = document.querySelector('.btn-primary1');
btn1.addEventListener('click', function(ev) {
	ev.preventDefault(); //чтобы страница не перезагрузилась

	//Создаем новый экземпляр объекта XML для отправки асинхронного запроса
	var request = new XMLHttpRequest() 

	//Выводим текст, который придет от сервера
	request.onload = function() {
		var text = request.responseText;
		document.querySelector('.text').innerHTML = text;
	}

	//открываем соединение методом GET на адрес /data.txt
	request.open('GET', '/data.txt');

	//отправляем наш запрос методом send
	request.send();
})

var btn2 = document.querySelector('.btn-primary2');
btn2.addEventListener('click', function(ev) {
	ev.preventDefault(); //чтобы страница не перезагрузилась

	window.fetch('/data.json')
		.then(function(response) {
			console.log('До json')
			console.log(response);
			return response.json();
		})
		.then(function(response) {
			console.log('После json')
			console.log(response);
			document.querySelector('.project').innerHTML = response.project;
			document.querySelector('.course').innerHTML = response.course;
			document.querySelector('.module').innerHTML = response.module;
			document.querySelector('.teacher').innerHTML = response.teacher;
		})

})