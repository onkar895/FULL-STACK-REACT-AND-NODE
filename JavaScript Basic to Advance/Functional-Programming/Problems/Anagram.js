/**!SECTION
 * 
 * Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

Note: You can assume both the strings s1 & s2 are non-empty.

Examples :

Input: s1 = "geeks", s2 = "kseeg"
Output: true
Explanation: Both the string have same characters with same frequency. So, they are anagrams.
 * 
 */

function areAnagrams (s1, s2) {
  if (s1.length !== s2.length) return false

  let freqMap = new Array(26).fill(0)

  for (let i = 0; i < s1.length; i++) {
    freqMap[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
    freqMap[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
  }

  for (let i = 0; i < 26; i++) {
    if (freqMap[i] !== 0) {
      return false
    }
  }

  return true
}

console.log(areAnagrams('geeks', 'kseeg'))

// Simpler method using Inbuild functions

function anagram (s1, s2) {
  let result = (s1.split('').sort().join('').toLowerCase() === s2.split('').sort().join('').toLowerCase())
  return result
}

console.log(anagram('onkar', 'kraon'))
