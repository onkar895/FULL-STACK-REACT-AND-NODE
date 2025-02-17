//  Object Reference and Shallow Copy, Deep Copy

// Shallow Copy:
// A shallow copy creates a new object but does not recursively copy nested objects. Instead, it copies references to the original nested objects.

// Example of Shallow Copy:
const person1 = {
  name: 'Prakash',
  age: 101,
  address: {
      city: 'Mumbai',
      state: 'Maharashtra'
  }
};

const person2 = person1; // Shallow copy
person2.name = 'Ashish';

console.log(person1.name); // Output: Ashish
console.log(person2.name); // Output: Ashish
// In this example, changing the name property of person2 also changes the name property of person1 because both variables reference the same object.


// Deep Copy:
// A deep copy creates a new object and recursively copies all properties of the original object, ensuring that there are no shared references between the original and the new object.

// Methods to Create Deep Copy
// Using JSON methods:
const person3 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person4 = JSON.parse(JSON.stringify(person3)); // Deep copy
person4.name = 'Ashish';
person4.address.city = 'Sirsa';

console.log(person3.name); // Output: Prakash
console.log(person4.name); // Output: Ashish
console.log(person3.address.city); // Output: Mumbai
console.log(person4.address.city); // Output: Sirsa


// Spread Operator:
// The spread operator (...) can also be used to create a shallow copy of an object:

// Example of Spread Operator

const person5 = {
    name: 'Prakash',
    age: 101,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const person6 = { ...person5 }; // Shallow copy
person6.name = 'Ashish';
person6.address.city = 'Pune';

console.log(person5.name); // Output: Prakash
console.log(person6.name); // Output: Ashish
console.log(person5.address.city); // Output: Pune
console.log(person6.address.city); // Output: Pune