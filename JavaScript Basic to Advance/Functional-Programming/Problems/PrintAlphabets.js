/**!SECTION
 * Given two char c1 and c2.  you need to print all the alphabet starting from c1 to c2, separated by space, in a single line.

Example 1:

Input:
c1 = 'a'
c2 = 'z'
Output: 
a b c d e f g h i j k l m n o p q r s t u v w x y z
Explanation:  Printed alphabets from a to z.
 */

function alphabets (c1, c2) {

  // charCodeAt(0) converts a character to its ASCII value
  // For example: 'a' becomes 97, 'z' becomes 122

  let start = c1.charCodeAt(0)
  let end = c2.charCodeAt(0)

  let result = ''

  // Loop through the range from start to end (inclusive)
  for (let i = start; i <= end; i++) {
    // Print the character
    result += String.fromCharCode(i) //  String.fromCharCode(i) converts ASCII value back to a character

    if (i < end) {
      result += ' '
    }
  }
  process.stdout.write(result) // Prints the final string without adding a newline
}

alphabets('a', 'z')
