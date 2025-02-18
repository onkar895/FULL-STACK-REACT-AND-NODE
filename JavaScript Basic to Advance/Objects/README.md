# Object and its Properties

Objects are fundamental in JavaScript, providing a versatile way to store and manipulate data. They are especially useful when working with data fetched from APIs, which is often structured as objects. This lesson covers the basics of creating, accessing, and working with objects in JavaScript.

## Creating Objects

An object literal is one of the simplest and most common ways to create an object in JavaScript.

**Syntax:**
```
let object_name = {
    key_name : value,
    ...
}
```

Let us look at an example of a JavaScript Object below:
```javascript
const person = {
    name: 'Prakash',
    age: 99,
    job: 'Mentor'
};
```

Here, we have created an object `person` with three properties: `name`, `age`, and `job`.

## Accessing Object Properties

There are two primary ways to access properties of an object:

1. **Dot Notation**:
```javascript
console.log(person.name); // Output: Prakash
console.log(person.age);  // Output: 99
```

2. **Bracket Notation**:
```javascript
console.log(person['name']); // Output: Prakash
console.log(person['age']);  // Output: 99
```

Bracket notation is particularly useful when property names contain spaces or are dynamic.

## Adding and Modifying Properties

You can add new properties or modify existing ones using either dot notation or bracket notation.

```javascript
person.city = 'New York'; // Adding a new property
person.age = 100;         // Modifying an existing property
console.log(person.city); // Output: New York
console.log(person.age);  // Output: 100
```

## Deleting Properties

To remove a property from an object, use the `delete` operator.

```javascript
delete person.job;
console.log(person.job); // Output: undefined
```

## Nested Objects

Objects can contain other objects, creating a nested structure.

```javascript
const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};
console.log(user.address.city); // Output: Anytown
```

```javascript
const car = {
    make: 'Tesla',
    model: 'Model S',
    start: function() {
        console.log('Car started');
    }
};
car.start(); // Output: Car started
```

## Working with Dynamic Properties

Sometimes, you need to work with properties dynamically, particularly when property names are determined at runtime.

```javascript
const propName = 'make';
console.log(car[propName]); // Output: Tesla
```

## Handling Multi-Word Property Names

Properties with multi-word names need to be accessed using bracket notation.

```javascript
const userProfile = {
    'first name': 'Jane',
    'last name': 'Doe'
};
console.log(userProfile['first name']); // Output: Jane
```

## Creating a Shallow Copy of an Object

To create a shallow copy of an object, use the **spread operator.**

```javascript
const userCopy = { ...user };
console.log(userCopy); // Output: { name: 'John', address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }
```

## Summary

* Objects store data as key-value pairs, with each key being a string (or implicitly converted to a string).
* Properties can be accessed and modified using dot or bracket notation.
* Objects can contain other objects and functions.
* The spread operator creates a shallow copy of an object.

--------------------------------------------------------------------

# Functions as Property

In JavaScript, functions can be used as properties of objects. This can be a powerful tool for organizing and encapsulating functionality within an object, making it easier to maintain and reuse code.

To better understand this concept, let's dive into some code examples and interact with them.

## Using Functions as Object Properties

### Creating an Object with a Function Property

You can add a function as a property to an object. This function can then be called like any other property of the object.

```javascript
const obj = {
    name: 'Prakash Sakari',
    greetMessage: function() {
        console.log('Hello, Prakash! Welcome to GFG.');
    }
};

// Calling the function property
obj.greetMessage(); // Output: Hello, Prakash! Welcome to GFG.
```

In the example above, `greetMessage` is a key with a function as its value. This is an anonymous function assigned to the `greetMessage` property.

### Using Method Shorthand

JavaScript provides a shorthand method to define functions within objects.

```javascript
const obj = {
    name: 'Prakash Sakari',
    greetMessage() {
        console.log('Hello, Prakash! Welcome to GFG.');
    }
};

// Calling the function property
obj.greetMessage(); // Output: Hello, Prakash! Welcome to GFG.
```

This method shorthand is more concise and avoids the need for the `function` keyword.

### Accessing Functions in Objects

When you want to call a function within an object, you use the dot notation followed by parentheses.

```javascript
obj.greetMessage(); // Output: Hello, Prakash! Welcome to GFG.
```

## Example with Multiple Properties and Methods

Let's create a more complex object with multiple properties and methods.

```javascript
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
```

**Output**
```
Hello, Prakash Sakari! Welcome to your job as a Mentor.
Prakash Sakari teaches the following courses:
HTML
CSS
JavaScript
ReactJS
Python
```

