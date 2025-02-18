// JavaScript Object Methods: Keys, Values & Entries

// JavaScript provides several methods that make it easier to work with objects. Three of the most useful methods are Object.entries(), Object.keys(), and Object.values(). These methods allow you to extract and manipulate the properties of an object in different ways.

// Example Object


const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

// 1. Object.entries()
// The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs.
const entries = Object.entries(obj);
console.log(entries);
// Output: [ [ 'name', 'Prakash' ], [ 'age', 99 ], [ 'city', 'Mumbai' ] ]
// As you can see, Object.entries(obj) returns an array of arrays, where each inner array contains a key-value pair from the object.

// 2. Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const keys = Object.keys(obj);
console.log(keys); // Output: [ 'name', 'age', 'city' ]
// Object.keys(obj) returns an array containing the keys of the object.

// 3. Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as provided by a for...in loop.
const values = Object.values(obj);
console.log(values); // Output: [ 'Prakash', 99, 'Mumbai' ]
// Object.values(obj) returns an array containing the values of the object.

const obj1 = {
  x: 1,
  y: 2,
  z: 17
};

const values1 = Object.values(obj1);
const sum = values1.reduce((acc, val) => acc + val, 0);

console.log(sum); // Output: 20


// Iterating Over an Object
// You can use a for...in loop to iterate over the keys of an object:

const obj2 = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

for (let key in obj2) {
    console.log(`${key}: ${obj2[key]}`);
}