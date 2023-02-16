var mainContent = document.querySelector('.main-content');
var clearButton = document.querySelector('#clear-text');
var saveText = document.querySelector('#save-text');

if (typeof localStorage.saveContent !== 'undefined') {
	mainContent.innerHTML = localStorage.saveContent;
}

function clearText(ex) {
	mainContent.innerHTML = '';
}

function firstClearText() {
	if (mainContent.innerHTML == '\n\t\t\t\tВведите свой первый текст.\n\t\t\t') {
		mainContent.innerHTML = '';
	} mainContent.removeEventListener('click', clearText);
}

mainContent.addEventListener('click', firstClearText);
clearButton.addEventListener('click', clearText);


saveText.addEventListener('click', function() {
	if (i <= 5) {
		localStorage.setItem('saveContent' + i, mainContent.innerHTML);

		var savedVersions = document.createElement('div');
		savedVersions.classList.add('saveContent' + i);
		document.querySelector('.row').appendChild(savedVersions);

		var d = new Date();
		var savedVersionItem = document.createElement('p');
		savedVersionItem.classList.add('saved-version-item');
		savedVersionItem.innerHTML = 'Сохранение ' + d.getDay() + '.' + months.slice(d.getMonth(), (d.getMonth() +1)) + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
		document.querySelector('.saveContent' + i).appendChild(savedVersionItem);

		var dltButton = document.createElement('button');
		dltButton.classList.add('delete-version-item');
		document.querySelector('.saveContent' + i).appendChild(dltButton);
		document.querySelector('.saveContent' + i).appendChild(document.createElement('br'))
		return i++;
	}
});

document.querySelector('.row').addEventListener('click', function(ev) {
	if (ev.target.tagName === 'P') {
		var nameSave = ev.target.parentElement.className;
		mainContent.innerHTML = localStorage.getItem(nameSave);
	}

	if (ev.target.className == 'delete-version-item') {
		var nameSave = ev.target.parentElement.className;
		var dltSavedItem = ev.target.parentElement;
		dltSavedItem.parentElement.removeChild(dltSavedItem);
		localStorage.removeItem(nameSave);
		i = i - 1;
		return i
	}
})


var months = [
		'01', 
		'02', 
		'03', 
		'04', 
		'05', 
		'06', 
		'07', 
		'08', 
		'09', 
		'10', 
		'11', 
		'12'
	];

var i = 1;