In this example, `person` has two methods: `greet` and `displayCourses`. These methods can access other properties of the object using `this`.

## Function Borrowing

Function borrowing allows one object to borrow methods from another object. This is especially useful when multiple objects need to use the same method.

Here, we define an object **person** with properties **name** and **age**, as well as a function property **sayHello**. This function uses the **this** keyword to reference the **name** property of the object it is called on.

```javascript
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
```

**Output**
```
Hello, John!
Hello, Jane!
```

## Key Points

1. **Functions as Properties**: Functions can be used as properties in objects, providing methods to the object.
2. **Method Shorthand**: JavaScript allows shorthand syntax for methods in objects.
3. **Accessing Functions**: Functions in objects are accessed using dot notation followed by parentheses.
4. **Function Borrowing**: Objects can borrow methods from other objects, allowing code reuse and flexibility.

---

## Computed Properties

In this Article, we will learn how to add properties to an existing object and understand the concept of computed properties.

### Adding Properties to an Existing Object
To add a new property to an existing object, you can use either dot notation or bracket notation.

#### Using Dot Notation
Here's how you can add properties using dot notation:

```javascript
const obj = {
    name: 'Prakash',
    age: 100
};

// Adding new properties using dot notation
obj.city = 'Mumbai';
obj.state = 'Maharashtra';

console.log(obj);
// Output: { name: 'Prakash', age: 100, city: 'Mumbai', state: 'Maharashtra' }
```

#### Using Bracket Notation
Bracket notation is useful when the property name is dynamic or not a valid identifier:

```javascript
const obj = {
    name: 'Prakash',
    age: 100
};

// Adding new properties using bracket notation
obj['city'] = 'Mumbai';
obj['state'] = 'Maharashtra';

console.log(obj);
// Output: { name: 'Prakash', age: 100, city: 'Mumbai', state: 'Maharashtra' }
```

### Computed Properties
Computed properties allow you to dynamically set property names. This is particularly useful when you want to add a property to an object based on a variable value.

#### Example of Computed Properties
Let's take an example where you get a key from the user and add that key to the object:

```javascript
const readlineSync = require('readline-sync');

const obj = {
    name: 'Prakash',
    age: 100
};

// Getting a key from the user
const key = readlineSync.question('What do you want to know about the mentor? (name, age, city, state): ');

// Adding the key to the object dynamically
obj[key] = obj[key] || 'Not Available';

console.log(obj);
```

#### Example of Adding Computed Property Dynamically
You can also add a property dynamically based on user input:

```javascript
const readlineSync = require('readline-sync');

const obj = {
    name: 'Prakash',
    age: 100
};

const course = readlineSync.question('Which course do you want to learn? (HTML, CSS, JS, React, Redux): ');

// Adding a computed property to the object
obj[course] = 'Course not available';

console.log(obj);
```

### Key Points
- **Adding Properties:** You can add properties to an existing object using dot notation or bracket notation.
- **Computed Properties:** Use computed properties to dynamically add properties to an object based on variable values.
- **Bracket Notation:** Use bracket notation when dealing with dynamic property names or when the property name is not a valid identifier.

---

## Property Shorthand

In this Article, we will explore the concept of shorthand properties in JavaScript objects. Shorthand properties are a syntactic feature that allows you to create objects more concisely when the property names and variable names are the same.

### What are Shorthand Properties?
Shorthand properties simplify the syntax for defining object properties when the property name is the same as the variable name holding the value. Instead of writing both the property and its value explicitly, you can use shorthand syntax.

#### Example of Shorthand Properties
Consider a function that takes two parameters and returns an object:

```javascript
function getObject(name, city) {
    return {
        name: name,
        city: city
    };
}

const obj = getObject('Akash', 'Mumbai');
console.log(obj); // Output: { name: 'Akash', city: 'Mumbai' }
```

In the example above, we explicitly write the property names (`name` and `city`) and their values. Using shorthand properties, we can simplify this:

```javascript
function getObject(name, city) {
    return {
        name,
        city
    };
}

const obj = getObject('Akash', 'Mumbai');
console.log(obj); // Output: { name: 'Akash', city: 'Mumbai' }
```

Here, `name` and `city` are shorthand for `name: name` and `city: city`.

### Additional Examples with Shorthand Properties

#### Creating an Object with Multiple Properties
Let's define some variables and use them to create an object using shorthand properties:

