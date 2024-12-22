/**ANCHOR - 
 * Given an integer s, write a program to print a square wall of size s without using string multiplication. Use nested loops instead. The * character will make up the wall.
 *   
 *   * * * * *
 *   * * * * *
 *   * * * * *
 *   * * * * *
 *   * * * * *
 * 
 */

function squareWall (num) {
  // code here

  let star = '* '

  for (let i = 1; i <= num; i++) {
    let row = ''
    for (let j = 1; j <= num; j++) {
      row += star
    }
    console.log(row)
  }
}

squareWall(5)

console.log('\n')

console.log('By using Repeat Method :')

let number = 5

for (let i = 1; i <= number; i++) {
  console.log('* '.repeat(number))
}

console.log('\n')

/** SECTION
 *   
 *   * 
 *   * *
 *   * * * 
 *   * * * *
 *   * * * * *
 * 
 */

let res = '* '
let num = 5
for (let i = 1; i <= num; i++) {
  let row = ''
  for (let j = 1; j <= i; j++) {
    row += res
  }
  console.log(row)
}

console.log('\n')

console.log('By using Repeat Method :')
// By Using Repeat Method
let output = '* '
for (let i = 1; i <= num; i++) {
  console.log(output.repeat(i))
}

console.log('\n')

/** SECTION
 *          
 *            * 
 *          * * 
 *        * * * 
 *      * * * *
 *    * * * * *
 * 
 */

let result = '* '

for (let i = 1; i <= num; i++) {
  let row = ''
  let spaces = '  '.repeat(num - i)
  for (let j = 1; j <= i; j++) {
    row += result
  }
  console.log(spaces + row)
}

console.log('\n')

console.log('By using Repeat Method :')
// Using Repeat Method
for (let i = 1; i <= num; i++) {
  console.log('  '.repeat(num - i) + '* '.repeat(i))
}

console.log('\n')

/**!SECTION
 *   
 *   * 
 *   * *
 *   * * * 
 *   * * * *
 *   * * * * *
 *   * * * *
 *   * * *
 *   * * 
 *   * 
 * 
 */

// By Using Repeat Method
let res1 = '* '
for (let i = 1; i <= num; i++) {
  console.log(res1.repeat(i))
}
let res2 = '* '
for (let i = num - 1; i >= 1; i--) {
  console.log(res2.repeat(i))
}

console.log('\n')

// First set of patterns (increasing and decreasing with spaces)
for (let i = 1; i <= num; i++) {
  console.log('  '.repeat(num - i) + '* '.repeat(i))
}
for (let i = num - 1; i >= 1; i--) {
  console.log('  '.repeat(num - i) + '* '.repeat(i))
}

console.log('\n')
