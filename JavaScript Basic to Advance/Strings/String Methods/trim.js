// trim()

// What is the trim Method?
// The `trim` method removes whitespace from both ends of a string. Whitespace in this context includes spaces, tabs, and any line break characters.

// Example 1:
function func() {
  var str = "  GeeksforGeeks      ";
  var st = str.trim();
  console.log(st);
}
func();


// Example 2: Cleaning User Input
// Consider a scenario where you want to get the first six characters of a user's name, but the input might have leading or trailing spaces.

let userInput = "    Hola, I love GFG    ";
console.log("Original length:", userInput.length); // Output: 25

let cleanedInput = userInput.trim();
console.log("Trimmed length:", cleanedInput.length); // Output: 17
console.log("Trimmed input:", cleanedInput); // Output: "Hola, I love GFG"

let firstSixChars = cleanedInput.substring(0, 6);
console.log("First 6 characters:", firstSixChars); // Output: "Hola, "