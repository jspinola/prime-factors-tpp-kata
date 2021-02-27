
const primeNumbers = [2, 3]

const factorize = (number) => {
  if (number < 4) {
    return [number]
  }

  let i = 0
  while (i < primeNumbers.length - 1
    && number % primeNumbers[i] !== 0) {
    i++
  }
  if (i >= primeNumbers.length) {
    return []
  }

  const divider = primeNumbers[i]

  const result = factorize(number / divider)
  result.unshift(divider)
  
  return result;
}

module.exports = factorize