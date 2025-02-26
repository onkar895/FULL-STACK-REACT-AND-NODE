# Understanding the basics of web servers and HTTP requests:🌐

---

## Table of Contents
1. [Introduction](#introduction)

2. [Web Servers Fundamentals](#web-servers-fundamentals)
   - [What is a Web Server?](#what-is-a-web-server)
   - [When to Use a Web Server](#when-to-use-a-web-server)
   - [How do Web Servers Work](#how-do-web-servers-work)
   - [Performance Metrics](#performance-metrics)
   - [Popular Web Servers](#popular-web-servers)

3. [HTTP Protocol](#http-protocol)
   - [Understanding HTTP](#understanding-http)
   - [HTTP Request Components](#http-request-components)
   - [HTTP Response Components](#http-response-components)

4. [HTTP Methods in Detail](#http-methods-in-detail)
   - [Common HTTP Methods](#common-http-methods)
   - [Setup and Installation:](#setup-and-installation)
   - [Making HTTP Requests](#making-http-requests)
     - [GET Request](#get-request)
     - [POST Request](#post-request)
     - [PATCH Request](#patch-request)
     - [DELETE Request](#delete-request)
   - [Best Practices and Security](#best-practices-and-security)

5. [What is Express?](#what-is-express)
6. [Express.js and MEAN Stack](#expressjs-and-mean-stack)
7. [Installing Express on Windows](#installing-express-on-windows)
8. [Steps to Create an Express.js Application](#steps-to-create-an-expressjs-application)
   - [Step 1: Initialize Node.js Application](#step-1-initialize-nodejs-application)
   - [Step 2: Install Dependencies](#step-2-install-dependencies)
   - [Step 3: Create Application Structure](#step-3-create-application-structure)
   - [Step 4: Setting up Routes](#step-4-setting-up-routes)
   - [Step 5: Sending Data to Server](#step-5-sending-data-to-server)
   - [Step 6: Sending Files from Server](#step-6-sending-files-from-server)

9. [What is Middleware in Express.js](#what-is-middleware-in-express-js)
    - [Creating and Executing Middleware:](#creating-and-executing-middleware)
    - [Setting Up Express app and sending a response to the server:](#setting-up-express-app-and-sending-a-response-to-the-server)
    - [Parsing Middlewares](#parsing-middlewares)
    - [Error Handling:](#error-handling)
   
---
<br>

## Introduction:
> The Internet serves as a vast repository of information, accessible through web servers and clients. This guide explores the fundamentals of web servers, HTTP protocols, and their practical applications.

## Web Servers Fundamentals:💻

### What is a Web Server?
A web server is a computer program that serves web pages upon request from web clients (browsers like Chrome, Firefox, Safari). The term "web server" can refer to both:
- The software that handles web requests
- The physical machine that hosts websites

### When to Use a Web Server
Web servers are essential for:
- Website hosting
- Local development
- Testing server-side technologies (PHP, Node.js, etc.)
- Hosting multiple domains
- API development

### How do Web Servers Work?

> A page on the internet can be viewed, when the browser requests it from the web server and the web server responds with that page. A simple diagrammatic representation of this is given below in the figure: 

![Web Servers Working](https://media.geeksforgeeks.org/wp-content/uploads/Web_Servers_work_1.png)

The simple process consists of 4 steps, they are: 
1. **DNS Resolution**
   Obtaining the IP Address from the domain name: Our web browser first obtains the IP address the domain name (for e.g., for this page the domain name is www.geeksforgeeks.org) resolves to. It can obtain the IP address in 2 ways- 
   > By searching in its cache.
   > By requesting one or more DNS (Domain Name System) Servers.

2. **URL Request**
   Browser requests the full URL: After knowing the IP Address, the browser now demands a full URL from the web server.

3. **Server Processing**
   - The web server responds to request: The web server responds to the browser by sending the desired pages, and in case, the pages do not exist or some other error occurs, it will send the appropriate error message. 
   For example: 
   - You may have seen Error 404, while trying to open a webpage, which is the message sent by the server when the page does not exist. 
   Another common one is Error 401 when access is denied to us due to incorrect credentials, like username or password, provided by us.
   > Server processes request
   > Prepares appropriate response
   > Handles any errors (e.g., 404, 401)

4. **Browser Display**
   The browser displays the web page: The Browser finally gets the webpages and displays it, or displays the error message.
   > Receives server response
   > Renders content or displays error

<br>

### Performance Metrics:
Key metrics for web server performance:

| Metric | Description | Importance |
|--------|-------------|------------|
| RPS | Requests per second | Measures server capacity |
| Latency | Response time | Affects user experience |
| Throughput | Data transfer rate | Indicates efficiency |
| Concurrency | Simultaneous connections | Shows scalability |

<br>

### Popular Web Servers
1. **Apache HTTP Server** : It is the most popular web server available and is widely used. It is developed and maintained by Apache Software Foundation. The Software is produced under the Apache License, which makes it free and open source.  It is available for a variety of operating Systems- Windows, Mac OS X, Unix, Linux, Solaris, Novell Netware and FreeBSD. 
   - Most popular
   - Open-source
   - Cross-platform
   - Highly configurable

2. **Microsoft IIS** : Microsoft IIS (Internet Information Service) is the second most popularly used web server, and its market share is increasing quite rapidly with each passing day and is likely to overhaul Apache in the upcoming years. 
   - Windows-based
   - Enterprise-grade
   - Integrated with Microsoft ecosystem

## HTTP Protocol:

### Understanding HTTP
HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web, enabling client-server communication.

### HTTP Request Components
1. **Method**: Action to perform (GET, POST, etc.)
2. **URL**: Resource location
3. **Headers**: Additional request information
4. **Body**: Optional data payload

### HTTP Response Components
1. **Status Code**: Result indicator (200, 404, etc.)
2. **Headers**: Response metadata
3. **Body**: Requested content

--- 

# HTTP Methods in Detail:
> HTTP (Hypertext Transfer Protocol) specifies a collection of request methods to specify what action is to be performed on a particular resource. The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE. These are equivalent to the CRUD operations (create, read, update, and delete).

### Common HTTP Methods:

- GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.
- POST: POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.
- PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.
- PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.
- DELETE: A DELETE request is used to delete the data on the server at a specified location.

<br>

| Method | Purpose | CRUD Equivalent |
|--------|---------|----------------|
| GET | Retrieve data | Read |
| POST | Submit data | Create |
| PUT | Update entire resource | Update |
| PATCH | Partial update | Update |
| DELETE | Remove resource | Delete |

<br>

## Setup and Installation:✅

Step 1: To start a NodeJS application, create a folder called RestAPI and run the following command.
```bash
npm init -y
```

Step 2: Using the following command, install the required npm packages.
```bash
npm install express body-parser mongoose
```

Step 3: In your project directory, create a file called index.js.


## Making HTTP Requests:📜

### GET Request:

1. To make a GET request, paste the following URL in the Enter request URL text box of the postman. 
```sh
https://api.github.com/gists
```

2. Go to the headers tab and add a header called "Accept" and set it to:
```sh
application/vnd.github.v3+json
```

### POST Request:

Steps to make a POST request are:

1. Login to your GitHub account and go to Settings/Developer settings >> Personal access tokens.
2. Click on Generate new token button.
3. Give your token a name and select the scope Create gists.
4. Click on Generate token button.
5. Copy the access code and paste it somewhere.
6. Finally, we are ready to make a POST request. Paste the same URL we used above in GET request in the input field of the postman.
7. In the headers tab, add "Accept" as a header and set it to:
```sh
application/vnd.github.v3+json
```
8. Go to the body tab, choose the content type to JSON and choose the data format as raw.
9. Paste the following in the body tab.
```json
{
    "public": true,
    "files": {
        "newgist.txt": {
            "content": "Adding a GIST via the API!!"
        }
    }
}
```

10. Go to the authorization tab and choose the authorization type to Basic Auth. Type your GitHub username and generated access token in the username and password field, respectively.

### PATCH Request:

Now we update the gist we just created. To make a PATCH request, follow the given steps:

1. Find the ID of your created gist by going to https://gist.github.com
2. Paste the following URL in the input field of the Postman.
```sh
https://api.github.com/gists/{gist_id}
```
3. In the headers tab, add "Accept" as a header and set it to:
```sh
application/vnd.github.v3+json
```
4. Go to the body tab and add the description of the created gist.
```json
{
    "description": "this is my newly created gist",
    "files": {
        "newgist.txt": {
            "content": "Adding a GIST via the API!!"
        }
    }
}
```
5. Go to the authorization tab and choose the authorization type to Basic Auth. Type your GitHub username and generated access token in the username and password field, respectively.
6. Click on the send button and refresh your gist to see the updated description.

### DELETE Request:

1. Paste the following URL in the input field of the Postman.
```sh
https://api.github.com/gists/{gist_id}
```
2. In the headers tab, add accept as a header and set it to:
```sh
application/vnd.github.v3+json
```
3. Click on the send button and your gist gets successfully deleted.


## Best Practices and Security
1. **Always use HTTPS**
   - Encrypts data in transit
   - Prevents man-in-the-middle attacks

2. **Implement Rate Limiting**
   - Prevents abuse
   - Ensures fair resource usage

3. **Validate Input**
   - Sanitize all user input
   - Prevent injection attacks

4. **Use Authentication**
   - Protect sensitive endpoints
   - Implement proper authorization

5. **Monitor Performance**
   - Track key metrics
   - Set up alerts for issues

6. **Keep Documentation Updated**
   - Document API endpoints
   - Maintain change logs

7. **Handle Errors Gracefully**
   - Provide meaningful error messages
   - Log errors for debugging

---

# Express.js Tutorial 🚀

## What is Express?
Express is a small framework that sits on top of Node.js's web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application's functionality with middleware and routing; it adds helpful utilities to Node.js's HTTP objects; it facilitates the rendering of dynamic HTTP objects.

![Express JS](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310150145/Express.js-Tutorial.jpg)

## Express.js and MEAN Stack
Express is a part of MEAN stack, a full stack JavaScript solution used in building fast, robust, and maintainable production web applications.

- MongoDB (Database)
- ExpressJS (Web Framework)
- AngularJS (Front-end Framework)
- NodeJS (Application Server)

## Installing Express on Windows
Assuming that you have installed node.js on your system, follow these steps to install express on Windows (WINDOWS 10):

### STEP-1: Creating a directory
Create a directory for our project and make that our working directory.
```bash
cd gfg
```

### STEP-2: Initialize package.json
Use npm init command to create a package.json file for our project.
```bash
npm init
```
Keep pressing enter and enter "yes/no" accordingly at the terminus line.
> This command describes all the dependencies of our project. The file will be updated when adding further dependencies during the development process, for example when you set up your build system.
![Initialization](https://media.geeksforgeeks.org/wp-content/uploads/20190316150843/npm_init.jpg)

### STEP-3: Installing Express
In your gfg folder type:
```bash
npm install express --save
```

### STEP-4: Verify Installation
To check express.js installation:
```bash
C:\Users\Admin\gfg\node_modules>npm --version express
```

## Steps to Create an Express.js Application
> Approach: Below is the fundamental steps to write an express app. Here we are covering the topics like setting up the environment with the installation of modules, creating an application, running the web server, and performing basic communication with the server. Must-Know how to use the node package manager for basic works, basic knowledge of the terminal for installing dependencies and modules, basic knowledge of how a web application works, and a good knowledge of ES6. 

### Step 1: Initialize Node.js Application
```bash
npm init
```
This will ask you for few configurations about your project you can fill them accordingly, also you can change it later from the package.json file. 
Note: Use `npm init -y` for default initialization
![Initialization Of Node.js App](https://media.geeksforgeeks.org/wp-content/uploads/20210730135839/Screenshotfrom20210730135744.png)

### Step 2: Install Dependencies
```bash
npm install express
```

### Step 3: Create Application Structure
Create a file `app.js`. The project structure will look like following:
[The project structure](https://media.geeksforgeeks.org/wp-content/uploads/20210805125524/Screenshotfrom20210805115209.png)

#### Here's the basic server setup:
> Create a file app.js, for this article, we will write the whole express code in that file. This will be our folder structure. Now Inside app.js, Import express with require keyword and create an app by calling the express() function provided by the express framework. Set the port for our local application, 3000 is the default but you can choose any according to the availability of ports. Call the listen() function, It requires path and callback as an argument. It starts listening to the connection on the specified path, the default host is localhost, and our default path for the local machine is the localhost:3000, here 3000 is the port which we have set earlier. The callback function gets executed either on the successful start of the server or due to an error.

```javascript
const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
```

To run the application:
```bash
node app.js
```

### Step 4: Setting up Routes
> Routes are the endpoints of the server, which are configured on our backend server and whenever someone tries to access those endpoints they respond accordingly to their definition at the backend.

Example 1 - Basic GET route:
```javascript
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
```

Example 2 - HTML Response:
```javascript
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
```

### Step 5: Sending Data to Server
Example of handling POST requests:
> Before creating a route for receiving data, we are using an inbuilt middleware, Middleware is such a broad and more advanced topic so we are not going to discuss it here, just to understand a little bit you can think of this as a piece of code that gets executed between the request-response cycles.
> The express.json() middleware is used to parses the incoming request object as a JSON object. The app.use() is the syntax to use any middleware.
> After then we have created a route on path '/' for post request. 
> const {name}, which is the syntax in ES6 to extract the given property/es from the object. Here we are extracting the name property which was sent by the user with this request object.
> After that, we are simply sending a response to indicate that we have successfully received data. If this is looking weird to you then let me tell you that it is the syntax in ES6 to generate strings with javascript expression in ES6. We can inject any javascript expression inside ${}.

```javascript
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/', (req, res)=>{
    const {name} = req.body;
    
    res.send(`Welcome ${name}`);
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
```

### Step 6: Sending Files from Server
Example 1 - Serving Static Files:
```javascript
const express = require('express');

const app = express();
const PORT = 3000;

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'Static Files')))

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
```

Example 2 - Sending Single File:
```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/file', (req, res)=>{
    res.sendFile(path.join(__dirname,'image.jpg'));
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
```

## Additional Important Points
1. **Error Handling**: Always implement proper error handling in your routes
2. **Middleware**: Understanding middleware is crucial for Express.js applications
3. **Static Files**: Use express.static() middleware for serving static files efficiently
4. **Body Parser**: Don't forget to use express.json() middleware for parsing JSON request bodies
5. **Security**: Implement security best practices like CORS, Helmet, etc.
6. **Environment Variables**: Use environment variables for sensitive information like ports and credentials

---

# What is Middleware in Express.js ?

> Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

**Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.**

## Middlewares are used for:
  - Execute any program or code
  - Make Changes to the request and the response object.
  - End the request-response lifecycle
  - Call the next middleware function.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

### An Express application can use the following types of middleware:
  - Application-level middleware
  - Router-level middleware
  - Error-handling middleware
  - Built-in middleware
  - Third-party middleware

### The next() function:
> The next() function is used to call the next middleware, succeeding the current middleware. It is very important to note that the middleware should either stop the current lifecycle or pass it on to the next middleware, otherwise the webpage will keep loading.

Middleware Syntax: The basic syntax for the middleware functions are as follows:-
```sh
app.get(path, (req, res, next) => {}, (req, res) => {})
```

The middle part (req,res,next)=>{} is the middleware function. Here we generally perform the actions required before the user is allowed to view the webpage or call the data and many other functions. So let us create our own middleware and see its uses.

## Creating and Executing Middleware:

- Step 1: Go to your project directory and enter the following command to create a NodeJs project. Make sure that NodeJs is installed in your machine.
```sh
npm init -y 
```
It will create a package.json file.

- Step 2: Install two dependencies using the following command.
```sh
npm install express nodemon

```
- Step 3: In the scripts section of the package.json file, add the following code line.
```sh
"start": "nodemon index.js", 
```

- Step 4: Create an index.js file in the directory. Make sure that it is not inside any subdirectories of the directory you are working in.
Project Structure: It will look like the following.
![Project Structure](https://media.geeksforgeeks.org/wp-content/uploads/20211001202640/Screenshot20211001202617.png)


##  Setting Up Express app and sending a response to the server:

Here is the code for the index.js file.
```js
const express = require("express");
const app = express();

const port = process.env.port || 3000;
app.get("/", (req, res) => {
  res.send(`<div>
    <h2>Welcome to GeeksforGeeks</h2>
    <h5>Tutorial on Middleware</h5>
  </div>`);
});
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
```

## Creating  a Middleware:
In the app.get() function, modify according to the following code.
```js
app.get("/", (req, res, next) => {
    console.log("hello");
    next();
  },
  (req, res) => {
    res.send(`<div>
    <h2>Welcome to GeeksforGeeks</h2>
    <h5>Tutorial on Middleware</h5>
  </div>`);
  }
);
```
Output:
![Middleware Output](https://media.geeksforgeeks.org/wp-content/uploads/20210927101344/Screenshot20210927101329.png)


## Parsing Middlewares:

> These middlewares are used to parse the incoming request data into a format that we can use in our application. It is nothing but the functions only. It is used to parse the request body.

**app.use(express.json())** 
 - The express.json() middleware is used to parse incoming JSON data.
 - If the incoming data is the json data then it will pass the json data to the javascript object.

**The express.urlencoded()**
 - The express.urlencoded() middleware is used to parse incoming form data.
 - If the incoming data is urlencoded data and it is extended as true, then it will pass the data to the javascript object.

### Example 1:

```js
const express = require('express');
const app = express();

app.use(express.json())  // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

app.use((req, res, next) => {
    res.send('Hijack by my app.use()');
})
//It will execute 'Hijack by my app.use()' first and then stop executing the code and it will not pass the control to the next middleware or route handler. That mean it will be stuck here and you will not get the data. 
// For that, we need to call the next() function.

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

app.get('/api/users', (req, res) => {
  console.log('I am in get route', req.myUserName)  // I am in get route onkarkarale.dev
  return res.json(data)
})

// 3rd middleware : Practical Example 1
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

app.listen(3000, () => console.log('server started at port 3000'));
```

### Example 2: Important

```js
const express = require('express');
const app = express();

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

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

app.listen(3000, () => console.log('server started at port 3000'));
```
**Output:**
```
Middleware executed
Inside my first middleware
Inside my second middleware
Inside my second middleware after calling next()
Inside my first middleware after calling next()
```

### Example 3: Practical Example

#### Middleware passing as the argument: 
```js
const express = require('express');
const app = express();

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

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

app.listen(3000, () => console.log('server started at port 3000'));
```
**Explaination:**
 - If we want to use the middleware only for the specific route then we can pass the middleware as the second argument to the route handler. We can also pass multiple middlewares as an argument.
 - In the above example, we have passed the **verifyToken middleware** as the second argument to the route handler. So, this middleware will only be executed for the **/secret** route.
 - If the route is /secret only then the verifyToken middleware will be executed and if the token is something else instead of abc then it will return the 'Invalid token' message. 
 - If the token is not present then it will return the 'No token present' message. 
 - and If the token is abc then it will call the **next()** function and return the 'Sometime i use headphones in public so that i that i don't have to talk to anyone' message.


---

# Error Handling:

> Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously. Express comes with a default error handler so you don’t need to write your own to get started.

### Catching Errors:
- It’s important to ensure that Express catches all errors that occur while running route handlers and middleware.

- Errors that occur in synchronous code inside route handlers and middleware require no extra work. If synchronous code throws an error, then Express will catch and process it. 
For example:
```js
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
```

- For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where Express will catch and process them. 
For example:
```js
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})
```

### Writing error handlers:
- Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next). 
For example:
```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

- You define error-handling middleware last, after other app.use() and routes calls; 
For example:
```js
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use((err, req, res, next) => {
  // logic
})
```