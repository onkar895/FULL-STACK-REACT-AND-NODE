# Node.js Basics

Node.js is a cross-platform JavaScript runtime environment. It allows the creation of scalable web servers without threading and networking tools using JavaScript and a collection of "modules" that handle various core functionalities. It can make console-based and web-based Node.js applications.

## Datatypes

Node.js contains various types of data types similar to JavaScript:

- **Boolean**
- **Undefined**
- **Null**
- **String**
- **Number**

### Loose Typing

Node.js supports loose typing, meaning you don’t need to specify what type of information will be stored in a variable in advance. We use the `var` and `let` keywords in Node.js to declare any type of variable.

#### Example:

```javascript
// Variable store number data type
let a = 35;
console.log(typeof a);

// Variable store string data type
a = "GeeksforGeeks";
console.log(typeof a);

// Variable store Boolean data type
a = true;
console.log(typeof a);

// Variable store undefined (no value) data type
a = undefined;
console.log(typeof a);
```

**Output:**

```
number
string
boolean
undefined
```

## Objects & Functions

Node.js objects are similar to JavaScript objects. Objects are similar to variables and contain many values written as key-value pairs.

#### Example:

```javascript
let company = {
  Name: "GeeksforGeeks",
  Address: "Noida",
  Contact: "+919876543210",
  Email: "abc@geeksforgeeks.org",
};

// Display the object information
console.log("Information of variable company:", company);

// Display the type of variable
console.log("Type of variable company:", typeof company);
```

**Output:**

```
Information of variable company: {
  Name: 'GeeksforGeeks',
  Address: 'Noida',
  Contact: '+919876543210',
  Email: 'abc@geeksforgeeks.org'
}
Type of variable company: object
```

## Functions

Node.js functions are defined using the `function` keyword. There is no need to specify data types for parameters or check the number of arguments received.

#### Example:

```javascript
function multiply(num1, num2) {
  return num1 * num2;
}

// Declare variable
let x = 2;
let y = 3;

// Display the answer returned by multiply function
console.log("Multiplication of", x, "and", y, "is", multiply(x, y));
```

**Output:**

```
Multiplication of 2 and 3 is 6
```

## Strings and String Functions

In Node.js, strings can be declared using either single (`''`) or double (`""`) quotes. Various built-in functions allow for string manipulation.

#### Example:

```javascript
let x = "Welcome to GeeksforGeeks ";
let y = "Node.js Tutorials";
let z = ["Geeks", "for", "Geeks"];

console.log(x);
console.log(y);
console.log("Concat Using (+) :", x + y);
console.log("Concat Using Function :", x.concat(y));
console.log("Split string: ", x.split(" "));
console.log("Join string: ", z.join(", "));
console.log("Char At Index 5: ", x.charAt(5));
```

**Output:**

```
Welcome to GeeksforGeeks
Node.js Tutorials
Concat Using (+) : Welcome to GeeksforGeeks Node.js Tutorials
Concat Using Function : Welcome to GeeksforGeeks Node.js Tutorials
Split string:  [ 'Welcome', 'to', 'GeeksforGeeks', '' ]
Join string:  Geeks, for, Geeks
Char At Index 5:  m
```

## Buffer

In Node.js, the `Buffer` data type stores binary data, useful for reading files or receiving packets over a network.

#### Example:

```javascript
let b = new Buffer(10000); // Creates buffer
let str = " ";
b.write(str);
console.log(str.length); // Display the information
console.log(b.length); // Display the information
```

**Output:**

```
1
10000
```

## Node.js Console-Based Application

Create a file called `console.js` with the following code:

```javascript
console.log("Hello this is the console-based application");
console.log("This all will be printed in console");
```

To run this file, open the Node.js command prompt, navigate to the file's directory, and run:

```bash
node console.js
```

## Node.js Web-Based Application

Node.js web applications import different modules using the `require()` directive, create a server, and handle requests and responses.

Create a file `web.js` with the following code:

#### Example:

```javascript
// Require http module
let http = require("http");

// Create server
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the example of node.js web-based application \n");
  })
  .listen(5000, () => console.log("Server running at http://127.0.0.1:5000/"));
```

### Steps to Run the Web Server:

1. Open the Node.js command prompt.
2. Navigate to the folder using the `cd` command.
3. Run the following command:
   ```bash
   node web.js
   ```
4. Open the browser and visit:
   ```
   http://localhost:5000
   ```
5. To see any changes, restart the server by running `node web.js` again and refreshing the browser tab.

---
