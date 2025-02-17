// Computed Properties

// In this Article, we will learn how to add properties to an existing object and understand the concept of computed properties.

// Adding Properties to an Existing Object:

const obj = {
  name: 'Prakash',
  age: 100
};

// Adding new properties using dot notation
obj.city = 'Mumbai';
obj.state = 'Maharashtra';

console.log(obj);

// Adding new properties using bracket notation
obj['city'] = 'Pune';
obj['state'] = 'Maharashtra';

console.log(obj);


// Property Shorthand:

// Shorthand properties simplify the syntax for defining object properties when the property name is the same as the variable name holding the value. Instead of writing both the property and its value explicitly, you can use shorthand syntax.
function getObject(name, city) {
  return {
      name: name,
      city: city
  };
}

const obj1 = getObject('Akash', 'Mumbai');
console.log(obj1); // Output: { name: 'Akash', city: 'Mumbai' }


// Creating an Object with Multiple Properties
const age = 25;
const job = 'Developer';
const student = 'Onkar';
const course = 'NodeJS';

// Using shorthand properties
const person = {
    age,
    job
};

console.log(person); // Output: { age: 25, job: 'Developer' }

// Logging student and course as an object
console.log({ student, course }); // Output: { student: 'Ashish', course: 'Redux' }


// Let's create a practical example where we define a list of students and their respective courses using shorthand properties:

const students = [
    { name: 'Akash', city: 'Mumbai', course: 'JavaScript' },
    { name: 'Ashish', city: 'Chennai', course: 'Redux' },
    { name: 'Sita', city: 'Delhi', course: 'React' }
];

students.forEach(student => {
    console.log(student);
});