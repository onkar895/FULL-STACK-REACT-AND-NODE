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
