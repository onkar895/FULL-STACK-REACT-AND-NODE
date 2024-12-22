/**!SECTION
 * 
 * Given a Binary Number b, find its decimal equivalent.

Examples:

Input: b = 10001000
Output: 136
 * 
 */

function binary_to_decimal (str) {
  // Using parseInt with base 2 (binary)
  // This is the most efficient way to convert binary string to decimal
  return parseInt(str, 2)
}

let str = '10001000'
console.log(binary_to_decimal(str))

console.log('\n')

// Alternative manual solution:
function binary_to_decimal (str1) {
  let decimal = 0
  let power = 0

  // Loop from right to left
  for (let i = str1.length - 1; i >= 0; i--) {
    // If current digit is 1, add 2^power to result
    if (str1[i] === '1') {
      decimal += Math.pow(2, power)
    }
    power++
  }
  return decimal
}

let str1 = '1000100'
console.log(binary_to_decimal(str1))
