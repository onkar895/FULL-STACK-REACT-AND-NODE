const express = require('express')
const PORT = 3000

const app = express()

// Parsing Middlewares:  It is nothing but the functions only. It is used to parse the request body.
app.use(express.json()) // for parsing application/json
// If the incoming data is the json data then it will pass the json data to the javascript object.
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Similarly,  If the incoming data is urlencoded data and it is extended as true, then it will pass the data to the javascript object.

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