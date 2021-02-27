const factorize = require('./factorize')

describe('factorize should', () => {
  it('return factor of 2', () => {
    expect(factorize(2)).toEqual([2])
  })

  it('return factor of 3', () => {
    expect(factorize(3)).toEqual([3])
  })
})
