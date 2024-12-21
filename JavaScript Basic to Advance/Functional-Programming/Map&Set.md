# Arrays vs Sets in JavaScript

This document explores the key differences between Arrays and Sets in JavaScript, two fundamental data structures with distinct characteristics.

## Arrays

**Definition:** An ordered collection of values.

### Key Features:

- **Ordered:** Elements maintain their insertion order.
- **Duplicates Allowed:** Can contain duplicate values.
- **Flexible:** Can hold any type of data (numbers, strings, objects, etc.).
- **Methods:** Provides various methods for manipulating elements, such as push, pop, shift, unshift, splice, slice, indexOf, includes, and more.

### Example:

```js
const numbers = [1, 2, 2, 3, "hello", true];
console.log(numbers); // Output: [1, 2, 2, 3, 'hello', true]
```

## Sets:

**Definition:** A collection of unique values, where each value occurs only once.

### Key Features:

- **UnOrdered:** The order of elements is not guaranteed.
- **Duplicates Not Allowed:** Automatically removes duplicates.
- **Flexible:** Can hold any type of data (numbers, strings, objects, etc.).
- **Methods:** Offers methods like add, delete, has, clear, forEach, and values.

### Example:

```js
const uniqueNumbers = new Set([1, 2, 2, 3]);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3 }
```

# Key Differences Between Arrays and Sets in JavaScript

| Feature        | Array                    | Set                    |
| -------------- | ------------------------ | ---------------------- |
| **Order**      | Preserves order          | Order not guaranteed   |
| **Duplicates** | Allows duplicates        | Removes duplicates     |
| **Access**     | Access elements by index | No direct index access |

## When to Use

### Array:

- When order of elements matters.
- When you need to store duplicates.
- When you need frequent access to elements by index.

### Set:

- When you need to ensure uniqueness of values.
- When order of elements is not important.
- When you need to efficiently check for the presence of a value (using `has` method).

## Example: Removing Duplicates from an Array

```javascript
const numbers = [1, 2, 2, 3, 1];
const uniqueNumbers = new Set(numbers);
const uniqueNumbersArray = Array.from(uniqueNumbers);
console.log(uniqueNumbersArray); // Output: [1, 2, 3]
```
