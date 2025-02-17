// Optional Chaining:
// Optional chaining allows you to safely access nested properties. It uses the `?.` syntax to check if a property exists before trying to access it.

const user = {
  name: 'Prakash',
  address: {
      street: '123 Main St',
      city: 'Mumbai'
  },
  likes: ['reading', 'traveling']
};

const userWithoutAddress = {
  name: 'Prakash'
};

// Example with Nested Properties
// Using optional chaining, you can safely access `city`:
console.log(user?.address?.city); // Output: Mumbai
console.log(userWithoutAddress?.address?.city); // Output: undefined

// Or to avoid error you can use conditional statements like if-else without using optional chaining

if(userWithoutAddress.address !== undefined){
  console.log(userWithoutAddress.address.city)
} else {
  console.log("Address not found")
}


// Example with Functions:
// Optional chaining also works with functions:

const userWithFunction = {
    name: 'Prakash',
    getDisplayMessage: function() {
        console.log('Welcome, Onkar');
    }
};

const val = userWithFunction?.getDisplayMessage?.(); // Output: Welcome, Onkar
console.log(val)

const userWithoutFunction = {
    name: 'Prakash'
};

userWithoutFunction?.getDisplayMessage?.(); // No output, no error



// Practical Use Case:
// Optional chaining is especially useful when dealing with data from APIs where some properties may be optional:

// fetch('https://api.example.com/user')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data?.address?.city);
//     });