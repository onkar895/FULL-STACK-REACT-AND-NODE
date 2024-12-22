/**!SECTION
* Given a string s, and a pattern p. You need to find if p exists in s or not and return the starting index of p in s. If p does not exist in s then -1 will be returned.
Here p and s both are case-sensitive.
Example 1:

Input:
s = "Hello"
p = "llo"
Output: 
2
Explanation: llo starts from the second index in Hello.
*/

function findPattern (s, p) {
  // code here
  return s.indexOf(p)
}

console.log(findPattern('Hello', 'llo'))