```javascript
const age = 25;
const job = 'Developer';
const student = 'Ashish';
const course = 'Redux';

// Using shorthand properties
const person = {
    age,
    job
};

console.log(person); // Output: { age: 25, job: 'Developer' }

// Logging student and course as an object
console.log({ student, course }); // Output: { student: 'Ashish', course: 'Redux' }
```

#### Using Shorthand Properties in a Function
Let's create a function that generates an object with shorthand properties:

```javascript
function createStudent(name, city) {
    return {
        name,
        city
    };
}

const student1 = createStudent('Akash', 'Mumbai');
const student2 = createStudent('Ashish', 'Chennai');

console.log(student1); // Output: { name: 'Akash', city: 'Mumbai' }
console.log(student2); // Output: { name: 'Ashish', city: 'Chennai' }
```

### Practical Example
Let's create a practical example where we define a list of students and their respective courses using shorthand properties:

```javascript
const students = [
    { name: 'Akash', city: 'Mumbai', course: 'JavaScript' },
    { name: 'Ashish', city: 'Chennai', course: 'Redux' },
    { name: 'Sita', city: 'Delhi', course: 'React' }
];

students.forEach(student => {
    console.log(student);
});
```

### Summary
Shorthand properties are a useful feature in JavaScript that can make your code more concise and readable, especially when creating objects with properties that have the same names as variables.

### Key Points:
- **Shorthand Properties:** Use shorthand properties when the property name and variable name are the same.
- **Syntax:** Instead of `name: name`, you can write `name`.
- **Use Cases:** Useful in functions that return objects, logging multiple variables as objects, and more.

---


# Object Reference and Shallow Copy, Deep Copy

Understanding how to copy objects in JavaScript is crucial, especially when dealing with complex data structures. Objects in JavaScript are copied by reference, meaning that creating a direct copy of an object does not create a new object but rather a reference to the original object. This is known as a shallow copy. To create an entirely new object with no references to the original, you need a deep copy.

## Shallow Copy
A shallow copy creates a new object but does not recursively copy nested objects. Instead, it copies references to the original nested objects. Here's an example:

### Example of Shallow Copy

```javascript
const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = person1; // Shallow copy
person2.name = 'Ashish';

console.log(person1.name); // Output: Ashish
console.log(person2.name); // Output: Ashish
```

Output:
```
Ashish
Ashish
```

In this example, changing the name property of person2 also changes the name property of person1 because both variables reference the same object.

## Deep Copy
A deep copy creates a new object and recursively copies all properties of the original object, ensuring that there are no shared references between the original and the new object.

### Methods to Create Deep Copy
#### Using JSON methods:

```javascript
const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = JSON.parse(JSON.stringify(person1)); // Deep copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish
console.log(person1.address.city); // Output: Mumbai
console.log(person2.address.city); // Output: Sirsa
```

Output:
```
Prakash
Ashish
Mumbai
Sirsa
```

#### Using a custom deep copy function:

```javascript
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = deepCopy(person1); // Custom deep copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish
console.log(person1.address.city); // Output: Mumbai
console.log(person2.address.city); // Output: Sirsa
```

Output:
```
Prakash
Ashish
Mumbai
Sirsa
```

## Object.assign
The Object.assign method creates a shallow copy of an object. It is useful for copying objects that do not contain nested objects.

### Example of Object.assign

```javascript
const person1 = {
    name: 'Prakash',
    age: 101
};

const person2 = Object.assign({}, person1); // Shallow copy
person2.name = 'Ashish';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish
```

Output:
```
Prakash
Ashish
```

However, when using Object.assign with nested objects, the nested objects are still copied by reference, leading to unexpected behavior:

```javascript
const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = Object.assign({}, person1); // Shallow copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.address.city); // Output: Sirsa
console.log(person2.address.city); // Output: Sirsa
```

Output:
```
Sirsa
Sirsa
```

## Spread Operator
The spread operator (...) can also be used to create a shallow copy of an object:

### Example of Spread Operator

```javascript
const person1 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person2 = { ...person1 }; // Shallow copy
person2.name = 'Ashish';
person2.address.city = 'Sirsa';

console.log(person1.name); // Output: Prakash
console.log(person2.name); // Output: Ashish
console.log(person1.address.city); // Output: Sirsa
console.log(person2.address.city); // Output: Sirsa
```

Output:
```
Prakash
Ashish
Sirsa
Sirsa
```

Again, for nested objects, the spread operator does not create a deep copy.

