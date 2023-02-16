function sum(a, b) {
	var s = a + b;
	return s;
}

var summa = sum(+prompt('Введите любое число'), +prompt('Введите второе число'));
alert('Сумма этих значений: ' + summa);

function printHello(firstName, lastName) {
	firstName = firstName || 'Пользователь';
	lastName = lastName || 'Тестовый';
	var fullName = lastName + ' ' + firstName;
	var greeting = 'Добрый день, ';
	return greeting + fullName + '!';
}

var hello = printHello(prompt('Ваше имя'), prompt('Ваша фамилия'));
alert(hello);
