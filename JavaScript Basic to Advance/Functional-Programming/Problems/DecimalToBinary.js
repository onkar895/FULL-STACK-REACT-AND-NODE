function decimal_to_binary (n) {
  // Convert string to number and then to binary, removing '0b' prefix
  let binary = Number(n).toString(2)
  process.stdout.write(`${n} in binary: ${binary}`)
}

decimal_to_binary('33')

console.log('\n')

// Alternative manual solution:
function decimal_to_binary (n) {
  let binary = ''
  let num = Number(n)

  while(num > 0) {
    binary = (num % 2) + binary
    num = Math.floor(num / 2)
  }
  process.stdout.write(`${n} in binary: ${binary}`)
}

decimal_to_binary('6')