## Summary
- **Shallow Copy**: A shallow copy duplicates the top-level properties but does not recursively copy nested objects. Methods like Object.assign and the spread operator (...) create shallow copies.
- **Deep Copy**: A deep copy duplicates all properties, including nested objects, ensuring that no references are shared between the original and the copied object. Methods like JSON.parse(JSON.stringify(obj)) and custom recursive functions can create deep copies.

---

# JavaScript for-in Loop

In this Article, we'll delve deeper into JavaScript objects by exploring how to check for the existence of properties using the `in` operator and how to loop through an object's properties using the `for...in` loop. These techniques are fundamental for effectively working with objects in JavaScript.

## The `in` Operator
The `in` operator is used to check if a specified property exists in an object. It returns `true` if the property is found and `false` if it is not.

### Example of the `in` Operator

```javascript
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
```

Output:
```
true
false
```

In the example above, we use the `in` operator to check for the existence of the `name` and `age` properties in the `obj` object.

## Looping Through an Object with `for...in`
The `for...in` loop allows you to iterate over the enumerable properties of an object. During each iteration, the loop assigns the current property name to a variable, which can then be used to access the property's value.

### Example of `for...in` Loop

```javascript
const person = {
    name: 'Prakash',
    city: 'Mumbai'
};

// Looping through the object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

Output:
```
name: Prakash
city: Mumbai
```

In this example, the `for...in` loop iterates over the properties of the `person` object, logging both the property names and their values to the console.

### Using `for...in` with Additional Information
We can enhance the previous example to show both keys and values in a formatted string.

```javascript
const person = {
    name: 'Prakash',
    city: 'Mumbai'
};

