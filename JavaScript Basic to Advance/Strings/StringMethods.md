# JavaScript Iterating Over String & String Methods:

## Iterating Over a String:

**`When iterating over a string, you often need to perform tasks such as searching for a character, counting occurrences, or manipulating individual characters.`**

### Example 1: Printing Each Character
```js
let message = "I am learning JavaScript";

// Iterate over each character in the string
for (let i = 0; i < message.length; i++) {
    console.log(message[i]);
}
```

### Example 2: Breaking the Loop on a Specific Character
```js
for (let i = 0; i < message.length; i++) {
    if (message[i] === 'n') {
        break;
    }
    console.log(message[i]);
}
```

### Example 3: Counting Occurrences of a Character
```js
let count = 0;

for (let i = 0; i < message.length; i++) {
    if (message[i] === 'a') {
        count++;
    }
}

console.log("The character 'a' appears " + count + " times.");
```

### Example 4: Using Index to Print Specific Characters
```js
console.log(message[1]); // Prints ' '
console.log(message[2]); // Prints 'a'
console.log(message[3]); // Prints 'm'
```

### Example 5: Using for...of Loop to Print Each Character
```js
for (let char of message) {
    console.log(char);
}
```

### Practical Use Cases

#### Use Case 1: Finding the Index of a Character
```js
for (let i = 0; i < message.length; i++) {
    if (message[i] === 'a') {
        console.log("Index of 'a': " + i);
    }
}
```

#### Use Case 2: Filtering Vowels
```js
let vowels = '';
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

for (let char of message) {
    if (vowelSet.has(char)) {
        vowels += char;
    }
}

console.log(vowels);
```

---

## JavaScript String Methods:

### Finding the Length of a String
```js
let message = "I am a mentor at GeeksforGeeks";
console.log(message.length); // Output: 30
```

### Finding a Character at a Specific Index
**`The charAt method returns the character at a specified index.`**

```js
let index = 5;
console.log(message.charAt(index)); // Output: a
```

### Finding the ASCII Code of a Character
**`The charCodeAt method returns the ASCII code of the character at a specified index.`**

```js
console.log(message.charCodeAt(index)); // Output: 97
```


### Example 1: Using `charAt()`
```js
function func() {
    var str = 'JavaScript is object oriented language';
    // str.charAt() Returns character at given index of string.
    var value = str.charAt(0);
    var value1 = str.charAt(4);
    console.log(value); 
    console.log(value1);
}
func();
```

### Example 2: Handling Out-of-Bounds Index
```js
function func() {
    var str = 'JavaScript is object oriented language';
    var value = str.charAt(50);
    console.log("Char at index 50 is: " + value);
}
func();
```

### Example: Using `charCodeAt()`
```js
function func() {
    var str = 'ephemeral';
    var value = str.charCodeAt(4);
    console.log(value);    
}
func();
```

### Handling Out-of-Bounds Index
```js
function func() {
    var str = 'ephemeral';
    var value = str.charCodeAt(20);
    console.log(value); // NaN
}
func();
```

---

## JavaScript String Method - `indexOf()`

- The indexOf method returns the index within the calling string of the first occurrence of the specified value, starting the search at fromIndex. It returns -1 if the value is not found.

- str.indexOf() function finds the index of the first occurrence of the argument string in the given string. The value returned is 0-based. The syntax of the function is as follows: 
str.indexOf(searchValue , index)

### Understanding `indexOf()`
```js
let str = 'Departed Train';
console.log(str.indexOf('Train')); // Output: 9
```

### Example: Searching a Substring
```js
function func() {
    var str = 'Departed Train';
    var index = str.indexOf('ed Tr');
    console.log(index);  // Output: 6
}
func();
```

### Example: Handling Not Found Case
```js
function func() {
    var str = 'Departed Train';
    var index = str.indexOf('train');
    console.log(index);  // Output: -1
}
func();



### includes() Method:

The `includes` method in JavaScript is used to check whether a given substring or character exists within a string. Unlike the `indexOf` method, which also serves a similar purpose, `includes` directly returns a Boolean value (`true` or `false`), making it more straightforward for conditional checks.

### Syntax:
```js
string.includes(searchValue, start)
```

- **searchValue**: The substring to search for.
- **start** *(optional)*: The position from where the search begins. If not provided, the search starts from the beginning.

### Example 1: Basic Usage
```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("Geeks");
if(check){
    console.log("present");
} else {
    console.log("not present");
}
```
**Output:**
```
present
```

### Example 2: Case Sensitivity
```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("geeks");
console.log(check);
```
**Output:**
```
false
```

### Example 3: Using Start Index
```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o", 18);
console.log(check);
```
**Output:**
```
false
```

### Exceptions:
- If the start index is greater than or equal to the string length, it returns `false`.
- If the start index is negative, the entire string is searched.

### Practical Applications:
#### Checking for Vowels
```js
const displayMessage = "I love to code in light mode.";
const vowels = "aeiouAEIOU";

