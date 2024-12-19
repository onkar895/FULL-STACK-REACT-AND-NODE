// 1. Numbers from 1 to 10

let i = 1

while (i <= 10) {
  console.log(i)
  i++
}

console.log('---------------')

// using do-while loop

let n1 = 1
do {
  console.log(n1)
  n1++
} while (n1 <= 10)

console.log('---------------')

// 2. Find the count of the string without using length mehtod:

let myName = 'Omkar Shashikant Karale'

let count = 0
let n = 0

while (n < myName.length) {
  count++
  n++
}
console.log(count)

// user enters a number, if the number is greater than 50 then ask the user to enter the number less than 50 again

// readline-sync is a Node.js module that allows you to perform synchronous input/output operations directly in the terminal or command line. 
let readlineSync = require('readline-sync')

let number = readlineSync.question('Enter a Number less than 50: ')

if (number > 50) {
  number = readlineSync.question('Enter the number less than 50 again: ')
}
console.log(`${number} is Accepted`)

console.log('---------------')

// using while loop

let num = 500

while (num >= 50) {
  num = readlineSync.question('Enter the number less than 50 : ')
}
console.log(`${num} is Accepted`)