// Looping through the object and displaying key-value pairs
for (let key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`);
}
```

Output:
```
Key: name, Value: Prakash
Key: city, Value: Mumbai
```

## Summary
Using the `in` operator and the `for...in` loop, you can effectively work with objects in JavaScript. These tools allow you to check for the existence of properties and iterate over an object's properties, providing a flexible way to handle dynamic data structures.

### Key Points:
1. `in` **Operator**: Checks for the existence of a property in an object.
2. `for...in` **Loop**: Iterates over the enumerable properties of an object, accessing both keys and values.

### Example: Combining `in` Operator and `for...in` Loop
Let's combine these concepts in a single example.

```javascript
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
```

Output:
```
true
make: Tesla
model: Model S
year: 2020
```

---

# Optional Chaining in JavaScript

The **optional chaining '?.'** is an error-proof way to access nested object properties, even if an intermediate property doesn't exist. It was recently introduced by ECMA International, Technical Committee 39 – ECMAScript which was authored by Claude Pache, Gabriel Isenberg, Daniel Rosenwasser, Dustin Savery. It works similar to Chaining '.' except that it does not report the error, instead it returns a value which is undefined. It also works with function call when we try to make a call to a method which may not exist.

## Nested Objects
Consider an object `user` with properties `name`, `address`, and `likes`. The `address` property itself is an object containing `street` and `city`:

```javascript
const user = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai'
    },
    likes: ['reading', 'traveling']
};
```

To access the `city` from the `address`, you can write:

```javascript
console.log(user.address.city); // Output: Mumbai
```

However, if the `city` property does not exist or the `address` is undefined, you will encounter issues:

```javascript
console.log(user.address.landmark); // Output: undefined
console.log(user.hobbies); // Output: undefined
```

The real problem arises when the `address` itself is not defined:

```javascript
const userWithoutAddress = {
    name: 'Prakash'
};

console.log(userWithoutAddress.address.city); // Error: Cannot read property 'city' of undefined
```

## Optional Chaining
Optional chaining allows you to safely access nested properties. It uses the `?.` syntax to check if a property exists before trying to access it.

### Example with Nested Properties
Using optional chaining, you can safely access `city`:

```javascript
console.log(user?.address?.city); // Output: Mumbai
console.log(userWithoutAddress?.address?.city); // Output: undefined
console.log(userWithoutAddress.address);  // undefined 
console.log(userWithoutAddress.address.city); // Output: Because we are not using optional chaining we got the TypeError: Cannot read properties of undefined (reading 'city')

// Or to avoid error you can use conditional statements like if-else without using optional chaining

if(userWithoutAddress.address !== undefined){
    console.log(userWithoutAddress.address.city)
} else {
    console.log("Address not found")   // Address not found
}
```

### Example with Functions
Optional chaining also works with functions:

```javascript
const userWithFunction = {
    name: 'Prakash',
    getDisplayMessage: function() {
        console.log('Welcome, Prakash');
    }
};

userWithFunction?.getDisplayMessage?.(); // Output: Welcome, Prakash

const userWithoutFunction = {
    name: 'Prakash'
};

userWithoutFunction?.getDisplayMessage?.(); // No output, no error
```

## Practical Use Case
Optional chaining is especially useful when dealing with data from APIs where some properties may be optional:

```javascript
fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(data => {
        console.log(data?.address?.city);
    });
```

## Exercise
Try to implement optional chaining using square brackets for computed properties.

```javascript
const key = 'address';
console.log(user[key]?.city); // Output: Mumbai
```

## Summary
* **Optional Chaining**: Uses `?.` to safely access nested properties and methods.
* **Avoids Errors**: Prevents errors when properties do not exist.
* **Usage**: Useful for optional or nullable properties.

### Key Points
1. **Nested Properties**: Use `?.` to access nested properties safely.
2. **Functions**: Use `?.()` to call functions safely.
3. **Avoid Overuse**: Only use optional chaining when necessary.

---


# JavaScript Destructuring Object

Destructuring is an important and frequently used concept in JavaScript, especially when dealing with complex objects or arrays, such as those returned from API responses. It allows for the unpacking of values from arrays or properties from objects into distinct variables. Let's delve into the concept and see how it can be effectively used.

## Destructuring Objects

### Basic Destructuring
Consider an object with multiple properties:

```javascript
const obj = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    courses: ['JavaScript', 'React', 'Node.js']
};
```

To extract the `name`, `address`, and `courses` properties, you can use object destructuring:

```javascript
const { name, address, courses } = obj;
console.log(name); // Output: Prakash
console.log(address); // Output: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }
console.log(courses); // Output: ['JavaScript', 'React', 'Node.js']
```

### Nested Destructuring
To access nested properties directly:

```javascript
const { address: { city, state } } = obj;
console.log(city); // Output: Mumbai
console.log(state); // Output: Maharashtra
```

### Renaming Variables
You can rename the variables while destructuring:

```javascript
const { name: userName, address: { city: userCity } } = obj;
console.log(userName); // Output: Prakash
console.log(userCity); // Output: Mumbai
```

### Using Rest Operator
To gather remaining properties into a new object:

```javascript
const { name, ...rest } = obj;
console.log(name); // Output: Prakash
console.log(rest); // Output: { address: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }, courses: ['JavaScript', 'React', 'Node.js'] }
```

## Destructuring Arrays

### Basic Array Destructuring
For arrays, destructuring assigns values based on their position:

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

### Skipping Items
You can skip items using commas:

```javascript
const [first, , third] = numbers;
console.log(first); // Output: 1
console.log(third); // Output: 3
```

### Using Rest Operator
To gather remaining items into a new array:

```javascript
const [first, ...rest] = numbers;
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3]
```

## Practical Example with Nested Objects
Consider an API response with deeply nested objects:

```javascript
const employees = {
    engineers: {
        emp1: { id: 1, name: 'John Doe', occupation: 'Software Engineer' },
        emp2: { id: 2, name: 'Jane Smith', occupation: 'Data Scientist' }
    },
    placement: {
        emp3: { id: 3, name: 'Emily Jones', occupation: 'HR Manager' }
    },
    youtube: {
        emp4: { id: 4, name: 'Chris Brown', occupation: 'Content Creator' }
    }
};
```

To extract specific details, you can use nested destructuring:

```javascript
const { engineers: { emp2: { name: engineerName, occupation: engineerOccupation } } } = employees;
console.log(engineerName); // Output: Jane Smith
console.log(engineerOccupation); // Output: Data Scientist
```

## Destructuring with Dynamic Property Names
You can use computed property names when destructuring:

```javascript
const propName = 'engineers';
const { [propName]: engineers } = employees;
console.log(engineers); // Output: { emp1: { id: 1, name: 'John Doe', occupation: 'Software Engineer' }, emp2: { id: 2, name: 'Jane Smith', occupation: 'Data Scientist' } }
```

## Exercises
To practice, create an object with nested properties and try to extract specific values using destructuring. For example:
1. Create an object `company` with nested properties for different departments.
2. Extract specific employee details from each department.
3. Use renaming, rest operator, and nested destructuring to manipulate the object.


---


# JavaScript Object Methods: Keys, Values & Entries

JavaScript provides several methods that make it easier to work with objects. Three of the most useful methods are Object.entries(), Object.keys(), and Object.values(). These methods allow you to extract and manipulate the properties of an object in different ways.

## Example Object
Let's start with a simple object:

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};
```

## Object.entries()
The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs.

### Example
```javascript
const entries = Object.entries(obj);
console.log(entries);
// Output: [ [ 'name', 'Prakash' ], [ 'age', 99 ], [ 'city', 'Mumbai' ] ]
```

As you can see, Object.entries(obj) returns an array of arrays, where each inner array contains a key-value pair from the object.

## Object.keys()
The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

### Example
```javascript
const keys = Object.keys(obj);
console.log(keys);
// Output: [ 'name', 'age', 'city' ]
```

Object.keys(obj) returns an array containing the keys of the object.

## Object.values()
The Object.values() method returns an array of a given object's own enumerable property values, in the same order as provided by a for...in loop.

### Example
```javascript
const values = Object.values(obj);
console.log(values);
// Output: [ 'Prakash', 99, 'Mumbai' ]
```

Object.values(obj) returns an array containing the values of the object.

## Practical Use Cases

### Summing Values
Suppose you have an object with numerical values, and you want to find the sum of these values. Here's how you can do it:

```javascript
const obj = {
    x: 1,
    y: 2,
    z: 17
};

