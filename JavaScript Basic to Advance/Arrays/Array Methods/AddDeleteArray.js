

let studentNames = [ 'Prakash', 'Ashish', 'Via', 'Adarsh' ]

// Example 1:
// Adding Elements
// You can add elements to an array using the push and unshift method:
studentNames.push("Piyush");  // Add the element to the last
console.log(studentNames);  

studentNames.unshift("Piyush"); // Add the element to the first
console.log(studentNames); 

// Example 2:
// Removing Elements
// To remove elements, you can use methods like pop, shift, and splice:

studentNames.pop(); // Removes the last element
console.log(studentNames);

studentNames.shift(); // Removes the first element
console.log(studentNames);  

studentNames.splice(1, 1); // Removes one element at index 1
console.log(studentNames);  

studentNames.splice(1, 2); // Removes two element at index 1
console.log(studentNames);  

// Example 3:
// Slice :
// Original Array
let arr = [23,56,87,32,75,13,45];
// Extracted array
let new_arr = arr.slice(2,4);  // This method returns a new array containing some portion of the original array. 
console.log(arr);
console.log("<br>");
console.log(new_arr);

// Example 4:
// In this example, the slice() method extracts the entire array from the given string and returns it as the answer since no arguments were passed to it.
var arrr = [23,56,87,32,75,13];
var new_arrr = arrr.slice();
console.log(arrr);
console.log(new_arrr);
// Output:

// [23,56,87,32,75,13]
// [23,56,87,32,75,13]

// Example 5:
// In this example, the slice() method extracts the array starting from index 2 till the end of the array and returns it as the answer.

var arr2 = [23,56,87,32,75,13];
var new_arr2 = arr2.slice(2);
console.log(arr2);
console.log(new_arr2);
// Output:

// [23,56,87,32,75,13]
// [87,32,75,13]