# Node.js Developer's Guide: From Fundamentals to Web Applications :

---

# Table of Contents

- [Introduction to Node.js and its Features](#introduction-to-nodejs-and-its-features)
  - [What is Node.js?](#what-is-nodejs)
  - [Why Learn Node.js?](#why-learn-nodejs)
  - [Difference between Node.js and JavaScript](#difference-between-nodejs-and-javascript)

- [Features of Node.js](#features-of-nodejs)
  - [1. Non-blocking I/O Model](#1-non-blocking-io-model)
  - [2. Event-Driven Architecture](#2-event-driven-architecture)
  - [3. Node Package Manager (NPM)](#3-node-package-manager-npm)
  - [4. Cross-Platform](#4-cross-platform)
  - [5. Lightweight and Fast](#5-lightweight-and-fast)
  - [6. Scalability](#6-scalability)

- [Example Node.js Program](#example-nodejs-program)
  - [Steps to Run](#steps-to-run)

- [Reading Command-Line Arguments in Node.js](#reading-command-line-arguments-in-nodejs)
  - [Example 1: Displaying Arguments](#example-1-displaying-arguments)
  - [Example 2: Adding Two Numbers](#example-2-adding-two-numbers)

- [Installing Previous Versions of Node.js and NPM](#installing-previous-versions-of-nodejs-and-npm)
  - [Step 1: Check Installed Version](#step-1-check-installed-version)
  - [Step 2: Install Previous Version of Node.js](#step-2-install-previous-version-of-nodejs)
  - [Step 3: Install Previous Version of NPM](#step-3-install-previous-version-of-npm)

- [Node.js Basics](#nodejs-basics)
  - [Datatypes](#datatypes)
    - [Loose Typing](#loose-typing)
  - [Objects & Functions](#objects--functions)
  - [Strings and String Functions](#strings-and-string-functions)
  - [Buffer](#buffer)

- [Node.js Application](#nodejs-console-based-application)
  - [Console-Based Application](#console-based-application)
  - [Web-Based Application](#web-based-application)
    - [Steps to Run the Web Server](#steps-to-run-the-web-server)

- [Node.js First Application](#nodejs-first-application)
  - [Console-Based Node.js Application](#console-based-nodejs-application)
    - [console.log() Function](#console-log-function)
    - [Example 1: Creating a "Hello World" Application](#example-1-creating-a-hello-world-application)
    - [Example 2: Creating a "Hello World" Application Receiving User Input](#example-2-creating-a-hello-world-application-receiving-user-input)
  - [Web-Based Node.js Application](#web-based-nodejs-application-1)
    - [Import Required Modules](#import-required-modules)
    - [Create a Server](#create-a-server)
    - [Read Request and Return Response](#read-request-and-return-response)
    - [Example: Creating a "Hello World" Web-Based Application in Node.js](#example-creating-a-hello-world-web-based-application-in-node-js)

---
<br>


# Introduction to Node.js and its Features

## What is Node.js?

**Node.js is a server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side.**

- Created by Ryan Dahl in 2009.
- Uses an event-driven, non-blocking I/O model for scalability and efficiency.
- Built on Chrome's V8 JavaScript engine.

![Node JS](https://media.geeksforgeeks.org/wp-content/uploads/20230331172641/NodeJS-copy.webp)

## Why Learn Node.js?

- JavaScript is essential for web development.
- Enables full-stack JavaScript development.
- Highly popular, especially in Silicon Valley.
- Opens up numerous career opportunities.

## Difference between Node.js and JavaScript

| S.No | JavaScript                                                           | Node.js                                                                |
| ---- | -------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 1    | JavaScript is a programming language used for client-side scripting. | Node.js is a JavaScript runtime environment for server-side execution. |
| 2    | Runs only in browsers.                                               | Runs outside the browser.                                              |
| 3    | Used for frontend development.                                       | Used for backend development.                                          |
| 4    | Can manipulate HTML and the DOM.                                     | Cannot add HTML tags.                                                  |
| 5    | Runs in browser engines like V8 (Chrome), SpiderMonkey (Firefox).    | Uses the V8 engine to execute JavaScript.                              |
| 6    | Examples: RamdaJS, TypedJS.                                          | Examples: Express, Lodash (installed via npm).                         |
| 7    | Uses Chrome’s V8 engine (C++).                                       | Written in C, C++, and JavaScript.                                     |

## Features of Node.js

### 1. Non-blocking I/O Model

- Handles multiple client requests simultaneously without waiting.
- Uses asynchronous programming with callbacks.
- Ideal for real-time applications like chat apps and games.

### 2. Event-Driven Architecture

- Uses events and callbacks for handling requests and responses.
- Ensures efficient handling of large amounts of data.

### 3. Node Package Manager (NPM)

- Built-in package manager for Node.js.
- Allows easy installation and sharing of libraries.
- Vast collection of reusable packages.

### 4. Cross-Platform

- Runs on Windows, Linux, and macOS.
- Can be deployed on cloud platforms like AWS and Azure.

### 5. Lightweight and Fast

- Handles a large number of requests with minimal resource consumption.
- Uses non-blocking I/O and event-driven architecture.

### 6. Scalability

- Handles high traffic and large-scale applications efficiently.

## Example Node.js Program

```javascript
// Node.js program to display text on console
const console = require("console");
console.info("Welcome to GeeksforGeeks");
```

### Steps to Run:

1. Save the file as `filename.js`.
2. Run using the command:
   ```sh
   node filename.js
   ```

#### Output:

```
Welcome to GeeksforGeeks
```

## Reading Command-Line Arguments in Node.js

### Example 1: Displaying Arguments

```javascript
var arguments = process.argv;
console.log(arguments);
```

**Run command:**

```sh
node index.js
```

### Example 2: Adding Two Numbers

```javascript
var arguments = process.argv;
function add(a, b) {
  return parseInt(a) + parseInt(b);
}
var sum = add(arguments[2], arguments[3]);
console.log("Addition of 2, 3 is", sum);
```

**Run command:**

```sh
node index1.js 2 3
```

## Installing Previous Versions of Node.js and NPM

### Step 1: Check Installed Version

**Windows:**

```sh
node -v
npm -v
```

**Linux:**

```sh
node --version
npm --version
```

### Step 2: Install Previous Version of Node.js

**Windows:**

```sh
npm install -g node@10.9.0
```

**Linux:**

```sh
sudo apt-get install nodejs=10.9.0-1chl1~precise1
```

### Step 3: Install Previous Version of NPM

**Windows:**

```sh
npm install -g npm@4.0.0
```

**Linux:**

```sh
sudo apt-get install npm=4.0.0-1chl1~precise1
```

---

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

## Objects
Node.js objects are similar to JavaScript objects. Objects are similar to variables and contain many values written as key-value pairs.

### Example:

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

## Node.js Applications

### Console-Based Application
Create a file called `console.js` with the following code:

```javascript
console.log("Hello this is the console-based application");
console.log("This all will be printed in console");
```

To run this file, open the Node.js command prompt, navigate to the file's directory, and run:

```bash
node console.js
```

### Web-Based Application

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

# Node.js First Application

Node.js is an open-source, cross-platform server environment that executes JavaScript using the V8 JavaScript Engine. Node.js helps to write front-end and back-end code in the same language and enables efficient coding for real-time applications. Node.js applications can be written using either a console-based method or a web-based method.

## Console-Based Node.js Application

Node.js console-based applications are executed using the Node.js command prompt. The `console` module in Node.js provides a simple debugging console. The global `console` object can be used for both synchronous and asynchronous communication.

### `console.log()` Function

The `console.log()` function is used to display output on the console. It prints output to `stdout` with a newline.

**Syntax:**

```javascript
console.log([data][, ...]);
```

Here, `data` is the content to be displayed on the console.

### Example 1: Creating a "Hello World" Application

Create a `geeks.js` file containing the following code:

```javascript
console.log("Hello World");
```

Run the file on the Node.js command prompt using the command:

```bash
node geeks.js
```

**Output:**

```
Hello World
```

### Example 2: Creating a "Hello World" Application Receiving User Input

Create a `gfg.js` file containing the following code:

```javascript
console.log(process.argv.slice(2));
```

The `process.argv` is used to provide command-line arguments to a program. The `slice()` function with `2` as an argument retrieves all elements of `argv` after its second element, i.e., the user-entered arguments.

The first argument is the location of the Node.js binary running the program, and the second argument is the location of the file being executed.

---

## Web-Based Node.js Application

A web-based Node.js application consists of three essential components:

### Import Required Modules
1. **Import Required Modules:** Load Node.js modules using the `require` directive. Load the `http` module and store the returned HTTP instance into a variable.

   **Syntax:**

   ```javascript
   var http = require("http");
   ```

## Create a Server
2. **Create a Server:** Create a server to listen to client requests using the `createServer()` method. Bind the server to port `8080` using the `listen` method.

   **Syntax:**

   ```javascript
   http.createServer().listen(8080);
   ```

### Read Request and Return Response
3. **Read Request and Return Response:** Read client requests made using a browser or console and return the response. A function with `request` and `response` parameters is used for handling requests and responses.

   **Syntax:**

   ```javascript
   http.createServer(function (request, response) {...}).listen(8080);
   ```

### Example: Creating a "Hello World" Web-Based Application in Node.js

Create a `firstprogram.js` file containing the following code:

```javascript
// Require http module
var http = require("http");

// Create server
http
  .createServer(function (req, res) {
    // HTTP Status: 200 : OK
    // Content Type: text/html
    res.writeHead(200, { "Content-Type": "text/html" });

    // Send the response body as "Hello World!"
    res.end("Hello World!");
  })
  .listen(8080);
```

Run the file on the Node.js command prompt using the command:

```bash
node firstprogram.js
```

Then, open a web browser and enter the following URL:

```
http://127.0.0.1:8080/
```

**Output:**

```
Hello World!
```
