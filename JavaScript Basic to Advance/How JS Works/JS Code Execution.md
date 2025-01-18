# How JavaScript Executes Code

## JavaScript Execution Context: An Overview

Whenever JavaScript encounters a code snippet, it activates the JavaScript engine, which creates an environment called the **execution context**. This context is created in two phases:

1. **Creation Phase:** Allocates memory to variables and functions.
2. **Execution Phase:** Executes the code line by line.

## Execution Phases Explained

### Creation Phase

In the creation phase, the JavaScript engine:

- Scans through the code.
- Allocates memory for variables declared with `var` and function declarations.
- Assigns `undefined` to variables and stores the function definitions.

### Execution Phase

In the execution phase, the JavaScript engine:

- Executes the code line by line.
- Updates the values of variables and executes functions.

## Sample Code Execution

Consider the following sample code:

```javascript
var n = 3;

function squr(num) {
  var ans = num * num;
  return ans;
}

var three = squr(n);
```

When you run this whole code a global EXECUTION CONTEXT is created and it contains two parts one is memory and the other is code execution.

When the first line is encountered it will reserve memory for all variables(n, three, five) and function(square). When reserving the memory for variables it reserves a special value undefined and for function, it stores whole code. the pictorial representation is shown below.

### Global Execution Context

When you run this code, a **Global Execution Context** is created. It contains two parts:

1. **Memory Allocation**
2. **Code Execution**

**Memory Allocation (Creation Phase):**

- Reserves memory for all variables (`n`, `three`) and function (`squr`).
- Variables are initialized with `undefined`.
- Functions are stored with their entire definition.

## PICTORIAL REPRESENTATION OF GLOBAL EXECUTION CONTEXT FOR MEMORY ALLOCATION:

![Memory Allocation (Creation Phase)](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f20nbmrkhsxkz4xfr8p3.jpg)

**Code Execution Phase:**

After allocating memory for all variables and function, code execution phase starts(code runs line by line).

- **Line 1:** `var n = 3;` → `n` is assigned the value `3`.
- **Lines 2-5:** Function `squr` is declared, but nothing executes yet.
- **Line 6:** `squr(n)` is invoked, creating a new **Function Execution Context**.

## PICTORIAL REPRESENTATION OF FUNCTION EXECUTION CONTEXT FOR CODE EXECUTION PHASE:

![Code Execution Phase](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wxiwujevr9w8ifyckwsp.jpg)

### Function Execution Context

When `squr(n)` is called:

1. **Memory Allocation:**

   - `num` is assigned the value `3` (from `n`).
   - `ans` is initialized with `undefined`.

2. **Code Execution:**
   - `var ans = num * num;` → `ans = 3 * 3 = 9`.
   - `return ans;` → Returns `9`.
   - The value `9` replaces the `undefined` value of `three`.

## PICTORIAL REPRESENTATION OF EXECUTION CONTEXT WHILE FUNCTION EXECUTE:

![EXECUTION CONTEXT](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nzo5eqt5zkqh5cd52fv9.jpg)

After that, when 'return' is encountered, the control of the program is returned to the place where the function is invoked. The control goes to line 6, finding the answer in the local memory. The control then returns to line 3, and the value of 'three' (undefined) is replaced by the value of 'ans'. After that, the entire execution context is deleted.

### Call Stack

JavaScript uses the **Call Stack** to manage execution contexts:

- **Start:**

  - `[Global Execution Context]`

- **Calling `squr(n)`:**

  - `[Global Execution Context, squr Execution Context]`

- **Returning from `squr`:**

  - `[Global Execution Context]`

- **End of Program:**
  - `[]` (Call Stack is empty)

## Call Stack Management

JavaScript handles the creation and deletion of execution contexts using the **Call Stack**, ensuring proper order and flow of execution.
