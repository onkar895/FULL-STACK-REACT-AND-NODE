# JavaScript Call Stack

## Introduction

In order to manage different **Execution Contexts**, JavaScript has a mechanism called the **Call Stack** within its runtime. The primary role of the **Call Stack** is to manage and run execution contexts created while executing the code.

Let's understand this concept with the help of an example.

## Example Code

```javascript
var x = 5; // Line 1

function getSum(num) {
  var y = 7;
  var total = num + y;
  return total;
}

var result1 = getSum(x); // Line 9
var result2 = getSum(9); // Line 10
```

## Step-by-Step Explanation

1. **Global Execution Context (GEC):**

   - When code execution starts, the **Global Execution Context** is created.
   - It is placed on top of the **Call Stack**.

2. **Line 20 Execution:**

   - When `getSum(x)` is called, a new **Function Execution Context (FEC)** for `getSum` is created.
   - This context is placed on top of the **Call Stack**.

3. **Executing `getSum`:**

   - The function executes line by line:
     - **Line 3:** `var y = 7;`
     - **Line 4:** `var total = num + y;` → Calculates the sum.
     - **Line 5:** `return total;` → Returns the result.
   - Once finished, the **FEC** for `getSum` is **popped** from the **Call Stack**.

4. **Line 21 Execution:**

   - `getSum(9)` is called, creating another **FEC** for `getSum`.
   - This new context is placed on the **Call Stack** and executed similarly.

5. **Completion:**
   - Once all functions finish executing, their contexts are removed from the **Call Stack**.
   - Finally, the **Global Execution Context** is **popped**, and the program ends.

## Visualizing the Call Stack

To observe the **Call Stack** during execution:

1. Open **DevTools** in your browser.
2. Navigate to **Sources** → **Call Stack**.
3. Add a `debugger;` statement or set a breakpoint at **Line 1**.
4. You will see `anonymous` in the **Call Stack** tab, representing the **Global Execution Context**.

## Summary

- The **Call Stack** manages the order of execution for JavaScript functions.
- New **Execution Contexts** are pushed onto the stack when a function is called.
- Completed functions are popped off, returning control to the previous context.

Understanding the **Call Stack** is essential for debugging and optimizing JavaScript code.