const values = Object.values(obj);
const sum = values.reduce((acc, val) => acc + val, 0);

console.log(sum); // Output: 20
```

### Checking for Property Existence
You can check if a property exists in an object using the in operator:

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

const isPropertyFound = 'name' in obj;
console.log(isPropertyFound); // Output: true

const isAgePropertyFound = 'age' in obj;
console.log(isAgePropertyFound); // Output: true

const isCountryPropertyFound = 'country' in obj;
console.log(isCountryPropertyFound); // Output: false
```

### Iterating Over an Object
You can use a for...in loop to iterate over the keys of an object:

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Output:
// name: Prakash
// age: 99
// city: Mumbai
```

## Summary
In this lesson, we've covered some of the most useful object methods in JavaScript:

- Object.entries(): Returns an array of [key, value] pairs.
- Object.keys(): Returns an array of the object's keys.
- Object.values(): Returns an array of the object's values.
- in operator: Checks if a property exists in an object.
- for...in loop: Iterates over the keys of an object.


---


# JavaScript 'this' Keyword

In this article, we're going to dive into how the this keyword works in JavaScript. Unlike some other programming languages, the this keyword in JavaScript can be a bit tricky because it behaves differently depending on the context in which it is used. Let's break it down.

## The this Keyword in Objects
The this keyword in JavaScript typically refers to the object that is executing the function. When a function is a property of an object (also called a method), this inside that function refers to the object itself.

### Example:
```javascript
const obj = {
    name: "Prakash",
    displayMessage: function() {
        console.log(this);
    }
};

obj.displayMessage(); // Logs the obj object
```

In this example, this inside the displayMessage function refers to the obj object. When you run the code, it logs the obj object to the console.

## Using this Inside Methods
If you want to access properties of the object within a method, you can use this:

```javascript
const obj = {
    name: "Prakash",
    displayMessage: function() {
        console.log("Hello, " + this.name);
    }
};

obj.displayMessage(); // Logs "Hello, Prakash"
```

Here, this.name refers to the name property of the obj object.

## this in Global Context
When this is used inside a regular function (not an object method), it usually refers to the global object, which is window in browsers.

### Example:
```javascript
function showThis() {
    console.log(this);
}

showThis(); // Logs the global object (window in browsers)
```

Even though showThis is a function, because it's not attached to any object, this refers to the global object.

## Arrow Functions and this
Arrow functions are special because they don't have their own this. Instead, they inherit this from the surrounding scope.

### Example:
```javascript
const obj = {
    name: "Prakash",
    displayMessage: () => {
        console.log(this.name);
    }
};

obj.displayMessage(); // Logs undefined
```

In this example, this.name is undefined because this in an arrow function refers to the surrounding (global) scope, not the obj object.

### Regular Functions vs. Arrow Functions
- Regular Functions: this refers to the object that calls the method.
- Arrow Functions: this is inherited from the surrounding scope.

## this Inside Nested Functions
Sometimes, you might encounter nested functions. If you use this inside a nested function, it won't refer to the outer function's this by default. Instead, it will refer to the global object.

### Example:
```javascript
const obj = {
    name: "Prakash",
    showName: function() {
        function display() {
            console.log(this.name);
        }
        display();
    }
};

obj.showName(); // Logs undefined
```

In this case, this inside the display function refers to the global object, not obj.

## Solution: Using self or that
A common workaround is to store this in a variable (often named self or that) that the inner function can access:

```javascript
const obj = {
    name: "Prakash",
    showName: function() {
        const self = this;
        function display() {
            console.log(self.name);
        }
        display();
    }
};

