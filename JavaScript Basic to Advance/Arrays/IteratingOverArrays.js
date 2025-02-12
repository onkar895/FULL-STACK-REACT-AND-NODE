// Example 1:
// Creating an Array
// You can create an array using square brackets [] and separate items with commas:
let studentNames = ["Prakash", "Ashish", "Via", "Adarsh"];
console.log(studentNames);

// Example 2:
// Adding Different Types of Data
// Arrays can store multiple data types, including numbers, strings, other arrays, and objects:
let mixedArray = ["Prakash", 42, [1, 2, 3], { schoolName: "SIES" }];
console.log(mixedArray);

// Example 3:
// Accessing Array Elements:
console.log(studentNames[0]);
console.log(studentNames[1]); 

// Example 4:
// Iterating Over Arrays
// Using a For-of Loop
for (let name of studentNames) {
    console.log(name);  
}  

// Example 5:
// Using a For-In Loop
for (let index in studentNames) {
    console.log(studentNames[index]);   "Adarsh"
}

// Example 6:
// Array Methods
// JavaScript provides various array methods to manipulate data:

// map:
// Creates a new array with the results of calling a function for every array element:
let stdNames = ["Prakash", "Ashish", "Via", "Adarsh"];
let upperCaseNames = stdNames.map(name => name.toUpperCase());
console.log(upperCaseNames)

// filter:
// Creates a new array with elements that pass a test provided by a function:
let longNames = stdNames.filter(name => name.length > 6);
console.log(longNames); 

// Using Reduce:
// It is used to reduce the array into one single value using some functional logic

array = [ 1, 2, 3, 4, 5, 6 ];

const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum, 0);

console.log(array)  // [ 1, 2, 3, 4, 5, 6 ]
console.log(sum);  // 21