// Sum of all numbers from 1 to 20

function calculateSum (x, y) {
  let sum = 0
  for (let i = x; i <= y; i++) {
    sum += i
  }
  return sum
}

const result = calculateSum(1, 20)
console.log(result)

const output = calculateSum(1, 100)
console.log(output)
