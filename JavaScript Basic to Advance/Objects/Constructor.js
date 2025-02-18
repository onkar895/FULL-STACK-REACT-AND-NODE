// New keyword and constructor function

// Constructor functions are essentially regular functions, but with two key differences:

// - They are named with a capital letter first. Start with the Capital Letter.
// - They should be executed only using the `new` keyword.

// Creating a Constructor Function:
// To add properties to the object within the constructor function, we always use this keyword.
function User(name, age) {
    this.name = name;   // 
    this.age = age;
}

// The `this` keyword inside a constructor function refers to the newly created object. This is why we use `this` to assign properties to the object.

// To create an instance of the `User` constructor function, you use the `new` keyword. This keyword ensures that a new object is created and that the function is executed with its `this` keyword set to that new object.
// Without the `new` keyword, the function would not create a new object, and the `this` keyword would refer to the global object (or be undefined in strict mode). Using `new` ensures that `this` refers to the newly created object.

const user1 = new User('Prakash', 101);  // creating a new object using new keyword
const user2 = new User('Ashish', 25);  // creating a new object using new keyword
console.log(user1); // Output: User { name: 'Prakash', age: 101 }
console.log(user1.name)
console.log(user2)
console.log(user2.age)
