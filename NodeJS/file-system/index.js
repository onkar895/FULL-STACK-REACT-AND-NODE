// An example of reading a or abc.txt file located in the same directory of the running code:

// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

const { readFile } = require('node:fs/promises'); // promise based API to read file
const { resolve } = require('node:path');
const path = require('node:path');

console.log(__dirname)  // directory name
async function logFile() {
  try {
    // const filePath = resolve('./abc.txt');   instead of resolve you can also use join method to get the path.
    const filePath = path.join(__dirname, 'abc.txt')
    console.log(filePath)
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
    console.log(typeof (contents))   // it is by default string

    // converting into number/array
    const nums = contents.split('\n')
    console.log(nums)
    console.log(typeof (nums)) 
  } catch (err) {
    console.error(err.message);
  }
}
logFile();