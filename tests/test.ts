import filterFunction from '../func/filterFunction'
import { expect } from 'chai'
import 'mocha'

describe('filterFunction', () => {
  it('should return with 200 - or 200% more happy words than sad words', () => {
    const result = filterFunction(
      'I am feeling sad, but I am delighted at this delightful meal'
    )
    expect(result).to.equal(200)
  })

  it('should return with unknown', () => {
    const result = filterFunction('I am delighte. This is a spelling error')
    expect(result).to.equal(null)
  })

  it('should return with 100', () => {
    const result = filterFunction(
      'I am delight. I am joy. I am not miserable or sad. '
    )
    expect(result).to.equal(100)
  })
})
