const factorize = require('./factorize')

describe('factorize should', () => {
  test.each([
    [2, [2]],
    [3, [3]],
    [4, [2,2]],
    [6, [2,3]],
    [9, [3,3]],
    [12, [2,2,3]],
    [15, [3,5]],
    [18, [2,3,3]],
    [21, [3, 7]]
  ])
  ('return factor of %i', (number, expectedResult) => {
    expect(factorize(number)).toEqual(expectedResult)
  })
})