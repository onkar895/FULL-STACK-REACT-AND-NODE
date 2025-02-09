// substring()

// The `substring` method in JavaScript is incredibly useful for extracting parts of a string. It allows you to specify a start and end index to extract a portion of the string. 

// - `start`: The index where to start the extraction. The first character's index is `0`.
// - `end` (optional): The index before which to end the extraction. The character at this index will not be included.

// Example 1:
var string = "geeksforgeeks";
a = string.substring(0, 4);
b = string.substring(1, 6);
c = string.substring(5);
d = string.substring(0);

// Printing new strings which are
// parts of the given string
console.log(a); // Output: "geek"
console.log(b); // Output: "eeksf"
console.log(c); // Output: "forgeeks"
console.log(d); // Output: "geeksforgeeks"

// Example 2: 
// Index always starts with `0`. If a negative index is provided, it will be considered as `0`. If the index is fractional, it will be converted into its lower whole number.

var str = "geeksforgeeks";
a = str.substring(-1);
b = str.substring(2.5);
c = str.substring(3.9);

// Printing new strings
console.log(a); // Output: "geeksforgeeks"
console.log(b); // Output: "eksforgeeks"
console.log(c); // Output: "ksforgeeks"


// Example 3: Truncating Long Names
// Let's consider a practical scenario where you need to display a username on a card, but if the username is too long, you want to truncate it and add ellipses (`...`).

const username = "onkarshashikant karale";
const maxLength = 10;
let displayName = username;

if (username.length > maxLength) {
    displayName = username.substring(0, maxLength) + "...";
}

console.log(displayName); // Output: "onkarshash..."