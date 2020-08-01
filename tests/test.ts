import filterFunction from '../func/filterFunction'
import { expect } from 'chai'
import 'mocha'

describe('filterFunction', () => {
  it('should return a percentage or null', () => {
    const result = filterFunction('testing')
    expect(result).to.equal(null)
  })
})
