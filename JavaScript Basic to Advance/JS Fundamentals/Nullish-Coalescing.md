# JavaScript Nullish Coalescing

## Nullish Coalescing Operator

The Nullish Coalescing Operator (`??`) is a feature introduced in an ECMA proposal and has been adopted into the official JavaScript Specification. This operator returns the right-hand value if the left-hand value is `null` or `undefined`. If the left-hand value is not `null` or `undefined`, it will return the left-hand value.

### Previous Method Using Logical OR (`||`)

Before the introduction of the Nullish Coalescing Operator, setting default values for `undefined` and `null` variables often required the use of an `if` statement or the Logical OR operator (`||`).

#### Example:

```javascript
function foo(bar) {
  bar = bar || 42;
  console.log(bar);
}

foo();
```

**Output:**

```
42
```

If a parameter is not passed during the function call, it is assigned the value `undefined`. Using the OR operator, a default value can be set.

#### Example with Potential Issue:

```javascript
function foo(bar) {
  bar = bar || 42;
  console.log(bar);
}

foo(0);
```

**Output:**

```
42
```

In this example, the value `0` is considered falsy, leading to unintended behavior. This problem is resolved with the Nullish Coalescing Operator.

---

## Nullish Coalescing Operator Syntax

```javascript
variable ?? default_value;
```

### Behavior:

If the variable is `null` or `undefined`, the default value is returned. For other falsy values (like `0`, `""`, or `false`), the variable's value is returned instead of the default.

### Example:

```javascript
function foo(bar) {
  bar = bar ?? 42;
  console.log(bar);
}

foo(); // 42
foo(0); // 0
```

**Output:**

```
42
0
```

---

## Practical Usage: JSON Default Values

The Nullish Coalescing Operator is often used to set default values for fields in JSON objects.

#### Example:

```javascript
const foo = {
  bar: 0,
};

const valueBar = foo.bar ?? 42;
const valueBaz = foo.baz ?? 42;

console.log("Value of bar: ", valueBar); // 0
console.log("Value of baz: ", valueBaz); // 42
```

**Output:**

```
Value of bar:  0
Value of baz:  42
```

---

## Default Values in Function Parameters

The Nullish Coalescing Operator is particularly useful for assigning default values to function parameters.

#### Example:

```javascript
function greet(name) {
  const greeting = name ?? "Stranger";
  console.log(`Hello, ${greeting}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet(null); // Output: Hello, Stranger!
greet(undefined); // Output: Hello, Stranger!
greet(""); // Output: Hello, !
greet(0); // Output: Hello, 0!
```

**Output:**

```
Hello, Alice!
Hello, Stranger!
Hello, Stranger!
Hello, !
Hello, 0!
```

---

## Supported Browsers

The Nullish Coalescing Operator is supported in the following browser versions:

- **Google Chrome:** 80+
- **Firefox:** 72+

---

## Conclusion

The Nullish Coalescing Operator (`??`) is a powerful addition to JavaScript. It simplifies working with default values while avoiding the pitfalls of the Logical OR (`||`) operator treating all falsy values equally. This operator makes your code more robust and your intentions clearer when dealing with `null` or `undefined` values.
