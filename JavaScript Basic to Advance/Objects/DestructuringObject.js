// Basic Destructuring:

const obj = {
  name: 'Prakash',
  address: {
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra'
  },
  courses: ['JavaScript', 'React', 'Node.js']
};

const { name, address, courses } = obj;
console.log(name); // Output: Prakash
console.log(address); // Output: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }
console.log(courses); // Output: ['JavaScript', 'React', 'Node.js']


// Nested Destructuring
// To access nested properties directly:

const { address: { city, state } } = obj;
console.log(city); // Output: Mumbai
console.log(state); // Output: Maharashtra


// Using Rest Operator
// To gather remaining properties into a new object:

const obj1 = {
  name1: 'Prakash',
  address1: {
      street1: '123 Main St',
      city1: 'Mumbai',
      state1: 'Maharashtra'
  },
  courses1: ['JavaScript', 'React', 'Node.js']
};

const { name1, ...rest } = obj1;
console.log(name1); // Output: Prakash
console.log(rest);



// Practical Example with Nested Objects
// Consider an API response with deeply nested objects:

const employees = {
    engineers: {
        emp1: { id: 1, name: 'John Doe', occupation: 'Software Engineer' },
        emp2: { id: 2, name: 'Jane Smith', occupation: 'Data Scientist' }
    },
    placement: {
        emp3: { id: 3, name: 'Emily Jones', occupation: 'HR Manager' }
    },
    youtube: {
        emp4: { id: 4, name: 'Chris Brown', occupation: 'Content Creator' }
    }
};


// To extract specific details, you can use nested destructuring:

const { engineers: { emp2: { name: engineerName, occupation: engineerOccupation } } } = employees;
console.log(engineerName); // Output: Jane Smith
console.log(engineerOccupation); // Output: Data Scientist

