// Split and Join:

function func() {
  //Original string
  var str = 'Geeks for Geeks'
  var array = str.split("for");
  console.log(array);
}
func();

// Palindrome:
function isPalindrome(inputString) {
  let arr = inputString.split("");
  let reversedArr = arr.reverse();
  let reversedString = reversedArr.join("");
  
  if (inputString === reversedString) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
}

let inputString = "madam";
isPalindrome(inputString);

inputString = "hello";
isPalindrome(inputString); 