//  Destructuring:

// Basic Syntax:
var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

// With rest operator
[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(restof); // [30, 40, 50]

var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
console.log(firstName); // "alpha"
console.log(secondName); // "beta"

// Skipping Elements:
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName); // "alpha"
console.log(thirdName); // "gamma"

// Using Rest Operator:
var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName); // "alpha"
console.log(lastName); // ["gamma", "delta"]



// Object Destructuring

const user = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};
const { name, age, job } = user;
console.log(name); // John Doe
console.log(age); // 30
console.log(job); // Developer


// Nested Destructuring
const user1= {
  name1: 'John Doe',
  address: {
    city: 'New York',
    country: 'USA'
  }
};
const { name1, address: { city, country } } = user1;
console.log(name1)
console.log(city, country)