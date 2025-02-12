// Spread:

const arr = [1, 2, 3, 4, 5];
console.log(...arr);
// Output: 1 2 3 4 5

// Merging the arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); 


// Adding Elements While Merging
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [8, 9];
const combinedArr = [...arr3, 6, 7, ...arr4, 10, 11];
console.log(combinedArr);

//  Preventing Mutation
const ar = [1, 2, 3, 4, 5];
const ar1 = [...arr1, 6, 7];
console.log(ar); // Output: [1, 2, 3, 4, 5]
console.log(ar1); // Output: [1, 2, 3, 4, 5, 6, 7]



// Spread Operator with Objects:
//  Copying an Object:

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1, b: 2 }

// Merging Objects

const obj = { a: 1, b: 2 };
const obj3 = { c: 3, d: 4 };
const mergedObj = { ...obj, ...obj3 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }