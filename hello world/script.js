var myName = prompt('Как вас зовут?');
var myBirthYear = prompt('В каком году вы родились?')
var myAge = 2022 - myBirthYear;

if (myAge < 20) {
	alert('Привет, ' + myName + '!' + ' Вам ' + myAge + ' лет.');
} else if (myAge >= 20 && myAge < 40) {
	alert('Добрый день, ' + myName + '!' + ' Вам ' + myAge + ' лет.');
} else {
	alert('Здравствуйте, ' + myName + '!' + ' Вам ' + myAge + ' лет.');
}

