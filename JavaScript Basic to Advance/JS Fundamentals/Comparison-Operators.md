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

// Check against undefined
console.log(0 == undefined); // false
console.log(null == undefined); // true
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
console.log(val1 > "10"); // false
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
