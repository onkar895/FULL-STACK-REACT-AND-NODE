// Iterating Over a String:
// When iterating over a string, you often need to perform tasks such as searching for a character, counting occurrences, or manipulating individual characters.

let displayMessage = "I'm a frontend developer"

// Example 1: Printing Each Character
for(let char of displayMessage) {
  console.log(char)
}

// Example 2: Breaking the Loop on a Specific Character
for (let i = 0; i < message.length; i++) {
  if (message[i] === 'n') {
      break;
  }
  console.log(message[i]);
}

// Example 3: Counting Occurrences of a Character
let count = 0
for(let char of displayMessage) {
  if(char === "e") {
    count++
  }
}

console.log( `e is repeated ${count} times`)


// count the every character in string
let charCount = {}; // Empty object to store counts

for (let char of displayMessage) {  
  // If character is already in charCount, increase count
  if (charCount[char]) {
    charCount[char]++;  
  } 
  // If character is not in charCount, set count to 1
  else {
    charCount[char] = 1;  
  }
}

console.log(charCount);