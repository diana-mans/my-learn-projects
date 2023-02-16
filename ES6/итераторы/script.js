let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Массив: ${arrNumber}`);


function task1() {
	for (let curr of arrNumber ){
		console.log(curr);
	}
}

function task2() {
	arrNumber = arrNumber.reverse();
	for (let curr of arrNumber ){
		console.log(curr);
	}
}

function task3() {
	var sum = 0;
	for (let curr of arrNumber ){
		sum += curr;
	}
	console.log(sum);
}

function task4() {
	const str = 'Очко очкошное';
	console.log(str);
	let i = 0;
	for (let symb of str) {
		if (symb == 'о' || symb == 'О') {i++};
	}
	console.log(i);
}