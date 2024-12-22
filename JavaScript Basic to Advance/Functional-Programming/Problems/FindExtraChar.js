/**!SECTION
 * 
 * Given two strings s1 and s2 which are of lengths n and n+1. The second string contains all the character of the first string, but there is one extra character. Your task to find the extra character in the second string and return it. 

Examples:

Input: s1 = abcd, s2 = badce
Output: e
Input: s1 = efg, s2 = gtfe
Output: t
 * 
 */

function extraChar (s1, s2) {
  // write your code here

  let result = 0

  for (let char of s1 + s2) {

    result ^= char.charCodeAt(0)
  }

  return String.fromCharCode(result)
}

console.log(extraChar('abcd', 'badce'))

// Method 2:

function extraChar (s1, s2) {
  let result1 = (s1.toLowerCase().split('').sort())
  let result2 = (s2.toLowerCase().split('').sort())

  for (let i = 0; i <= s2.length; i++) {
    if (result1[i] !== result2[i]) {
      return result2[i]
    }
  }
}

console.log(extraChar('abcd', 'badce'))