for (let character of displayMessage) {
    if (vowels.includes(character)) {
        console.log(`${character} is a vowel`);
    }
}
```

---

## JavaScript String Method - `toUpperCase()` and `toLowerCase()`

**`The toLowerCase method converts all characters in a string to lowercase.`**
**`The toUpperCase() method converts the entire string to Upper case. This method does not affect any of the special characters, digits, and the alphabets that are already in the upper case. `**

### `toUpperCase()` Method
```js
function func() {
    var str = 'geeksforgeeks';
    var string = str.toUpperCase();
    console.log(string);
}
func();
```
**Output:**
```
GEEKSFORGEEKS
```

### `toLowerCase()` Method
```js
function func() {
    var str = 'GEEKSFORGEEKS';
    var string = str.toLowerCase();
    console.log(string);
}
func();
```
**Output:**
```
geeksforgeeks
```

Both methods convert characters without affecting special characters or digits.

---

# JS String Method - substring()

The `substring` method in JavaScript is incredibly useful for extracting parts of a string. It allows you to specify a start and end index to extract a portion of the string. 

## What is the substring Method?
The `substring` method returns a part of the string between the start and end indexes, or to the end of the string if the end index is omitted. The character at the end index is not included.

### Syntax: 
```js
string.substring(startIndex, endIndex)
```
- `start`: The index where to start the extraction. The first character's index is `0`.
- `end` (optional): The index before which to end the extraction. The character at this index will not be included.

### Return value:
It returns a new string which is part of the given string. 

## Example 1:
```js
// Taking a string as variable
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
```

### Example 2:
Index always starts with `0`. If a negative index is provided, it will be considered as `0`. If the index is fractional, it will be converted into its lower whole number.
```js
// Taking a string as variable
var string = "geeksforgeeks";
a = string.substring(-1);
b = string.substring(2.5);
c = string.substring(2.9);

// Printing new strings
console.log(a); // Output: "geeksforgeeks"
console.log(b); // Output: "eksforgeeks"
console.log(c); // Output: "eksforgeeks"
```

## Practical Use Case: Truncating Long Names
Let's consider a practical scenario where you need to display a username on a card, but if the username is too long, you want to truncate it and add ellipses (`...`).

```js
const username = "prakashnarsingrao sakari";
const maxLength = 10;
let displayName = username;

if (username.length > maxLength) {
    displayName = username.substring(0, maxLength) + "...";
}

console.log(displayName); // Output: "prakashnar..."
```

## Responsive Design Example
In responsive design, you might want to show a truncated version of text on smaller screens and the full version on larger screens.
```js
const username = "prakashnarsingrao sakari";
const maxLength = 10;

function getDisplayName(username, maxLength) {
    return username.length > maxLength ? username.substring(0, maxLength) + "..." : username;
}

const displayName = getDisplayName(username, maxLength);
console.log(displayName); // Output: "prakashnar..."
```

## Substring vs. Slice
While both `substring` and `slice` can be used to extract parts of a string, they have subtle differences. The main difference is in how negative indices are handled.

- `substring`: Treats negative indices as `0`.
- `slice`: Allows negative indices, counting from the end of the string.

```js
const username = "prakashnarsingrao sakari";

// Using substring
console.log(username.substring(0, 10)); // Output: "prakashnar"

// Using slice
console.log(username.slice(0, 10)); // Output: "prakashnar"

// Using slice with negative indices
console.log(username.slice(-10)); // Output: "rao sakari"
```

# JS String Method - trim()

## What is the trim Method?
The `trim` method removes whitespace from both ends of a string. Whitespace in this context includes spaces, tabs, and any line break characters.

### Syntax:
```js
str.trim()
```

### Return value:
This method returns a new string, without any of the leading or trailing white spaces.

## Why Use the trim Method?
Leading and trailing spaces can cause issues, especially when processing user input. For instance, if you ask a user to enter their name, they might inadvertently include spaces at the beginning or end. Using `trim` helps ensure you work with clean data.

### Basic Usage of trim
```js
function func() {
    var str = "  GeeksforGeeks      ";
    var st = str.trim();
    console.log(st);
}
func();
```
#### Output:
```
GeeksforGeeks
```

## Practical Use Cases
### Cleaning User Input
Consider a scenario where you want to get the first six characters of a user's name, but the input might have leading or trailing spaces.

```js
let userInput = "    Hola, I love GFG    ";
console.log("Original length:", userInput.length); // Output: 25

let cleanedInput = userInput.trim();
console.log("Trimmed length:", cleanedInput.length); // Output: 17
console.log("Trimmed input:", cleanedInput); // Output: "Hola, I love GFG"

let firstSixChars = cleanedInput.substring(0, 6);
console.log("First 6 characters:", firstSixChars); // Output: "Hola, "
```

### Note:
`trim()` removes white spaces only from the start and end of a string, not from within.

## Additional Methods
### `trimLeft()`
Removes whitespace only from the beginning of the string.

#### Syntax:
```js
str.trimLeft()
```
#### Example:
```js
function func() {
    var str = "  Geeks for Geeks      ";
    var st = str.trimLeft();
    console.log(st);
}
func();
```
#### Output:
```
Geeks for Geeks      
```

### `trimRight()`
Removes whitespace only from the end of the string.

#### Syntax:
```js
str.trimRight()
```
#### Example:
```js
function func() {
    var str = "  Geeks for Geeks      ";
    var st = str.trimRight();
    console.log(st);
}
func();
```
#### Output:
```
  Geeks for Geeks
```

## Key Points
- **Trim Leading and Trailing Spaces**: The `trim` method is useful for removing unwanted spaces from the start and end of a string.
- **Improves Data Quality**: Especially useful for cleaning up user input before further processing.
- **Supports Method Chaining**: You can chain `trim` with other string methods to write more concise and readable code.