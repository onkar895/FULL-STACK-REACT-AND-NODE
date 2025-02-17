// JavaScript for-in Loop

const obj = {
  name: 'Prakash',
  city: 'Mumbai'
};

// Checking if 'name' property exists in obj
const isNameFound = 'name' in obj;
console.log(isNameFound); // Output: true

// Checking if 'age' property exists in obj
const isAgeFound = 'age' in obj;
console.log(isAgeFound); // Output: false


// Looping Through an Object with `for...in`:
const person = {
  name: 'Prakash',
  city: 'Mumbai'
};

// Looping through the object
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


// Example: Combining `in` Operator and `for...in` Loop
// Let's combine these concepts in a single example.

const car = {
    make: 'Tesla',
    model: 'Model S',
    year: 2020
};

// Check if a property exists
const isModelPresent = 'model' in car;
console.log(isModelPresent); // Output: true

// Loop through the object
for (let prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}