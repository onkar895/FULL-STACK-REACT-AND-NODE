// 1. Star Patterns :

// *
// * *
// * * *
// * * * *
// * * * * *

// Using Repeat method
let star = '* '
for (let i = 1; i <= 5; i++) {
  console.log(star.repeat(i))
}

console.log('------------------')
// Using Two For loop

let star1 = '* '
for (let i = 1; i <= 5; i++) {
  let row = ''
  for (let j = 1; j <= i; j++) {
    row += star1
  }
  console.log(row)
}

console.log('------------------')
// Normal and reverse star
let star2 = '* '
for (let i = 1; i <= 5; i++) {
  console.log(star2.repeat(i))
}
let star3 = '* '
for (let i = 4; i >= 1; i--) {
  console.log(star3.repeat(i))
}

console.log('------------------')
// 2. Find the count of the string without using length mehtod:

let myName = 'Omkar Shashikant Karale'

// const count = 0
// If I Use const here then it will give me the typeError because we can't change the value of constant.
let count = 0

for (let i = 0; i < myName.length; i++) {
  count++
}
console.log(`Number of characters in the string is ${count}`)

console.log('------------------')
// 3. Given an range of numbers form 1 to 121, find all the even and odd numbers

for (let i = 1; i <= 121; i++) {
  let isEven = i % 2
  if (isEven === 0) {
    console.log(`The number ${i} is an Even Number`)
  } else {
    console.log(`The number ${i} is an Odd Number`)
  }
}

console.log('------------------')
// 4. Find the vowels in the given string

const mName = 'omkar shashikant karale'

let vowels = 'aeiou'

for (let i = 0; i < mName.length; i++) {
  if (vowels.includes(mName[i])) {
    console.log(`${mName[i]} is a vowel`)
  } else {
    console.log(`${mName[i]} is not a vowel`)
  }
}

console.log('------------------')
// For Of Loop
for (let str of mName) {
  if (vowels.includes(str)) {
    console.log(`${str} is a vowel`)
  } else {
    console.log(`${str} is not a vowel`)
  }
}
