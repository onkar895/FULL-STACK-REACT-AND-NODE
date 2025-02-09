// The indexOf method returns the index within the calling string of the first occurrence of the specified value, starting the search at fromIndex. It returns -1 if the value is not found.

// Example 1:
const str = "Onkar Karale"
console.log(str.indexOf("n"))  // 1

// Example 2:
const str1 = 'Departed Train';
console.log(str1.indexOf('Train')); // Output: 9

// Example 3:
const message = "Frontend Engineer"
console.log(message.indexOf("e", 6))
console.log(message.indexOf("n", 5))

// Example 4:
function func() {
  var str = 'Departed Train';
  var index = str.indexOf('ed Tr');
  console.log(index);  // Output: 6
}
func();

// Example 5:
function fun(text, char) {
  const index = text.indexOf(char);
  return index  
}
const res = fun("Departed Train", 'train')
console.log(res)  // Output: -1
// It returns -1 if the value is not found.

// Example 6:
function fun1(text, char) {
  const index = text.indexOf(char);
 if(index === -1){
  return "Character not found"
 } else {
  return "Character found in the string"
 }
}
const result = fun1("Departed Train", 'train')
console.log(result)  // Character not found

// Example 7: 
const findCharacter = (text, char) => text.indexOf(char) === -1 ? "Character not found" : "Character found in the string"

const char = findCharacter("Onkar Karale", 'Onkar')
console.log(char)  // Character not found