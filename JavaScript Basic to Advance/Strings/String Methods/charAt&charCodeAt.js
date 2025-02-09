/**
 * String Methods
 * charAt | charCodeAt
 * 
 * 
 */

// Finding the Length of a String
// The length property returns the length of a string.
const message = "I am a mentor at GeeksforGeeks";
console.log(message.length); // Output: 30

// Example 1:
// Finding a Character at a Specific Index
// The charAt method returns the character at a specified index.
const index = 5;
const char = message.charAt(index)
console.log(char); // Output: a

// Example 2:
// Finding the ASCII Code of a Character
const asciiCode = message.charCodeAt(index);
console.log(`The ascii code of ${char} is ${asciiCode}`); // Output: 97