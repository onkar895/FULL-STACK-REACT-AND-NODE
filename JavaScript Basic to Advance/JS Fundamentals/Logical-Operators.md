# JavaScript Logical Operators

Logical operators in JavaScript are used to combine multiple conditions and return a Boolean value based on the evaluation of those conditions. There are four main logical operators:

- **AND (&&)**
- **OR (||)**
- **NOT (!)**
- **Nullish Coalescing (??)**

Let's explore these operators with examples.

## AND (&&) Operator

The AND operator returns `true` if all the conditions are `true`; otherwise, it returns `false`.

### Example:

We have scores in Physics, Chemistry, and Mathematics, and we want to check if a student is eligible for engineering based on their scores.

```javascript
const physics = 90;
const maths = 95;
const chemistry = 88;
const biology = 96;

if (physics > 85 && maths > 85 && chemistry > 85) {
  console.log("You are eligible for engineering.");
} else {
  console.log("You are not eligible for engineering.");
}
```

**Output:**

```
You are eligible for engineering.
```

In this example, the message "You are eligible for engineering." will be printed because all the scores are greater than 85.

## OR (||) Operator

The OR operator returns `true` if at least one of the conditions is `true`; otherwise, it returns `false`.

### Example:

We check if a student is eligible for engineering if at least one of the scores is greater than a specified value.

```javascript
const physics = 90;
const maths = 95;
const chemistry = 88;
const biology = 96;

if (physics > 90 || maths > 85 || chemistry > 89) {
  console.log("You are eligible for engineering.");
} else {
  console.log("You are not eligible for engineering.");
}
```

**Output:**

```
You are eligible for engineering.
```

In this example, the message "You are eligible for engineering." will be printed because the math score is greater than 85.

## NOT (!) Operator

The NOT operator reverses the Boolean value of the operand. If the operand is `true`, it returns `false`, and if the operand is `false`, it returns `true`.

### Example:

```javascript
const isStudentEligible = false;

if (!isStudentEligible) {
  console.log("You are not eligible.");
} else {
  console.log("You are eligible.");
}
```

**Output:**

```
You are not eligible.
```

In this example, the message "You are not eligible." will be printed because the `isStudentEligible` variable is `false`, and the NOT operator reverses it to `true`.

## Nullish Coalescing (??) Operator

The Nullish Coalescing operator returns the right-hand operand when the left-hand operand is `null` or `undefined`; otherwise, it returns the left-hand operand.

### Example:

```javascript
const score = null;
const defaultScore = 50;
const finalScore = score ?? defaultScore;

console.log(finalScore); // Output: 50
```

**Output:**

```
50
```

In this example, since `score` is `null`, the `defaultScore` is assigned to `finalScore`.

## Combining Multiple Conditions

We can combine multiple conditions using logical operators to create complex conditional logic.

### Example:

Checking eligibility for different grades based on total marks.

```javascript
let totalMarks = 60;

const result = totalMarks < 40 ? "You need to work hard." : totalMarks < 60 ? "B grade" : totalMarks < 75 ? "A grade" : totalMarks < 85 ? "A+ grade" : "Genius";

console.log(result);
```

**Output:**

```
A grade
```

In this example, the message will vary based on the value of `totalMarks`.

## Practical Exercise

Let's create a scenario where we use logical operators to check the eligibility of a student for different competitions based on their age and grade.

### Example:

```javascript
const age = 25;
const grade = 9;

if (age > 20 && age < 30) {
  console.log("You can play domestic cricket.");
} else {
  console.log("You cannot play domestic cricket.");
}

if (grade >= 8 && grade <= 10) {
  console.log("You are eligible for the competition.");
} else {
  console.log("You are not eligible for the competition.");
}
```

**Output:**

```
You can play domestic cricket.
You are eligible for the competition.
```

### Combining with Ternary Operators:

```javascript
const age = 25;
const grade = 9;
const ageResult = age > 20 && age < 30 ? "You can play domestic cricket." : "You cannot play domestic cricket.";
const gradeResult = grade >= 8 && grade <= 10 ? "You are eligible for the competition." : "You are not eligible for the competition.";

console.log(ageResult);
console.log(gradeResult);
```

**Output:**

```
You can play domestic cricket.
You are eligible for the competition.
```
