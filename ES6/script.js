	class Animal {
		constructor() {
			console.log('Создан новый экземпляр Animal');
			this.name = 'Abstract Animal';
		}
		sayHello() {
			console.log(`Hello from ${this.name}`);
		}
	};
	class Cat extends Animal { // расширяет Animal (наслед.)
		constructor() {
			super(); //Animal
			this.name = 'Kitty';
		}
	}
	class Dog extends Animal { // расширяет Animal (наслед.)
		constructor() {
			super(); //Animal
			this.name = 'Doggy';
		}
	}
	const cat = new Cat;
	const dog = new Dog;
	cat.sayHello(); //Hello from Kitty
	dog.sayHello(); //Hello from Doggy