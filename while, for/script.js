var test = +prompt('Введите любое число')

var i = 0;
while (i <= test) {
	console.log(i);
	i++ //i = i +1;
}
console.log ('Конец первого цикла');


for (var j = 0; j <= test; j++) {
	if (j == 4) {
		break;
	}
	console.log(j);
}
console.log ('Конец второго цикла');