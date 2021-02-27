
const factorize = (number) => {
  if (number < 4) {
    return [number]
  }

  const result = factorize(number / 2)
  result.unshift(2)
  
  return result;
}

module.exports = factorize