// Array Includes Method:

// Syntax:
// array.includes(searchElement, start)

const Input = [1, 2, 3, 4, 5]
console.log(Input.includes(2))   // true
console.log(Input.includes(9))   // false

// Sort Method :

const fruits = ["apple", "cherry", "banana", "orange"]
console.log(fruits.sort())

var arr = [2, 5, 8, 1, 4]
console.log(arr.sort());
console.log(arr);

let numbers = [20,5.2,-120,100,30,0];

function compare(a,b){
  return a-b;
}
console.log(numbers.sort(compare));