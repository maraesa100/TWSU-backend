import filterFunction from '../func/filterFunction'
import { expect } from 'chai'
import 'mocha'

describe('filterFunction', () => {
  it('should return with 200 - or 200% more happy words than sad words', () => {
    const result = filterFunction(
      'Hey!!!!!, I am feeling  a little sad, but I am delighted at this delightful meal'
    )
    expect(result).to.equal(200)
  })

  it('should return with unknown', () => {
    const result = filterFunction('I am delighte. This is a spelling error')
    expect(result).to.equal(null)
  })

  it('should return with 1', () => {
    const result = filterFunction('I am delighted. This is not spelling error')
    expect(result).to.equal(1)
  })

  it('should return with 2', () => {
    const result = filterFunction(
      'I am delighted. So delighted. This is not spelling error'
    )
    expect(result).to.equal(2)
  })

  it('should return with 100', () => {
    const result = filterFunction(
      'I am delight. I am joy. I am not miserable or sad. '
    )
    expect(result).to.equal(100)
  })
})