obj.showName(); // Logs "Prakash"
```

Here, self refers to obj, so self.name correctly logs "Prakash".

## Summary
- In Methods: this refers to the object executing the method.
- In Regular Functions: this refers to the global object (window in browsers).
- In Arrow Functions: this is inherited from the surrounding scope.
- In Nested Functions: this can refer to the global object unless explicitly bound to the outer context using self.


---


# Constructor " New "

In this Article, we'll explore the concept of constructor functions and the `new` keyword in JavaScript. Constructor functions are essentially regular functions, but with two key differences:

- They are named with a capital letter.
- They can only be executed using the `new` keyword.

## Creating a Constructor Function

Let's start by defining a constructor function:

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}
```

## Using the new Keyword

To create an instance of the `User` constructor function, you use the `new` keyword. This keyword ensures that a new object is created and that the function is executed with its `this` keyword set to that new object.

```js
const user1 = new User('Prakash', 101);
console.log(user1); // Output: User { name: 'Prakash', age: 101 }
```

Without the `new` keyword, the function would not create a new object, and the `this` keyword would refer to the global object (or be undefined in strict mode). Using `new` ensures that `this` refers to the newly created object.

## Adding Properties with `this`

In the constructor function, properties are added to the object being created using the `this` keyword:

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User('Prakash', 101);
const user2 = new User('Ashish', 25);

console.log(user1.name); // Output: Prakash
console.log(user2.age);  // Output: 25
```

### Output

```
Prakash
25
```

```js
const user1 = new User('Prakash', 101);
const user2 = new User('Ashish', 25);
const user3 = new User('Ria', 99);
const user4 = new User('Sagar', 100);

console.log(user1); // Output: User { name: 'Prakash', age: 101 }
console.log(user2); // Output: User { name: 'Ashish', age: 25 }
console.log(user3); // Output: User { name: 'Ria', age: 99 }
console.log(user4); // Output: User { name: 'Sagar', age: 100 }
```

## Creating Multiple Objects 

You can use the constructor function to create multiple objects efficiently:

```js
const user1 = new User('Prakash', 101);
const user2 = new User('Ashish', 25);
const user3 = new User('Ria', 99);
const user4 = new User('Sagar', 100);

