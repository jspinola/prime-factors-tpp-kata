
const factorize = (number) => {
  if (number < 4) {
    return [number]
  }

  let divider;
  if (number % 2 === 0) {
    divider = 2
  }

  if (number % 3 === 0) {
    divider = 3
  }
  const result = factorize(number / divider)
  result.push(divider)
  
  return result;
}

module.exports = factorize