function createPhoneNumber(numbers){
  const numToString = numbers.join('')
  const b1 = numToString.slice(0, 3)
  const b2 = numToString.slice(3, 6)
  const b3 = numToString.slice(6)
  return `(${b1}) ${b2}-${b3}`
}
