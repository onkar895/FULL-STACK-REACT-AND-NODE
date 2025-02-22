// npm init:  to create node.js project. It will create the package.json file
// npm install colors and figlet : install the colors and figlet package in your project
// npm install -  it will create the node modules and package-lock.json.
// Node Modules - where all your dependencies are install
// package-lock.json. - The file which contains all the information about node modules

const colors = require('colors')
const figlet = require('figlet')

console.log('hello'.green)

console.log('I like cake and pies'.underline.red)

console.log('inverse the color'.inverse)

console.log('OMG Rainbows !'.rainbow)

console.log('Run the trap'.trap)

figlet('Hello World!!', function (err, data) {
  if (err) {
    console.log('Something went wrong...')
    console.dir(err)
    return
  }
  console.log(data.rainbow)
})
