// JavaScript 'this' Keyword:
// 'this' Keyword: Refers to the object that executing the function

const obj = {
  name: "Prakash",
  displayMessage: function() {
      console.log(this);
  }
};

obj.displayMessage(); // Logs the obj object


// Using this Inside Methods
// If you want to access properties of the object within a method, you can use this:

const obj1 = {
    name: "Prakash",
    displayMessage: function() {
        console.log("Hello, " + this.name);
    }
};

obj1.displayMessage(); // Logs "Hello, Prakash"


// this in Global Context:
function showThis() {
  console.log(this);
}

showThis(); // Logs the global object (window in browsers)
// Even though showThis is a function, because it's not attached to any object, this refers to the global object.


// Arrow Functions and this
// Arrow functions are special because they don't have their own this. Instead, they inherit this from the surrounding scope.

const obj2 = {
  name: "Prakash",
  displayMessage: () => {
      console.log(this.name);
  }
};

obj2.displayMessage(); // Logs undefined


// this Inside Nested Functions:

const obj3= {
  name: "Prakash",
  showName: function() {
    console.log(this.name);  // Prakash
      function display() {
          console.log(this.name);
      }
      display();
  }
};

obj3.showName(); // Logs undefined
// In this case, this inside the display function refers to the global object, not obj3.


// Solution: Using self or that
// A common workaround is to store this in a variable (often named self or that) that the inner function can access:

const obj4= {
    name: "Prakash",
    showName: function() {
        const self = this;
        function display() {
            console.log(self.name);
        }
        display();
    }
};

obj4.showName(); // Logs "Prakash"
// Here, self refers to obj, so self.name correctly logs "Prakash".