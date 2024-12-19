/** try catch block
 * 
 * try{
 * some line of code
 * }catch(error){
 * console.log(error)
 * }
 * 
 */

const myName = 'onkar'

try {
  // console.log(myName) // onkar
  console.log(username) // error
} catch (error) {
  console.log(`${error}`)
  console.log(`${error.name}`)
  console.log(`${error.message}`)
} finally {
  console.log('finally executed')
}
