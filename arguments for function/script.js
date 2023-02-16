function printHello(firstName, lastName) {
	firstName = firstName || 'Пользователь';
	lastName = lastName || 'Тестовый';
	var fullName = lastName + ' ' + firstName;
	alert('Добрый день, ' + fullName + '!');
	
}

printHello(prompt('Ваше имя'), prompt('Ваша фамилия'));
