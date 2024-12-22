/**!SECTION
 * Given a number n find the prime factorization of the number.

Examples:

Input: n = 100
Output: 2 2 5 5
Explanation: 100 = 2 * 2 * 5 * 5

Input: n = 27
Output: 3 3 3
Explanation: 27 = 3 * 3 * 3 
 */

function printPrimeFactorization (n) {
  // write your code here
  let factors = []

  while(n % 2 === 0){
    factors.push(2)
    n = n / 2
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while(n % i === 0){
      factors.push(i)
      n = n / i
    }
  }

  if (n > 1) {
    factors.push(n)
  }

  console.log(factors.join(' '))
}

printPrimeFactorization(100)
