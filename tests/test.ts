import filterFunction from '../func/filterFunction'
import { expect } from 'chai'
import 'mocha'

describe('filterFunction', () => {
  it('should return with true as there are 2 happy words and 1 sad word', () => {
    const result = filterFunction(
      'I was glad to go to the beach. Very glad. Even though it was a miserable day'
    )
    expect(result).to.equal(true)
  })

  it('should return with null as there are 0 valid words', () => {
    const result = filterFunction('I am delighte. This is a spelling error')
    expect(result).to.equal(null)
  })

  it('should return with true as there is 1 happy word', () => {
    const result = filterFunction('I am delighted')
    expect(result).to.equal(true)
  })

  it('should return with true as there is 1 sad word', () => {
    const result = filterFunction('I feel such sorrow')
    expect(result).to.equal(false)
  })

  it('should return with null as there are equal sad and happy words', () => {
    const result = filterFunction(
      'I am delight. I am joy. I am not miserable or sad. '
    )
    expect(result).to.equal(null)
  })
})
