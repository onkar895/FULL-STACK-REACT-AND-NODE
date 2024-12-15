# JavaScript Comparison Operators

Operators are used to perform specific mathematical and logical computations on operands. Like C, C++, Java, Python, and various other languages, JavaScript also supports comparison operations. Comparison operators are used in logical statements to determine equality or difference between variables or values. There are various comparison operators supported by JavaScript:

### Equality Operators

#### 1. Equality (`==`):

This operator is used to compare the equality of two operands. If equal, the condition is `true`; otherwise, `false`.

**Syntax:**

```javascript
x == y;
```

**Example 1:**

```javascript
// Illustration of (==) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 == 5); // true
console.log(val2 == 5); // true
console.log(val1 == val1); // true

// Check against null and boolean value
console.log(0 == false); // true
console.log(0 == null); // false
```

**Output:**

```
true
true
true
true
false
```

**Example 2:**

```javascript
// Illustration of (==) operator
let obj1 = { val1: "value" };
let obj2 = { val2: "value" };

// Checking of operands
console.log(obj1.val1 == "value"); // true
console.log(obj1 == obj2); // false
console.log(obj1.val1 == obj2.val2); // true

// Check against undefined : Anything compared with the undefined always remains false expect null.
console.log(0 == undefined); // false
// undefined is a special type in JavaScript that represents an uninitialized variable or the absence of a value. 0 is a number and is not considered equivalent to undefined in a loose comparison.
console.log(null == undefined); // true
// Both null and undefined represent an absence of value, which is why JavaScript treats them as equal
```

**Output:**

```
true
false
true
false
true
```

---

#### 2. Inequality (`!=`):

This operator is used to compare the inequality of two operands. If equal, the condition is `false`; otherwise, `true`.

**Syntax:**

```javascript
x != y;
```

**Example 1:**

```javascript
// Illustration of (!=) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 != 6); // true
console.log(val2 != "5"); // false
console.log(val1 != val1); // false

// Check against null and boolean value
console.log(0 != false); // false
console.log(0 != null); // true
// for the equality operator null remains same as "null"
```

**Output:**

```
true
false
false
false
true
```

**Example 2:**

```javascript
// Illustration of (!=) operator
let obj1 = { val1: "value" };
let obj2 = { val2: "value" };

// Checking of operands
console.log(obj1.val1 != "value"); // false
console.log(obj1 != obj2); // true
console.log(obj1.val1 != obj2.val2); // false

// Check against undefined
console.log(0 != undefined); // true
console.log(null != undefined); // false
```

**Output:**

```
false
true
false
true
false
```

---

#### 3. Strict equality (`===`):

This operator is used to compare the equality of two operands, including type. If both value and type are equal, the condition is `true`; otherwise, `false`.

**Syntax:**

```javascript
x === y;
```

**Example 1:**

```javascript
// Illustration of (===) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 === 6); // false
console.log(val2 === "5"); // true
console.log(val1 === val1); // true

// Check against null and boolean value
console.log(0 === false); // false
console.log(0 === null); // false
```

**Output:**

```
false
true
true
false
false
```

**Example 2:**

```javascript
// Illustration of (===) operator
let obj1 = { val1: "value" };
let obj2 = { val2: "value" };

// Checking of operands
console.log(obj1.val1 === "value"); // true
console.log(obj1 === obj2); // false
console.log(obj1.val1 === obj2.val2); // true

// Check against undefined
console.log(0 === undefined); // false
console.log(null === undefined); // false
```

**Output:**

```
true
false
true
false
false
```

---

#### 4. Strict inequality (`!==`):

This operator is used to compare the inequality of two operands, including type. If both value and type are not equal, the condition is `true`; otherwise, `false`.

**Syntax:**

```javascript
x !== y;
```

**Example 1:**

```javascript
// Illustration of (!==) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 !== 6); // true
console.log(val2 !== "5"); // false
console.log(val1 !== val1); // false

// Check against null and boolean value
console.log(0 !== false); // true
console.log(0 !== null); // true
```

**Output:**

```
true
false
false
true
true
```

**Example 2:**

```javascript
// Illustration of (!==) operator
let obj1 = { val1: "value" };
let obj2 = { val2: "value" };

// Checking of operands
console.log(obj1.val1 !== "value"); // false
console.log(obj1 !== obj2); // true
console.log(obj1.val1 !== obj2.val2); // false

// Check against undefined
console.log(0 !== undefined); // true
console.log(null !== undefined); // true
```

**Output:**

```
false
true
false
true
true
```

---

### Relational Operators

#### 1. Greater than operator (`>`):

This operator checks whether the left-side value is greater than the right-side value. If greater, the condition is `true`; otherwise, `false`.

**Syntax:**

```javascript
x > y;
```

