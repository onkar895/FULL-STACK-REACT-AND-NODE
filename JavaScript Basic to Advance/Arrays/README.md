## Basic Properties of Arrays and Iterating over Array

In JavaScript, primitive data types include strings, numbers, booleans, undefined, and null. However, non-primitive data types, such as arrays, provide a way to store and manage collections of data efficiently. This guide will explain the use of arrays, their advantages, and practical applications.

### Why Use Non-Primitive Data Types?
Consider a scenario where you need to store the names of 60 students. Using individual variables for each name would be inefficient and cumbersome

```javascript
let student1 = "Prakash";
let student2 = "Ashish";
let student3 = "Via";
let student4 = "Adarsh";
// ... and so on up to 60 students
```
Instead, arrays allow us to store multiple items in a single variable, making the code more manageable and reducing memory usage.

### Creating and Using Arrays
#### Creating an Array
You can create an array using square brackets `[]` and separate items with commas:

```javascript
let studentNames = ["Prakash", "Ashish", "Via", "Adarsh"];
console.log(studentNames); // Output: ["Prakash", "Ashish", "Via", "Adarsh"]
```

#### Adding Different Types of Data
Arrays can store multiple data types, including numbers, strings, other arrays, and objects:

```javascript
let mixedArray = ["Prakash", 42, [1, 2, 3], { schoolName: "SIES" }];
console.log(mixedArray);
// Output: ["Prakash", 42, [1, 2, 3], { schoolName: "SIES" }]
```

### Accessing Array Elements
Array elements are accessed using their index, which starts at 0:

```javascript
console.log(studentNames[0]); // Output: "Prakash"
console.log(studentNames[1]); // Output: "Ashish"
```

### Iterating Over Arrays
#### Using a For Loop
You can iterate over an array using a for loop:

```javascript
for (let name of studentNames) {
    console.log(name);
}
// Output: "Prakash", "Ashish", "Via", "Adarsh"
```

#### Using a For-In Loop
The for-in loop iterates over the indices of the array:

```javascript
for (let index in studentNames) {
    console.log(studentNames[index]);
}
// Output: "Prakash", "Ashish", "Via", "Adarsh"
```

### Modifying Arrays
#### Adding Elements
You can add elements to an array using the push and unshift method:

```javascript
studentNames.push("Piyush");
console.log(studentNames);
// Output: ["Prakash", "Ashish", "Via", "Adarsh", "Piyush"]

studentNames.unshift("Piyush");
console.log(studentNames); // Output: ['Piyush',"Prakash", "Ashish", "Via", "Adarsh"]
```

#### Removing Elements
To remove elements, you can use methods like pop, shift, and splice, slice:

```javascript
studentNames.pop(); // Removes the last element
console.log(studentNames);
// Output: ["Prakash", "Ashish", "Via", "Adarsh"]

studentNames.shift(); // Removes the first element
console.log(studentNames);
// Output: ["Ashish", "Via", "Adarsh"]

// Splice : 
studentNames.splice(1, 1); // Removes one element at index 1
console.log(studentNames);
// Output: ["Ashish", "Adarsh"]

// Slice :
// Original Array
let arr = [23,56,87,32,75,13];
// Extracted array
var new_arr = arr.slice(2,4);  // This method returns a new array containing some portion of the original array. 
console.log(arr);
console.log("<br>");
console.log(new_arr);
```

### Array Methods
JavaScript provides various array methods to manipulate data:

#### `map`
Creates a new array with the results of calling a function for every array element:

```javascript
let upperCaseNames = studentNames.map(name => name.toUpperCase());
console.log(upperCaseNames); // Output: ["ASHISH", "ADARSH"]
```

#### `filter`
Creates a new array with elements that pass a test provided by a function:

```javascript
let longNames = studentNames.filter(name => name.length > 5);
console.log(longNames); // Output: ["Ashish", "Adarsh"]
```

#### Using `reduce`
It is used to reduce the array into one single value using some functional logic

```javascript
let array = [1, 2, 3, 4, 5, 6];
const helperSum = (acc, curr) => acc + curr;
let sum = array.reduce(helperSum, 0);

console.log(array);
console.log(sum);
```

**Output:**
```text
[ 1, 2, 3, 4, 5, 6 ]
21
```

#### Using `some`
It is used to check whether some array values pass a test

```javascript
let array = [1, 2, 3, 4, 5, 6];
const lessthanFourCheck = (element) => element < 4;
const lessthanFour = array.some(lessthanFourCheck);

console.log(array);
if (lessthanFour) {
    console.log("At least one element is less than 4");
} else {
    console.log("All elements are greater than 4");
}
```

**Output:**
```text
[ 1, 2, 3, 4, 5, 6 ]
At least one element is less than 4
```


# JavaScript Array Methods Notes

## Array Includes Method

The `array.includes()` method is used to know either a particular element is present in the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false.

### Syntax:
```javascript
array.includes(searchElement, start)
```

### Parameters:
- **searchElement**: This parameter holds the element which will be searched.
- **start**: This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.

### Return Value: 
It returns a Boolean value i.e, either True or False.

### Examples:

**Example 1**: In this example the method will searched for the element 2 in that array.
```javascript
Input: [1, 2, 3, 4, 5].includes(2);
Output: true
```

**Example 2**: In this example the method will searched for the element 9 in that array.
```javascript
Input: [1, 2, 3, 4, 5].includes(9);
Output: false
```

### Program Examples:

**Program 1**:
```javascript
// Taking input as an array A
// having some elements.
var A = [ 1, 2, 3, 4, 5 ];

// includes() method is called to
// test whether the searching element
// is present in given array or not.
a = A.includes(2)

// Printing result of includes().
console.log(a);
```
Output:
```
true
```

**Program 2**:
```javascript
// Taking input as an array A
// having some elements.
var name = [ 'gfg', 'cse', 'geeks', 'portal' ];

// includes() method is called to
// test whether the searching element
// is present in given array or not.
a = name.includes('cat')

// Printing result of includes()
console.log(a);
```
Output:
```
false
```

## Array sort() Method

The `arr.sort()` method is used to sort the array in place in a given order according to the compare() function. If the method is omitted then the array is sorted in ascending order.

### Syntax:
```javascript
arr.sort(compareFunction)
```

### Parameters:
- **compareFunction**: This parameter is used to sort the elements according to different attributes and in a different order.
  - compareFunction(a,b) < 0
  - compareFunction(a,b) > 0
  - compareFunction(a,b) = 0

### Return value: 
This method returns the reference of the sorted original array.

### Examples:

**Program 1**:
```javascript
// JavaScript to illustrate sort() function
function func() {
    // Original string
    var arr = ["Geeks", "for", "Geeks"]
    
    console.log(arr);
    // Sorting the array
    console.log(arr.sort());
}
func();
```
Output:
```
[ 'Geeks', 'for', 'Geeks' ]
[ 'Geeks', 'Geeks', 'for' ]
```

**Example 1**: Sort array in ascending order
```javascript
var arr = [2, 5, 8, 1, 4]
console.log(arr.sort());
console.log(arr);
```
Output:
```
1,2,4,5,8
1,2,4,5,8
```

**Example 2**: Sort with custom function
```javascript
var arr = [2, 5, 8, 1, 4]
console.log(arr.sort(function(a, b) {
  return a + 2 * b;
}));
console.log(arr);
```
Output:
```
2,5,8,1,4
2,5,8,1,4
```

**Example 3**: Sorting numbers with unexpected behavior
```javascript
let numbers = [20,5.2,-120,100,30,0]
console.log(numbers.sort())
```
Output:
```
-120,0,100,20,30,5.2
```

### Correct way to sort numbers:
```javascript
let numbers = [20,5.2,-120,100,30,0];

/* Logic: 
   20 - (5.2) = +ve => 5.2 would be placed before 20,
   20 - (-120) = +ve => -120 would be placed before 20,
   20 - (100) = -ve => 100 would be placed after 20,
   20 - (30) = -ve => 30 would be placed after 20,
   20 - (0) = +ve => 0 would be placed before 20,
   Similarly for every element, we check and place them accordingly in iterations.
*/
function compare(a,b){
    return a-b;
}
console.log(numbers.sort(compare));
```
Output:
```
-120,0,5.2,20,30,100
```

## Split and Join Methods

### Introduction
The split and join methods in JavaScript are powerful tools for manipulating strings and arrays. The split method is used to divide a string into an array of substrings, while the join method combines an array of elements into a single string.

### Split Method

#### Syntax:
```javascript
str.split(separator, limit)
```

#### Parameters:
- **separator**: Specifies the character or regular expression for splitting the string
- **limit**: Defines the upper limit on the number of splits

#### Return value: 
Returns an array of strings formed after splitting the given string.

#### Examples:

**Example 1**:
```javascript
function func() {
    //Original string
    var str = 'Geeks for Geeks'
    var array = str.split("for");
    console.log(array);
}
func();
```
Output:
```
[ 'Geeks ', ' Geeks' ]
```

**Example 2**:
```javascript
var str = 'It iS a 5r&e@@t Day.'
var array = str.split(" ",2);
print(array);
```
Output:
```
[It,iS]
```

### Practical Example: Checking for Palindrome
```javascript
function isPalindrome(inputString) {
    let arr = inputString.split("");
    let reversedArr = arr.reverse();
    let reversedString = reversedArr.join("");
    return inputString === reversedString;
}

let inputString = "madam";
console.log(isPalindrome(inputString)); // true

inputString = "hello";
console.log(isPalindrome(inputString)); // false
```

### Detailed Steps for Palindrome Check:

1. Split the string into an array of characters:
```javascript
let inputString = "madam"; 
let arr = inputString.split(""); 
console.log(arr); // ["m", "a", "d", "a", "m"]
```

2. Reverse the array:
```javascript
let reversedArr = arr.reverse();
console.log(reversedArr); // ["m", "a", "d", "a", "m"]
```

3. Join the array back into a string:
```javascript
let reversedString = reversedArr.join("");
console.log(reversedString); // "madam"
```

4. Compare strings:
```javascript
if (inputString === reversedString) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
```

## Array join() Method

The `arr.join()` method joins array elements into a string.

