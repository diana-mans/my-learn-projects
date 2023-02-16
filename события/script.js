var btn1 = document.querySelector('.button-1');
var btn2 = document.querySelector('.button-2');
var link = document.querySelector('.link');
var textarea = document.querySelector('textarea');
var keyCode = document.querySelector('.key-code');
var coords = document.querySelector('.coords');
var inText = document.querySelector('.in-text');
var coordsText = inText.textContent;



btn1.addEventListener('click', function() {
	alert('Нажимай на меня сколько угодно, детка');
});




function onClickBtn2() {
	alert('ХА-ХА, ты мог это сделать только один раз');
	btn2.removeEventListener('dblclick', onClickBtn2); //сработает только 1 раз
};

btn2.addEventListener('dblclick', onClickBtn2);



link.addEventListener('click', function(ev) {
	ev.preventDefault(); //блокирует стандартное поведение браузера. В данном случае браузер не перейдет по этой ссылке
});



//События клавиатуры
textarea.addEventListener('keydown', function(ev) {
	if (ev.keyCode == 13) {
		ev.preventDefault(); 
		keyCode.innerHTML = '<b>Я запретила нажимать Enter!</b>';
	} else {
		keyCode.innerHTML = 'Код нажатой кнопки: ' + ev.keyCode;
	}
});


coords.addEventListener('mousemove', function(ev) {
	inText.textContent = 'X ' + ev.screenX + ', Y ' + ev.screenY;
});

coords.addEventListener('mouseout', function(ev) {
	inText.textContent = coordsText;
});




//Погружение и всплытие событий

function showTarget(ev) {
	console.log('target:', ev.target, '\ncurrentTarget:', ev.currentTarget);
}

document.querySelector('body').addEventListener('click', showTarget);