**Example 1:**

```javascript
// Illustration of (>) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 > 0); // true

console.log(val2 > "10"); // true
// JavaScript compares strings lexicographically (i.e., based on their Unicode values).
// JavaScript compares the strings "5" and "10" character by character from left to right. It first compares the character '5' (from "5") with '1' (from "10") that means 5 > 0 will result in true.

console.log(val1 > "10"); // false
// 5 is already a number, so it stays as it is.
// "10" is a string. JavaScript will try to convert it to a number for the comparison, as one of the operands is a number. so 5 > 10 will be false.
console.log(val2 > 0); // true
```

**Output:**

```
true
true
false
true
```

**Example 2:**

```javascript
// Illustration of (>) operator
let obj1 = { val1: 1 };
let obj2 = { val2: 3 };

// Checking of operands
console.log(obj1.val1 > 0); // true
console.log(obj1 > obj2); // false
console.log(obj1.val1 > obj2.val2); // false
console.log(obj2 > obj1); // false
// When you use the > OR < operator with objects (obj2 > obj1), JavaScript attempts to compare their references.
// Meaning they are located in different places in memory and have different references.
// Since obj1 and obj2 point to different memory locations, JavaScript will not consider them equal, and the comparison obj2 > obj1 will be false.
console.log(obj2.val2 > obj1.val1); // true
```

**Output:**

```
true
false
false
false
true
```

---

#### 2. Greater than or equal operator (`>=`):

This operator checks whether the left-side operand is greater than or equal to the right-side operand. If greater or equal, the condition is `true`; otherwise, `false`.

**Syntax:**

```javascript
x >= y;
```

**Example 1:**

```javascript
// Illustration of (>=) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 >= 5); // true
console.log(val2 >= "15"); // true
console.log(val1 >= "5"); // true
console.log(val2 >= 15); // false
```

**Output:**

```
true
true
true
false
```

**Example 2:**

```javascript
// Illustration of (>=) operator
let obj1 = { val1: 1 };
let obj2 = { val2: 3 };

// Checking of operands
console.log(obj1.val1 >= 0); // true

console.log(obj1 >= obj2); // true
// For >= or <= JavaScript internally converts objects to primitive values for comparison.
// JavaScript will attempt to convert obj1 and obj2 to primitive values (typically, to strings or numbers) for the comparison.
// By default, when objects are compared in this way, JavaScript tries to call their toString() method.
// The toString() method on a plain object like { val1: 1 } returns the string "[object Object]", which is the default string representation for any object.
// So, both obj1 and obj2 will be converted to the string "[object Object]" before the comparison. JavaScript now compares these two strings: "[object Object]" >= "[object Object]". that means true.

console.log(obj1.val1 >= obj2.val2); // false

console.log(obj2 >= obj1); // true

console.log(obj2.val2 >= obj1.val1); // true
```

**Output:**

```
true
true
false
true
true
```

---

#### 3. Less than operator (`<`):

This operator checks whether the left-side value is less than the right-side value. If yes, the condition is `true`; otherwise, `false`.

**Syntax:**

```javascript
x < y;
```

**Example 1:**

```javascript
// Illustration of (<) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 < 15); // true
console.log(val2 < "0"); // false
console.log(val1 < "0"); // false
console.log(val2 < 15); // true
```

**Output:**

```
true
false
false
true
```

**Example 2:**

```javascript
// Illustration of (<) operator
let obj1 = { val1: 1 };
let obj2 = { val2: 3 };

// Checking of operands
console.log(obj1.val1 < 10); // true
console.log(obj1 < obj2); // false
console.log(obj1.val1 < obj2.val2); // true
console.log(obj2 < obj1); // false
console.log(obj2.val2 < obj1.val1); // false
```

**Output:**

```
true
false
true
false
false
```

---

#### 4. Less than or equal operator (`<=`):

This operator checks whether the left-side operand value is less than or equal to the right-side operand value. If yes, the condition is `true`; otherwise, `false`.

**Syntax:**

```javascript
x <= y;
```

**Example 1:**

```javascript
// Illustration of (<=) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 <= 15); // true
console.log(val2 <= "0"); // false
console.log(val1 <= "0"); // false
console.log(val2 <= 15); // true
```

**Output:**

```
true
false
false
true
```

**Example 2:**

```javascript
// Illustration of (<=) operator
let obj1 = { val1: 1 };
let obj2 = { val2: 3 };

// Checking of operands
console.log(obj1.val1 <= 10); // true
console.log(obj1 <= obj2); // true
console.log(obj1.val1 <= obj2.val2); // true
console.log(obj2 <= obj1); // true
console.log(obj2.val2 <= obj1.val1); // false
```

**Output:**

```
true
true
true
true
false
```
