# Hoisting in let and const Variables

## Are let and const Variables Hoisted?

A common question during interviews or discussions is whether let and const variables are hoisted. The answer is yes, they are hoisted. However, they exist in something called the "Temporal Dead Zone" (TDZ) until they are initialized.

## Understanding the Temporal Dead Zone (TDZ)

The TDZ is the time between the variable's hoisting and its initialization. During this period, accessing the variable results in a ReferenceError. Let's explore this with some code examples.

```javascript
let x = 10;
var y = 11;
console.log(x);
console.log(y);
```

**Output:**

```
10
11
```

Output is 10 and 11 as expected.

Now let us tweak it a little bit and see what happens when we try to access `x` and `y` before initializing them.

### Example-2:

```javascript
console.log(y);
console.log(x);
let x = 10;
var y = 11;
```

If you try to run the above code it will show an error saying:

```
ReferenceError: Cannot access 'x' before initialization
```

### Example-3:

```javascript
console.log(a);
```

Upon running the above code, you will see an error saying:

```
ReferenceError: a is not defined
```

### Explanation

Since we can clearly see the error in Example 2 is about not accessing variable `x` before initialization, it means that it must have existed somewhere in the memory before initialization but we are unable to access it. This special place in memory that we cannot access is known as the **Temporal Dead Zone (TDZ)**.  
So, `let` and `const` are hoisted but they exist in the **TDZ**.

## Exploring TDZ with a Debugger

To better understand the TDZ, we can use a debugger. Here's the setup:

```javascript
// TDZ starts here
console.log(y);
console.log(x);
let x = 9; // TDZ ends here
console.log(x);
```

### Debugger Example

1. **Set a Breakpoint:** Place a breakpoint before the variable initialization.
2. **Inspect Variables:** Observe the state of variables in the debugger.

When the code execution pauses at the breakpoint, you will see that `x` is in the **TDZ**, and accessing it results in a ReferenceError.

## Temporal Dead Zone

- The TDZ starts from the beginning of the block scope.
- The TDZ ends when the variable is initialized.

```javascript
{
  // TDZ starts
  console.log(x); // Throws ReferenceError
  let x = 9; // TDZ ends
  console.log(x); // Outputs: 9
}
```

## Understanding Hoisting with const

The behavior of `const` is similar to `let` regarding hoisting:

```javascript
console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
const y = 10;
```

Again, this error indicates that the variable `y` is known to exist but is not accessible before its initialization.

## Key Takeaways

- **Hoisting:** `let` and `const` variables are hoisted but exist in the TDZ until initialization.
- **TDZ:** The period from the start of the block until the variable is initialized.
- **Errors:** Accessing a variable in the TDZ results in a **ReferenceError**.
