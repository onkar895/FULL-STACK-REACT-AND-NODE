// Return and Undefined :

function calculateSum () {
  let sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += i
  }
  return sum // Just returned back to the point where the function called.
// So, the value of sum (55) is returned...
}

// ...and gets assigned to result here (where the function was invoked)
let result = calculateSum()
console.log(result)

// 2. More Explicit Example
function add (a, b) {
  let sum = a + b
  return sum
// ↑ The calculated sum is returned...
}

let x = 5
let y = 3
let answer = add(x, y)
// ↑ ...and gets stored in answer here (where add() was invoked)
console.log(answer) // 8

// 3. Direct Usage Example
console.log(add(10, 20))
// ↑ The returned value (30) is directly passed to console.log
