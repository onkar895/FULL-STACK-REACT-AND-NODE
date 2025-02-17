// Using Functions as Object Properties

// Creating an Object with a Function Property

// You can add a function as a property to an object. This function can then be called like any other property of the object.
const obj = {
  name: "Onkar",
  age: 27,
  greet: function() {
    console.log(`Good Morning ${obj.name}`)
  }
}

console.log(obj)
// Calling the function property
obj.greet()

// ---

// Using Method Shorthand:
// JavaScript provides a shorthand method to define functions within objects.
const objs = {
    name: 'Onkar Karale',
    greetMessage() {
        console.log(`Hello, ${objs.name}! Welcome to our youtube channel.`);
    }
};

objs.greetMessage();


// Let's create a more complex object with multiple properties and methods.

const person = {
    name: 'Prakash Sakari',
    age: 99,
    job: 'Mentor',
    courses: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Python'],
    greet() {
        console.log(`Hello, ${this.name}! Welcome to your job as a ${this.job}.`);
    },
    displayCourses() {
        console.log(`${this.name} teaches the following courses:`);
        this.courses.forEach(course => console.log(course));
    }
};

// Calling the methods
person.greet(); // Output: Hello, Prakash Sakari! Welcome to your job as a Mentor.
person.displayCourses(); // Output: Prakash Sakari teaches the following courses: HTML, CSS, JavaScript, ReactJS, Python


// Function Borrowing

// Function borrowing allows one object to borrow methods from another object. This is especially useful when multiple objects need to use the same method.

const person1 = {
  name: 'John',
  greet() {
      console.log(`Hello, ${this.name}!`);
  }
};

const person2 = {
  name: 'Jane'
};

// Borrowing the greet method from person1
person2.greet = person1.greet;

person1.greet(); // Output: Hello, John!
person2.greet(); // Output: Hello, Jane!