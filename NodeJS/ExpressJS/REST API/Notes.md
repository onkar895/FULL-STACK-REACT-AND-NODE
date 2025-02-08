# REST API (Representational State Transfer):-
 
### What is an API?
`API stands for Application Programming Interface. It acts as a communication channel between two applications, such as a web form submitting data to a database.`

### What is a REST API?
`REST (Representational State Transfer) is a set of rules that define methods and protocols for how data should be sent, received, and stored.`

**So basically, REST is a type of API that follows a set of rules that make communication between two applications smooth and organized.**

## Difference between GET and POST:-

### GET: Used to fetch the data.
- It used to retrieve or read data from the server side. It sends data in the URL, and is typically used for retrieving data, not for creating or modifying data.
- Data is sent as query params(parameters)
- Limited amount of data can be sent.
- Data is sent in string format.

### POST: Used to create some data at sever side.
- It used to send data to the server side. It sends data in the body of the HTTP request, and is typically used for creating or modifying data.
- Data is sent as Request Body.
- Huge amount of data is sent.
- Data is sent in string, json and form-urlencoded format.



# Express.js Server with Parsing Middleware

## Overview
This is a basic Express.js server that demonstrates how to:
- Serve static files
- Handle GET and POST requests
- Use middleware for parsing request bodies

## Code
```javascript
const express = require('express')
const PORT = 3000

const app = express()

// Parsing Middlewares: It is nothing but the functions only. It is used to parse the request body.
app.use(express.json()) // for parsing application/json
// If the incoming data is JSON data, it will be converted to a JavaScript object.
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// If the incoming data is URL-encoded and extended is true, then it will be converted to a JavaScript object.

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

app.get('/users', (req, res) => {
  const { username, age } = req.query
  res.send(`You sent username and age as: ${username}, ${age}`)
})

// req.body:
// Contains key-value pairs of data submitted in the request body.
// By default, it is undefined, and is populated when you use body-parsing middleware
// such as express.json() or express.urlencoded().
app.post('/users', (req, res) => {
  console.log(req.body)  // Logs the request body to the console.
  res.send("You made a POST request")
})

app.listen(PORT, () => {
  console.log("Server started at port", PORT)
})
```

## Explanation
### **1. Parsing Middlewares**
Middleware functions are used to process incoming requests before reaching the route handlers.
- `express.json()` → Parses JSON data and converts it into a JavaScript object.
- `express.urlencoded({ extended: true })` → Parses URL-encoded data and converts it into a JavaScript object.

### **2. Serving Static Files**
- The `app.get('/')` route serves an HTML file (`index.html`) from the root directory.

### **3. Handling GET Requests**
- The `/users` route extracts `username` and `age` from the query parameters and returns them in the response.

### **4. Handling POST Requests**
- The `/users` route logs the `req.body` to the console and responds with a confirmation message.
- By default, `req.body` is `undefined`. To access request body data, parsing middleware must be used (`express.json()` or `express.urlencoded()`).

## Running the Server
1. Install Express.js if not already installed:
   ```sh
   npm install express
   ```
2. Run the server:
   ```sh
   node server.js
   ```
3. Access it via:
   - `http://localhost:3000/` for the homepage
   - `http://localhost:3000/users?username=John&age=25` for query params
   - Send a POST request using Postman or `fetch()` with JSON data.

### Example POST Request (Using `fetch` in JavaScript)
```javascript
fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'JohnDoe', age: 25 })
})
.then(response => response.text())
.then(data => console.log(data))
```

This will log `{ username: 'JohnDoe', age: 25 }` in the console and respond with `You made a POST request`.