console.log(user1); // Output: User { name: 'Prakash', age: 101 }
console.log(user2); // Output: User { name: 'Ashish', age: 25 }
console.log(user3); // Output: User { name: 'Ria', age: 99 }
console.log(user4); // Output: User { name: 'Sagar', age: 100 }
```

### Output:

```
User { name: 'Prakash', age: 27 }
User { name: 'Ashish', age: 25 }
User { name: 'Sadaf', age: 25 }
User { name: 'Rohan', age: 28 }
```

## The `this` Keyword in Constructor Functions

The `this` keyword inside a constructor function refers to the newly created object. This is why we use `this` to assign properties to the object.

### Example

Let's log the value of `this` inside the constructor function to see what it refers to:

```js
function User(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

const user1 = new User('Prakash', 101);
// Output: User { name: 'Prakash', age: 101 }
```

As you can see, `this` refers to the new object created by the `new` keyword.

## Summary

- **Constructor Functions**: Special functions used to create and initialize objects.
- **new Keyword**: Creates a new object and sets the `this` keyword in the constructor function to that new object.
- **Adding Properties**: Use the `this` keyword to add properties to the object within the constructor function.

By using constructor functions and the `new` keyword, you can efficiently create multiple objects with similar properties and methods, making your code more modular and maintainable.

---

# Function Borrowing - `call` and `apply`

In this Article, we'll discuss the concept of function borrowing in JavaScript using the `call` and `apply` methods. Function borrowing allows one object to borrow methods from another object without making a copy of that method. This is particularly useful to avoid code repetition and make the code more modular and maintainable.

## Understanding Function Borrowing

Suppose we have three objects representing users, each with a `name` and `age` property, and a `sayHi` method to display their name. Instead of defining the `sayHi` method for each object, we can define it once and let the objects borrow this method.

### Initial Setup

```js
const user1 = {
    name: 'Prakash',
    age: 25,
};

const user2 = {
    name: 'Ashish',
    age: 30,
};

const user3 = {
    name: 'Suresh',
    age: 35,
};

function sayHi() {
    console.log(this.name);
}
```

Now, let's say we want to borrow the `greet` method from `person1` and use it on `person2`. We can do this using the `call()` or `apply()` methods.

## Using `Call`

The `call` method allows us to borrow a function and execute it with a specified `this` value and arguments. Here's how it works:

```js
sayHi.call(user1); // Output: Prakash
sayHi.call(user2); // Output: Ashish
sayHi.call(user3); // Output: Suresh
```

The `call` method immediately invokes the function with the `this` value set to the specified object.

## Using `Apply`

The `apply` method works similarly to `call`, but it takes an array of arguments instead of individual arguments. This can be particularly useful when you have an array of arguments to pass.

```js
function introduce(degree, year) {
    console.log(`${this.name}, Degree: ${degree}, Year: ${year}`);
}

introduce.apply(user1, ['B.Tech ECE', 2015]); // Output: Prakash, Degree: B.Tech ECE, Year: 2015
introduce.apply(user2, ['B.Tech CS', 2018]); // Output: Ashish, Degree: B.Tech CS, Year: 2018
```

## Example of Function Borrowing

```js
function sayHi() {
    console.log(`Hi, my name is ${this.name}.`);
}

// Borrowing the sayHi function
sayHi.call(user1); // Output: Hi, my name is Prakash.
sayHi.call(user2); // Output: Hi, my name is Ashish.
sayHi.call(user3); // Output: Hi, my name is Suresh.
```

## Summary

- **Call**: Immediately invokes the function with a specified `this` value and arguments.
- **Apply**: Immediately invokes the function with a specified `this` value and arguments passed as an array.

---

# Function Borrowing - `bind`

In this article, we'll discuss the concept of function borrowing in JavaScript using the `bind` method. Function borrowing allows one object to borrow methods from another object without making a copy of that method. This is particularly useful to avoid code repetition and make the code more modular and maintainable.

## Understanding Function Borrowing with `bind`

Suppose we have three objects representing users, each with a `name` and `age` property. We want each object to have access to a `sayHi` method to display their name. Instead of defining the `sayHi` method for each object, we can define it once and let the objects borrow this method using `bind`.

## Initial Setup

First, let's define our user objects and the `sayHi` function:

```js
const user1 = {
    name: 'Prakash',
    age: 25,
};

const user2 = {
    name: 'Ashish',
    age: 30,
};

const user3 = {
    name: 'Ria',
    age: 22,
};

function sayHi() {
    console.log(`Hi, my name is ${this.name}.`);
}
```

## Using `bind`

The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value. Unlike `call` and `apply`, `bind` does not immediately invoke the function. Instead, it returns a new function that can be invoked later.

Here's how you can use `bind` to borrow the `sayHi` function for each user:

```js
const boundSayHiUser1 = sayHi.bind(user1);
const boundSayHiUser2 = sayHi.bind(user2);
const boundSayHiUser3 = sayHi.bind(user3);

boundSayHiUser1(); // Output: Hi, my name is Prakash.
boundSayHiUser2(); // Output: Hi, my name is Ashish.
boundSayHiUser3(); // Output: Hi, my name is Ria.
```

## Passing Arguments with `bind`

The `bind` method can also be used to partially apply arguments to the function. This is useful if your function takes additional parameters.

Let's modify our `sayHi` function to take additional parameters and use `bind` to pass these arguments:

```js
function introduce(degree, year) {
    console.log(`${this.name}, Degree: ${degree}, Year: ${year}`);
}

const boundIntroduceUser1 = introduce.bind(user1, 'B.Tech ECE', 2015);
const boundIntroduceUser2 = introduce.bind(user2, 'B.Tech CS', 2018);
const boundIntroduceUser3 = introduce.bind(user3, 'B.Tech CS', 2022);

boundIntroduceUser1(); // Output: Prakash, Degree: B.Tech ECE, Year: 2015
boundIntroduceUser2(); // Output: Ashish, Degree: B.Tech CS, Year: 2018
boundIntroduceUser3(); // Output: Ria, Degree: B.Tech CS, Year: 2022
```

## Flexibility with `bind`

The flexibility of `bind` allows us to create reusable and modular code. It can also be used in event handlers and other scenarios where the function needs to be invoked later.

Here's an example of using `bind` in an event handler:

```js
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', boundSayHiUser1);
```

In this example, the `boundSayHiUser1` function will be invoked when the button is clicked, and it will have its `this` keyword set to `user1`.

## Summary

- **`bind`**: Creates a new function that can be invoked later, with the `this` value permanently set to the specified object.
- **Function Borrowing**: Allows one object to use a method defined in another object.
- **Partial Application**: `bind` can be used to partially apply arguments to a function, creating a new function with pre-set arguments.

By using `bind`, we can keep our code clean, modular, and maintainable while avoiding code repetition.


