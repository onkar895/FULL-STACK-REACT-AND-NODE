# Introduction to Node.js and its Features

## What is Node.js?

**Node.js is a server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side.**

- Created by Ryan Dahl in 2009.
- Uses an event-driven, non-blocking I/O model for scalability and efficiency.
- Built on Chrome's V8 JavaScript engine.

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
