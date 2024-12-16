# JavaScript Conditional Statements

The `if-else` or conditional statement will perform some action for a specific condition. If the condition meets, a particular block of action will be executed; otherwise, it will execute another block of action that satisfies that particular condition. Such control statements are used to cause the flow of execution to advance and branch based on changes to the state of a program.

## Example: if-statement

This example describes the `if` statement in JavaScript.

```javascript
// JavaScript program to illustrate If statement
var i = 10;

if (i > 15) document.write("10 is less than 15");

// This statement will be executed
// as if considers one statement by default
console.log("I am Not in if");
```

Output:

```js
I am Not in if
```

## JavaScript's conditional statements:

- if
- if-else
- nested-if
- if-else-if ladder

We will understand each conditional statement, its syntax, flowchart, and examples. Please refer to the Switch Case in JavaScript article to understand the switch case. Let's begin with the if-statement.

`1. if-statement:` It is a conditional statement used to decide whether a certain statement or block of statements will be executed or not i.e if a certain condition is true then a block of statement is executed otherwise not.

Syntax:

```js
if (condition) {
  // Statements to execute if
  // condition is true
}
```

The if statement accepts boolean values - if the value is true then it will execute the block of statements under it. If we do not provide the curly braces '{' and '}' after if( condition ) then by default if statement considers the immediate one statement to be inside its block.

For example:

```js
if (condition) statement1;
statement2;

// Here if the condition is true, if block
// will consider only statement1 to be inside
// its block.
```

`2. if-else statement:` The if statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false it won't. But what if we want to do something else if the condition is false? Here comes the else statement. We can use the else statement with the if statement to execute a block of code when the condition is false.

Syntax:

```js
if (condition) {
  // Executes this block if
  // condition is true
} else {
  // Executes this block if
  // condition is false
}
```

Example: This example describes the if-else statement in Javascript.

// JavaScript program to illustrate If-else statement

```js
var i = 10;
if (i < 15) console.log("i is less than 15");
else console.log("I am Not in if");
```

Output:

```js
i is less than 15
```

`3. nested-if statement:` JavaScript allows us to nest if statements within if statements. i.e, we can place an if statement inside another if statement. A nested if is an if statement that is the target of another if or else.

Syntax:

```js
if (condition1) {
  // Executes when condition1 is true
  if (condition2) {
    // Executes when condition2 is true
  }
}
```

Example: This example describes the nested-if statement in JavaScript.

```js
// JavaScript program to illustrate nested-if statement
var i = 10;

if (i == 10) {
  // First if statement
  if (i < 15) console.log("i is smaller than 15");

  // Nested - if statement
  // Will only be executed if statement above
  // it is true
  if (i < 12) console.log("i is smaller than 12 too");
  else console.log("i is greater than 15");
}
```

Output:

```js
i is smaller than 15
i is smaller than 12 too
```

`4. if-else-if ladder statement:` Here, a user can decide among multiple options. The if statements are executed from the top down. As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the ladder is bypassed. If none of the conditions is true, then the final else statement will be executed.

Syntax:

```js
if (condition)
statement;
else if (condition)
statement;
.
.
else
statement;
```

Example: This example describes the if-else-if ladder statement in JavaScript.

```js
// JavaScript program to illustrate nested-if statement
var i = 20;

if (i == 10) console.log("i is 10");
else if (i == 15) console.log("i is 15");
else if (i == 20) console.log("i is 20");
else console.log("i is not present");
```

Output:

i is 20
