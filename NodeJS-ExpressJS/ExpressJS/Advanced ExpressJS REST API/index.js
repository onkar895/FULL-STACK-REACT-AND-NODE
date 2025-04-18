const express = require('express')
const fs = require('fs')
const data = require('./MOCK_DATA.json')

const app = express()

const PORT = 8000

// Parsing Middlewares:  
// These middlewares are used to parse the incoming request data into a format that we can use in our application.
// The express.json() middleware is used to parse incoming JSON data.
app.use(express.json()) 
// The express.urlencoded() middleware is used to parse incoming form data.
app.use(express.urlencoded({ extended: true })) 

// 1st Middleware
app.use((req, res, next) => {
  console.log('1st Middleware executed')
  req.myUserName = "onkarkarale.dev"   // we can add any data to the request object and get it in the next middleware.
  next()
})

// 2nd Middleware
app.use((req, res, next) => {
  console.log('2nd Middleware executed', req.myUserName) // so here, we can get the data from the request object which was added in the previous middleware 1.
  // return res.end("HEYYY")
  next()
})

// 3rd middleware : Practical Example
// Let's create the middleware, for every request and response by using the fs module, we will log the request and response to the file.
app.use((req, res, next) => {
  console.log('3rd Middleware executed')
  fs.appendFile('log.txt', `Date: ${Date.now()}, IP Address: ${req.ip},  Method: ${req.method}, Path: ${req.path} \n`, (err) => {
    if (err) {
      console.log('Failed to log the request')
    }
    next()
  })
})
 
// Routes
// Sending a list of users as an HTML document.
app.get('/users', (req, res) => {
  const htmlResponse = `
  <ul>
  ${data.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
  </ul>
  `
  console.log('Sending a list of users as an HTML document')
  res.send(htmlResponse)
})

app.get('/api/users', (req, res) => {
  console.log('Sending a list of users in json format')
  return res.json(data)
})

app.post('/api/users', (req, res) => {
  // TODO: Create new user
  const body = req.body
  console.log(body)  // created new user

  const newUser = {...body, id: data.length + 1}

  // Pushing new user to the data array
  data.push(newUser)  
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Failed to create user' });
    }
    return res.json({status: 'success', message: 'User created successfully', id: newUser.id});
  }); 
})

// app.get('/api/users/:userId', (req, res) => {
//   const userId = Number(req.params.userId)
//   const user = data.find(user => user.id === userId)
//   return res.json(user)
// })

// app.patch('api/users/:userId', (req, res) => {
//   return res.json({status: 'pending'})
// })

// app.delete('api/users/:userId', (req, res) => {
//   return res.json({status: 'pending'})
// })

// Optimized version for the above code: because we are repeating the same route api/users/:userId again and again for every request.
// so we can merge them using route method:
app.route('/api/users/:userId')
.get((req, res) => {
  const userId = Number(req.params.userId)
  const user = data.find(user => user.id === userId)

  if (!user) {
    return res.status(404).json({ status: 'error', message: 'User not found' });
  }
  
  return res.json(user);
})
.patch((req, res) => {
  // TODO: Edit the user with ID
  const userId = Number(req.params.userId)
  const user = data.find(user => user.id === userId)

  if (!user) {
    return res.status(404).json({ status: 'error', message: 'User not found' });
  }

  const index = data.indexOf(user)
  
  const body = req.body
  console.log(body)  

  const updatedUser = {...user, ...body}
  data[index] = updatedUser

   fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Failed to update user' });
    }
    res.json({ status: 'success', message: 'User updated successfully', id: userId });
  });
})
.delete( (req, res) => {
  // TODO: Delete the user with ID
  const userId = Number(req.params.userId)
  
   // Check if user exists before deletion
   const userExists = data.some(user => user.id === userId);
   if (!userExists) {
     return res.status(404).json({ status: 'error', message: 'User not found' });
   }
   
   // Filter out the user with the given ID
   const updatedData = data.filter(user => user.id !== userId);

   while (data.length > 0) {
    data.pop();
  }
  data.push(...updatedData);
  
  // Write updated data back to file
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Failed to delete user' });
    }
    return res.json({ status: 'success', message: 'User deleted successfully', id: userId });
  });
})

app.listen( PORT,  () => {
  console.log("Server started at port", PORT)
})