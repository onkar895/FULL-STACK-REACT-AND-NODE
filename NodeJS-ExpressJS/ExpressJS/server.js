// Express is a Node.js framework that simplifies building web servers.
// require('express') imports Express into your project.
const express = require('express')

// PORT is the port number where your server will run.
// By default, web servers run on port 80 (HTTP) or 443 (HTTPS), but for development, we often use 3000, 5000, or 8080.
const PORT = 3000

// Creating an Express Application and assigns it to the app variable :
// express() creates an instance of an Express application.
// This app object will be used to define routes, middleware, and handle HTTP requests.
const app = express()
// console.log(app) 4

// app.get('/'): Defines a GET route at the root (/).
// req : represents the HTTP request object. It is used to contains details about the incoming request.
// res : represents the HTTP response object. It is used to send data back to the client.
app.get('/', (req, res) => {
  res.send('<h1>Hello from Server !</h1>')
})

// Respond to POST request on the root route (/), the application’s home page:
app.post('/', (req, res) => {
  res.send('Got a POST request')
}) 

// Respond to a PUT request to the /user route:
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

// Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

// Query Parameters :
app.get('/npm', (req, res) => {
  const {activeTab} = req.query
  res.send(`You are on ${activeTab} tab`)
})

// Route parameters:
app.get('/user/:id', (req, res) => {
  const {id} = req.params; // Extracts the "id" from the URL
  console.log(id)
  res.send(`You are requesting the User ID: ${id}`);
}) // If a client requests /user/123, the response will be: "User ID is 123 

// Multiple params request:
app.get('/user/:id/:name', (req, res) => {
  const {id} = req.params;
  const {name} = req.params;
  console.log(id, ",", name)
  res.send(`You are requesting the User ID: ${id} and Name: ${name}`);
})

// Starts the server and listens on PORT.
app.listen(PORT, () => {
  console.log("Server started at port", PORT)
})  


// Useful properties:
// req (Request Object): Contains details about the incoming request. 
// 1. req.query → Query parameters (e.g., ?name=John)
// 2. req.params → Route parameters (e.g., /user/:id)
// 3. req.body → Request body (useful in POST/PUT requests)
// 4. req.headers → HTTP headers

// res (Response Object): Used to send back a response to the client.
// Common methods:
// 1. res.send(data) → Sends a response (text, JSON, etc.)
// 2. res.json(data) → Sends a JSON response
// 3. res.status(code) → Sets the HTTP status code
// 4. res.redirect(url) → Redirects to another URL
