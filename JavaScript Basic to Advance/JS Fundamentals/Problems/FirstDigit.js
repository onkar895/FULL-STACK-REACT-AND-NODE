/**!SECTION
 * Given a number n, find the first digit of the number.

Examples:
Input: n = 123
Output: 1
 */

function firstDigit (n) {
  let result = n.toString()[0]
  return result
}

let output = firstDigit(123)
console.log(`The first digit of number 123 is ${output}`)
