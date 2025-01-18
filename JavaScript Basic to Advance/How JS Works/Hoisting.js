// Example of Variable and Function Hoisting:->
// Let's consider the following code:

var age = 100

console.log(age); // Outputs: 100
function showName () {
  console.log('My name is Prakash Sakari')
}
showName(); // Outputs: My name is Prakash Sakari
// Here, age is declared and initialized to 100, and showName is a function that logs a message to the console.

// Hoisting with Function Declarations:->
// Even if we invoke the function before its declaration, it still works due to hoisting:

showName(); // Outputs: My name is Prakash Sakari

function showName () {
  console.log('My name is Prakash Sakari')
}

// Hoisting with Variable Declarations:->
// Now, let's see what happens with variable declarations:

console.log(age); // Outputs: undefined
var age = 100
console.log(age); // Outputs: 100

// When we try to log age before its declaration, we get undefined. This is because the variable declaration is hoisted, but its initialization is not. This is different from languages that throw an error when accessing a variable before its declaration.

// Function Expression Hoisting:->
// Function expressions behave differently compared to function declarations:

console.log(getUserName); // Outputs: undefined
var getUserName = function () {
  console.log('My name is Prakash Sakari')
}
console.log(getUserName); // Outputs: function() { console.log("My name is Prakash Sakari"); }

// In this example, getUserName is treated as a variable. During the hoisting process, it is initialized to undefined first, and later assigned the function.
