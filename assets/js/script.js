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
console.table(JSON.parse(myString));

localStorage.setItem('persons', newPerson); // Sbagliato, local/sessionStorage possono memorizzare solo stringhe
localStorage.setItem('persons', JSON.stringify(newPerson)); // Corretto

const myArray = [1, 2, 3, 4, 'Pippo', 'Pluto', 'Paperino'];
localStorage.setItem('array', myArray); // Sbagliato, trasforma l'array in una stringa generica
localStorage.setItem('array', JSON.stringify(myArray)); //Corretto

let arrayFromLS = localStorage.getItem('array'); // Sbagliato, legge soltanto una stringa
console.log(arrayFromLS);
console.log(JSON.parse(localStorage.getItem('array'))); // Corretto
