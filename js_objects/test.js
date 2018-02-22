var man = {
	fname: 'Tobi',
	lname: 'Adelaja',
	age: 25,
	fullname: function() { return this.fname + ' ' + this.lname; }
};

var Car = class Car {


	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
}

var Rectangle = class Rectangle {

	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	get area() {
		return this.calcArea();
	}

	calcArea() {
		return (this.height * this.width);
	}
}

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static distance(a, b) {
		var dx = a.x - b.x;
		var dy = a.y - b.y;

		return Math.hypot(dx, dy);
	}
}

class Animal { 
	constructor(name) {
		this.name = name;
	}

	speak() {
		return this;
	}
	static eat() {
		return this;
	}
}

class Cat extends Animal {
	speak() {
		return this.name + ' meows.';
	}
}

class Date {
	constructor(day, month, year) {
		this.day = day;
		this.month = month;
		this.year = year;
	}

	get printDate() {
		return this.day.padStart(2, '0') + '/' + this.month.padStart(2, '0') + '/' + this.year;
	}

	addDays(nDays) {
		let newDay =  Number(this.day) + nDays;
		
		if ( !(newDay > 31) ) {
			this.day = newDay.toString();
		} else {
			this.day = (newDay - 31).toString();
			this.month = (Number(this.month) + 1).toString();
		}
	}

	addMonths(number) {
		this.month = (Number(this.month) + number).toString();
	}
}

var list = [];

list[0] = 3;
list[1] = 9;
list[0] = 6;