### Syntax:
```javascript
array.join(separator)
```

### Parameters:
- **separator**: Optional parameter with default value of comma(,)

### Return Value: 
Returns a string containing the joined array elements.

### Examples:

**Example 1**: Join with custom separator
```javascript
var a = [1, 2, 3, 4, 5, 6];
print(a.join('|'));
```
Output:
```
1|2|3|4|5|6
```

**Example 2**: Join with default separator
```javascript
var a = [1, 2, 3, 4, 5, 6];
print(a.join()); 
```
Output:
```
1, 2, 3, 4, 5, 6
```

**Example 3**: Join with empty string
```javascript
var a = [1, 2, 3, 4, 5, 6];
print(a.join(''));
```
Output:
```
123456
```

### Use Cases for Split and Join
1. **Reversing a String**: Split into characters, reverse array, join back
2. **Transforming Data**: Convert CSV string to array and back
3. **String Manipulation**: Modify parts of string by splitting, altering, and rejoining



### Summary Table
| Method    | Description | Example |
|-----------|-------------|---------|
| `includes()` | Checks if an array contains an element | `[1,2,3].includes(2) // true` |
| `sort()` | Sorts an array (by default lexicographically) | `[3,1,4].sort((a,b) => a-b) // [1,3,4]` |
| `split()` | Splits a string into an array | `'a,b,c'.split(',') // ['a', 'b', 'c']` |
| `join()` | Joins array elements into a string | `['a', 'b', 'c'].join('-') // 'a-b-c'` |



# Spread Operator (...)

The spread operator is a powerful feature that allows you to unpack elements from arrays or properties from objects. It is represented by three dots (...).

### Syntax:
```javascript
var variablename1 = [...value];
```

### Basic Usage
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(...arr);
// Output: 1 2 3 4 5
```

### Merging Arrays
```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Adding Elements While Merging
```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [8, 9];
const combinedArr = [...arr1, 6, 7, ...arr2, 10, 11];
console.log(combinedArr);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

### Preventing Mutation
```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr3 = [...arr1, 6, 7];
console.log(arr1); // Output: [1, 2, 3, 4, 5]
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6, 7]
```

## Spread Operator with Objects

### Copying an Object
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1, b: 2 }
```

### Merging Objects
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

### Updating Properties
```javascript
const obj1 = { a: 1, b: 2 };
const updatedObj = { ...obj1, b: 3 };
console.log(updatedObj); // Output: { a: 1, b: 3 }
```

### Using Spread with Math Object
```javascript
let arr = [1, 2, 3, -1];
console.log(Math.min(...arr)); // Output: -1
```

# Destructuring Assignment

The Destructuring assignment is an ES6 feature that provides a shorthand syntax to extract array elements or object properties into distinct variables.

## Array Destructuring

### Basic Syntax:
```javascript
var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

// With rest operator
[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(restof); // [30, 40, 50]
```

### Example 1: Basic Array Destructuring
```javascript
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
console.log(firstName); // "alpha"
console.log(secondName); // "beta"
```

### Example 2: Skipping Elements
```javascript
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName); // "alpha"
console.log(thirdName); // "gamma"
```

### Example 3: Using Rest Operator
```javascript
var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName); // "alpha"
console.log(lastName); // ["gamma", "delta"]
```

## Object Destructuring

### Basic Object Destructuring
```javascript
const user = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};
const { name, age, job } = user;
console.log(name); // John Doe
console.log(age); // 30
console.log(job); // Developer
```

### Renaming Variables
```javascript
const user = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};
const { name: userName, age: userAge, job: userJob } = user;
console.log(userName); // John Doe
```

### Nested Destructuring
```javascript
const user = {
  name: 'John Doe',
  address: {
    city: 'New York',
    country: 'USA'
  }
};
const { name, address: { city, country } } = user;
```

# Copy By Reference

In JavaScript, arrays and objects are reference types, which can lead to unexpected behavior when copying.

## Shallow Copy Problem
```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // Shallow copy
arr2.push(4);
console.log('ARR1:', arr1); // [1, 2, 3, 4]
console.log('ARR2:', arr2); // [1, 2, 3, 4]
```

## Solutions for Proper Array Copying

### 1. Using Spread Operator
```javascript
let arr = ['a', 'b', 'c'];
let arr2 = [...arr];
arr2.push('d');
console.log(arr); // ['a', 'b', 'c']
console.log(arr2); // ['a', 'b', 'c', 'd']
```

### 2. Using for Loop
```javascript
let arr4 = [1, 2, 3];
let arr5 = [];
for (let number of arr4) {
    arr5.push(number);
}
```

### 3. Using Array.from
```javascript
let arr6 = [1, 2, 3];
let arr7 = Array.from(arr6);
```

### 4. Using concat
```javascript
let arr8 = [1, 2, 3];
let arr9 = arr8.concat();
```

## Important Notes
- **Shallow Copy**: Creates a copy that still points to the same memory location
- **Deep Copy**: Creates an independent copy where changes don't affect the original
- For arrays with primitive types, spread operator, Array.from, and concat work well
- For complex nested objects/arrays, you might need a deep copy solution