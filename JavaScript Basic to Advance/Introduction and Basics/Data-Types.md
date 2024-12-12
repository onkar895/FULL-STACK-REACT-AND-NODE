# JavaScript Data Types :

## Types of Variables in JavaScript

In the previous lessons, we discussed how to declare variables using `var`, `let`, and `const`. Now, let's dive into the various data types that JavaScript supports.

### 1. Strings

A string is a sequence of characters enclosed in quotes. These can be single quotes (`'`), double quotes (`"`), or backticks (```).

```javascript
let username = "Prakash";
console.log(username); // Outputs: Prakash
```

**Output**

```
Prakash
```

If you omit the quotes, JavaScript will treat the text as a variable name, which will cause an error if the variable is not defined.

```javascript
let username = Prakash;
```

To determine the type of a variable, you can use the `typeof` operator:

```javascript
console.log(typeof username);
```

**Output**

```
undefined
```

### 2. Numbers

Numbers in JavaScript can be integers or floating-point numbers.

```javascript
let age = 25;
console.log(typeof age); // Outputs: number

let price = 99.99;
console.log(typeof price); // Outputs: number
```

**Output**

```
number
number
```

If you enclose numbers in quotes, they become strings.

```javascript
let numberString = "123";
console.log(typeof numberString);
```

**Output**

```
string
```

### 3. Booleans

Booleans represent true/false values and are commonly used in conditional statements.

```javascript
let isStudent = true;
console.log(typeof isStudent);
```

**Output**

```
boolean
```

### 4. Undefined

A variable that is declared but not assigned a value has the type `undefined`.

```javascript
let username;
console.log(username); // Outputs: undefined
console.log(typeof username); // Outputs: undefined
```

**Output**

```
undefined
undefined
```

### 5. Null

`null` represents the intentional absence of any object value. It's used to indicate "no value."

```javascript
let user = null;
console.log(user); // Outputs: null
console.log(typeof user); // Outputs: object
```

**Output**

```
null
object
```

### 6. Objects

Objects are non-primitive data types that allow you to store collections of data. Objects are created using curly braces `{}`.

```javascript
const person = {
  name: "Prakash",
  age: 25,
  education: "Engineer",
};
console.log(typeof person); // Outputs: object
```

**Output**

```
object
```

### 7. Arrays

Arrays are a type of object used to store multiple values in a single variable, created using square brackets `[]`.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);
```

**Output**

```
object
```

## Summary of Data Types

Here are the primary data types we discussed:

- **String**: Text enclosed in quotes.
- **Number**: Integers or floating-point numbers.
- **Boolean**: True or false values.
- **Undefined**: Variables declared but not assigned a value.
- **Null**: Represents "no value."
- **Object**: Non-primitive type for storing collections of data.
- **Array**: A special type of object for storing lists of values.

Understanding these data types is crucial for building a solid foundation in JavaScript. Practice creating and manipulating variables with these types to strengthen your skills.
