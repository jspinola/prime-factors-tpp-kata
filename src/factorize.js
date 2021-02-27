
const primeNumbers = [2, 3]

const factorize = (number) => {
  if (number < 4) {
    return [number]
  }

  let divider;
  if (number % primeNumbers[0] === 0) {
    divider = primeNumbers[0]
  }

  if (number % primeNumbers[1] === 0) {
    divider = primeNumbers[1]
  }
  const result = factorize(number / divider)
  result.push(divider)
  
  return result;
}

module.exports = factorize