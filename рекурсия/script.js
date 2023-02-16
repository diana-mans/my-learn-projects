function printNumbers(n) {
	if (n > 0) {
		console.log(n);
		printNumbers(n - 1);
	}
}

printNumbers(10);