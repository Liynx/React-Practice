//Object Desctructuring

// const person = {
//   name: 'Liam',
//   age: 24,
//   location: {
//     city: 'Nanoose Bay',
//     temp: 26
//   }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}`)

// const {city, temp} = person.location;
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

//Array Destructuring

const address = ['2001 Seahaven', 'Nanoose Bay', 'BC', 'V9P 9C5'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , cost] = item;

console.log(`A medium ${itemName} costs ${cost}`);


