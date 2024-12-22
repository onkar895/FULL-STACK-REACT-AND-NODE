/**!SECTION
 * 
 * Given a positive integer, n. Find the factorial of n.
 * 
 * Example:

    Input: n = 5
    Output: 120
    Explanation: 5*4*3*2*1 = 120
 * 
 */

function factorial (n) {
  let fact = 1

  for (let i = n; i >= 1; i--) {
    fact *= i
  }

  return fact
}

console.log(factorial(5))
