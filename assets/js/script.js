class Persons {
	constructor(_id, _name, _surname, _age, _courses, _address) {
		this.id = _id;
		this.name = _name;
		this.surname = _surname;
		this.age - _age;
		this.courses = _courses;
		this.address = {
			street: _address[0],
			civic: _address[1],
			city: _address[2],
		};
	}
}

const newPerson = new Persons(
	1,
	'Mario',
	'Rossi',
	25,
	['HTML', 'CSS', 'JavaScript'],
	['Via Roma', 20, 'Milano'],
);

console.log(newPerson);
console.log(JSON.stringify(newPerson));

let myString = JSON.stringify(newPerson);
console.log(JSON.parse(myString));
