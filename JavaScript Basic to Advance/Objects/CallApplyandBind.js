// Function Borrowing - `call`, `apply`, and 'bind:

// Suppose we have three objects representing users, each with a `name` and `age` property, and a `sayHi` method to display their name. Instead of defining the `sayHi` method for each object, we can define it once and let the objects borrow this method.

const user1 = {
  name: 'onkar',
  age: 26,
}

const user2 = {
  name: 'rishi',
  age: 28
}

const user3 = {
  name: 'john',
  age: 32
}

function  sayHi () {
  console.log(this.name)   // this is actually same as (user1.name as user2.name)
}

// 1. Using `Call`
// The `call` method allows us to borrow a function and execute it with a specified `this` value and arguments. Here's how it works:
console.log("Call Method:")
sayHi.call(user1)  // the vale of 'this' is user1
sayHi.call(user2)  // the vale of 'this' is user2
// The `call` method immediately invokes the function with the `this` value set to the specified object.

console.log("---------------------------")

// 2. Using `Apply`:
// The `apply` method works similarly to `call`, but it takes an array of arguments instead of individual arguments. This can be particularly useful when you have an array of arguments to pass.
function introduce(degree, year) {
  console.log(`${this.name}, Degree: ${degree}, Year: ${year}`);
}
console.log("Apply Method:")
introduce.apply(user1, ['B.Tech ECE', 2015]); 
introduce.apply(user2, ['B.Tech CS', 2018]); 

// Call Immediately invokes the function with a specified `this` value and arguments.
// Apply Immediately invokes the function with a specified `this` value and arguments passed as an array.

console.log("---------------------------")

// Function Borrowing - `bind`

// Suppose we have three objects representing persons, each with a `name` and `age` property. We want each object to have access to a `sayHii` method to display their name. Instead of defining the `sayHii` method for each object, we can define it once and let the objects borrow this method using `bind` also like call and apply.

const person1 = {
  name: 'Prakash',
  age: 25,
};

const person2 = {
  name: 'Ashish',
  age: 30,
};

const person3 = {
  name: 'Ria',
  age: 22,
};

function sayHiI() {
  console.log(`Hi, my name is ${this.name}.`);
}

// The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value. Unlike `call` and `apply`, `bind` does not immediately invoke the function. Instead, it returns a new function that can be invoked later.
console.log("Bind Method:")
const boundSayHiUser1 = sayHiI.bind(person1);
const boundSayHiUser2 = sayHiI.bind(person2);
const boundSayHiUser3 = sayHiI.bind(person3);

boundSayHiUser1(); // Output: Hi, my name is Prakash.
boundSayHiUser2(); // Output: Hi, my name is Ashish.
boundSayHiUser3(); // Output: Hi, my name is Ria.

// Passing Arguments with `bind`

// The `bind` method can also be used to partially apply arguments to the function. This is useful if your function takes additional parameters.
// Let's modify our `sayHi` function to take additional parameters and use `bind` to pass these arguments:

function introduce(degree, year) {
    console.log(`${this.name}, Degree: ${degree}, Year: ${year}`);
}

const boundIntroduceUser1 = introduce.bind(user1, 'B.Tech ECE', 2015);
const boundIntroduceUser2 = introduce.bind(user2, 'B.Tech CS', 2018);
const boundIntroduceUser3 = introduce.bind(user3, 'B.Tech CS', 2022);

boundIntroduceUser1(); // Output: Prakash, Degree: B.Tech ECE, Year: 2015
boundIntroduceUser2(); // Output: Ashish, Degree: B.Tech CS, Year: 2018
boundIntroduceUser3(); // Output: Ria, Degree: B.Tech CS, Year: 2022


// `bind`: Creates a new function that can be invoked later, with the `this` value permanently set to the specified object.
// Function Borrowing: Allows one object to use a method defined in another object.
// Partial Application: `bind` can be used to partially apply arguments to a function, creating a new function with pre-set arguments.