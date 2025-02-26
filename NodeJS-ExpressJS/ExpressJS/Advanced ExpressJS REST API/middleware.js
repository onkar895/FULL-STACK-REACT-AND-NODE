const express = require('express')
const PORT = 3000

const app = express()

// Parsing Middlewares:  
// These middlewares are used to parse the incoming request data into a format that we can use in our application.

// The express.json() middleware is used to parse incoming JSON data.
// If the incoming data is the json data then it will pass the json data to the javascript object.
// It is nothing but the functions only. It is used to parse the request body.
app.use(express.json()) // for parsing application/json

// The express.urlencoded() middleware is used to parse incoming form data.
// If the incoming data is urlencoded data and it is extended as true, then it will pass the data to the javascript object.
app.use(express.urlencoded({ extended: true }))  // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
  console.log('Middleware executed')
})  //It will execute 'Middleware executed' first and then stop executing the code and it will not pass the control to the next middleware or route handler. That mean it will be stuck here and you will not get the data. 
// For that, we need to call the next() function.

app.use((req, res, next) => {
  console.log('Middleware executed 1st time')
  req.myUserName = "onkarkarale.dev" 
  next()
}) // It will pass the control to the next middleware or route handle and you will get the data.

app.use((req, res, next) => {
  console.log('Middleware executed 2nd time', req.myUserName)
  next()
})

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

app.get('/users', (req, res) => {
  const {username, age} = req.query
  res.send(`You sent username and age as: ${username}, ${age}`)
})

// req.body:
// Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().
app.post('/users', (req, res) => {
  console.log(req.body)  // By default it is undefined and if we need the data then we need to use parsing middlewares express.json() or express.urlencoded().
  res.send("You made a POST request")
})


app.listen(PORT, () => {
  console.log("Server started at port", PORT)
})  