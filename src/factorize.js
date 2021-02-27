
const primeNumbers = [2, 3, 5]

const factorize = (number) => {
  if (primeNumbers.includes(number)) {
    return [number]
  }

  let i = 0
  while (i < primeNumbers.length - 1
    && number % primeNumbers[i] !== 0) {
    i++
  }

  const divider = primeNumbers[i]

  const result = factorize(number / divider)
  result.unshift(divider)
  
  return result;
}

module.exports = factorize