const factorize = require('./factorize')

describe('factorize should', () => {
  it('return factor of 2', () => {
    expect(factorize(2)).toEqual([2])
  })
})
