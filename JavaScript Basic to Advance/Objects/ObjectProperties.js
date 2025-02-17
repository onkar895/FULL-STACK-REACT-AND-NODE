// Object Properties:

const person = {
  name: 'Prakash',
  age: 99,
  job: 'Mentor'
};

console.log(person) // { name: 'Prakash', age: 100, job: 'Mentor' }
// Dot Notation
console.log(person.name); // Output: Prakash
console.log(person.age);  // Output: 99
// Bracket Notation
console.log(person['name']); // Output: Prakash
console.log(person['age']);  // Output: 99


// Adding and Modifying Properties
person.city = 'New York'; // Adding a new property
person.age = 100;         // Modifying an existing property
console.log(person.city); // Output: New York
console.log(person.age);  // Output: 100
console.log(person)  // { name: 'Prakash', age: 100, job: 'Mentor', city: 'New York' }


// Deleting Properties
delete person.job;
console.log(person.job); // Output: undefined
console.log(person)  // { name: 'Prakash', age: 100, city: 'New York' }

// Nested Objects
const user = {
  name: 'John',
  address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
  }
};

console.log(user.address.city)  // Anytown


// Object Methods:
// Objects can also contain functions, known as methods.

const person2 = {
  name: 'Prakash',
  age: 99,
  job: 'Mentor',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person2.greet()


// Creating a Shallow Copy of an Object:
// To create a shallow copy of an object, use the spread operator.

const userCopy = { ...user };
console.log(userCopy); // Output: { name: 'John', address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }