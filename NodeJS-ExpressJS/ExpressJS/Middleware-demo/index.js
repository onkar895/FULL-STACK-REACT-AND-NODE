const express = require('express');
const app = express();

// Parsing Middlewares:  
// These middlewares are used to parse the incoming request data into a format that we can use in our application.

// The express.json() middleware is used to parse incoming JSON data.
// If the incoming data is the json data then it will pass the json data to the javascript object.
// It is nothing but the functions only. It is used to parse the request body.
app.use(express.json()) // for parsing application/json

// The express.urlencoded() middleware is used to parse incoming form data.
// If the incoming data is urlencoded data and it is extended as true, then it will pass the data to the javascript object.
app.use(express.urlencoded({ extended: true }))  // for parsing application/x-www-form-urlencoded

// app.use((req, res, next) => {
//     res.send('Hijack by my app.use()');
// })

// app.use((req, res, next) => {
//   console.log('Middleware executed')
// })
//It will execute 'Middleware executed' first and then stop executing the code and it will not pass the control to the next middleware or route handler. That mean it will be stuck here and you will not get the data. 
// For that, we need to call the next() function.

app.use((req, res, next) => {
  console.log('Middleware executed')
  next()  // It will pass the control to the next middleware or route handler and you will get the data.
})  

app.use((req, res, next) => {
  console.log('Inside my first middleware');
  req.requestTime = Date.now();
  req.username = 'Max'
  next(); // Again, It will pass the control to the next middleware or route handler and you will get the data.
  console.log('Inside my first middleware after calling next()'); // Control will get back here after executing the next middleware or route handler.
});  

app.use((req, res, next) => {
  console.log('Inside my second middleware');
  next();  // Again, It will pass the control to the next middleware or route handler and you will get the data.
  console.log('Inside my second middleware after calling next()');  // Control will get back here after executing the next middleware or route handler.
});

app.get('/', (req, res, next) => {
  const epoch = req.requestTime;
  const date = new Date(epoch);
  const username = req.username;
  res.send(`<h1> Hello I'm ${username}, Hello from server : ${date.toLocaleString()}</h1>`)
});
 
// Assuming valid token value is: abc
const verifyToken = (req, res, next) => {
    const { token } = req.query;
    if (!token) {
        return res.send('No token present');
    }

    if (token !== 'abc') {
        return res.send('Invalid token');
    }

    next();
}

app.get('/secret',verifyToken, (req, res) => {
  res.send('Sometime i use headphones in public so that i that i dont have to talk to anyone');
})
// So, if we want to use the middleware only for the specific route then we can pass the middleware as the second argument to the route handler. We can also pass multiple middlewares as an argument.
// In the above example, we have passed the verifyToken middleware as the second argument to the route handler. So, this middleware will only be executed for the /secret route.
// if the route is /secret only then the verifyToken middleware will be executed and the token in something else instead of abc then it will return the 'Invalid token' message. 
// If the token is not present then it will return the 'No token present' message. 
// and If the token is abc then it will it will call the next() and return the 'Sometime i use headphones in public so that i that i dont have to talk to anyone' message.

app.listen(3000, () => console.log('server started at port 3000'));