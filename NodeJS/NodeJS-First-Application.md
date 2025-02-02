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

### Example 1: Creating a "Hello World" Application in Node.js

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

1. **Import Required Modules:** Load Node.js modules using the `require` directive. Load the `http` module and store the returned HTTP instance into a variable.

   **Syntax:**

   ```javascript
   var http = require("http");
   ```

2. **Create a Server:** Create a server to listen to client requests using the `createServer()` method. Bind the server to port `8080` using the `listen` method.

   **Syntax:**

   ```javascript
   http.createServer().listen(8080);
   ```

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
