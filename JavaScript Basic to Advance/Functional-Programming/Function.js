// Calculate the some of numbers from 1 to 10 using function
let sum = 0

// Declaration of the function
function calculate (min, max) {
  for (let i = min; i <= max; i++) {
    sum += i
  }
  console.log(`The sum of numbers from ${min} to ${max} is ${sum}`)
}

// Calling the function
calculate(1, 10)

// Anonymous Function and Function Expression:

let anonymousFunction = function () {
  console.log('Hello from GeeksforGeeks!')
}

anonymousFunction() // Output: Hello from GeeksforGeeks!

console.log('-------------------------------------------')

greet(); // Error: Cannot access 'greet' before initialization

let greet = function () {
  console.log('Hello from GeeksforGeeks!')
}

// Named Function Expressions

let greet1 = function greetMessage () {
  console.log('Hello from GeeksforGeeks!')
}

greet1(); // Output: Hello from GeeksforGeeks!

//  Trying to call the function by its name outside of its scope will result in an error because this name is local to the function's scope
greetMessage(); // Error: greetMessage is not defined
