// The `includes` method in JavaScript is a powerful tool for checking whether a given substring or character exists within a string. Unlike the `indexOf` method, which also serves a similar purpose, `includes` directly returns a Boolean value (`true` or `false`), making it more straightforward for conditional checks.

// Example 1: Basic Usage
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("Geeks");
if(check){
    console.log("present");
} else {
    console.log("not present");
}

// Example 2: Case Sensitivity
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("geeks");
console.log(check);

// Example 3: Using Start Index
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o", 18);
console.log(check);

// Example 4: Checking for Vowels
const displayMessage = "I love to code in light mode.";
const vowels = "aeiouAEIOU";

for (let character of displayMessage) {
    if (vowels.includes(character)) {
        console.log(`${character} is a vowel`);
    }
}