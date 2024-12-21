const stdId = [] // new Array()

stdId.push(1)
stdId.push(2)
stdId.push(1)

console.log(stdId) // Output: [1, 2, 1]

const stuId = new Set()

stuId.add(1)
stuId.add(2)
stuId.add(1)

console.log(stuId) // Output: Set { 1, 2 }

/** xplanation:
 * 
Array (stdId):

const stdId = []: Initializes an empty array named stdId.
stdId.push(1): Adds the number 1 to the array.
stdId.push(2): Adds the number 2 to the array.
stdId.push(1): Adds the number 1 again to the array.
console.log(stdId): Prints the array to the console. The output is [1, 2, 1] because arrays in JavaScript can contain duplicate values.

Set (stuId):

const stuId = new Set(): Initializes an empty Set named stuId.
stuId.add(1): Adds the number 1 to the Set.
stuId.add(2): Adds the number 2 to the Set.
stuId.add(1): Attempts to add the number 1 again to the Set. However, Sets in JavaScript do not allow duplicate values, so this operation has no effect.
console.log(stuId): Prints the Set to the console. The output is Set { 1, 2 } because Sets automatically remove duplicate values.

Key Differences:
Array: Allows duplicate values and maintains the order of elements.
Set: Does not allow duplicate values and does not maintain the order of elements.
 */
