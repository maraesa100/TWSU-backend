import filterFunction from '../func/filterFunction'
import { expect } from 'chai'
import 'mocha'

describe('filterFunction', () => {
  it('should return with HAPPY as there are 2 happy words and 1 sad word', () => {
    const result = filterFunction(
      'I was glad to go to the beach. Very glad. Even though it was a miserable day'
    )
    expect(result.happyOrSad).to.equal('happy')
  })

  it('should return with NULL as there are 0 valid words', () => {
    const result = filterFunction('I am delighte. This is a spelling error')
    expect(result.happyOrSad).to.equal(null)
  })

  it('should return with HAPPY as there is 1 happy word', () => {
    const result = filterFunction('I am delighted')
    expect(result.happyOrSad).to.equal('happy')
  })

  it('should return with SAD as there is 1 sad word', () => {
    const result = filterFunction('I feel such sorrow')
    expect(result.happyOrSad).to.equal('sad')
  })

  it('should return with NULL as there are equal sad and happy words', () => {
    const result = filterFunction(
      'I am delight. I am joy. I am not miserable or sad. '
    )
    expect(result.happyOrSad).to.equal(null)
  })

  it('should return with NULL as there are equal sad and happy words', () => {
    const result = filterFunction(
      'I am delight. I am joy. I am not miserable or sad. '
    )
    expect(result.numericalValue).to.equal(null)
  })

  it('should return with 2 as there are twice as many sad as happy words, but one contains a typo', () => {
    const result = filterFunction(
      'I am delight, delighte, glad, joy, joyful. I am not disappointed, miserable'
    )
    expect(result.numericalValue).to.equal(2)
  })
})
