import happyValues from '../db/db-happy'
import sadValues from '../db/db-sad'
import { KeyObjectType } from 'crypto'

// The following function accepts a string, strips it, and turns it into an array
// It then determines whether the sentences in the string make it 'happy' or 'sad'
// It returns an object: a string with 'happy', 'sad', or 'null' and a
// number OR null entry showing how happy or sad the sentence is on a scale

function filterFunction(userInput: string): any {
  //force to lowercase, remove all punctuation, split into an array of strings
  var inputAsArray = userInput
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(' ')

  // create counter variables

  var countHappyValues = 0
  var countSadValues = 0

  // loop through array of user input values and assign happy and sad

  inputAsArray.forEach(element => {
    // if the element is within the happyValues list, add to the count happy values variable

    happyValues.indexOf(element) > -1 ? countHappyValues++ : null

    // if the element is within the sadValues list, add to the count happy values variable

    sadValues.indexOf(element) > -1 ? countSadValues++ : null
  })

  // calculate ratios & return object

  var returnableObject = {
    happyOrSad: 'unknown',
    numericalValue: null
  }

  // handling ratio calculation if 0 or only 1 word is provided

  if (countHappyValues === 1 && countSadValues === 0) {
    returnableObject.happyOrSad = 'happy'
    returnableObject.numericalValue = 100
    return returnableObject
  } else if (countHappyValues === 0 && countSadValues === 0) {
    return returnableObject
  } else if (countHappyValues === 0 && countSadValues === 1) {
    returnableObject.happyOrSad = 'sad'
    returnableObject.numericalValue = 100
    return returnableObject
  }

  // handling all other cases where words are provided

  if (countHappyValues / countSadValues >= 1.5) {
    returnableObject.happyOrSad = 'happy'
    returnableObject.numericalValue =
      (countHappyValues / (countHappyValues + countSadValues)) * 100
    return returnableObject
  } else if (countHappyValues / countSadValues <= 0.5) {
    returnableObject.happyOrSad = 'sad'
    returnableObject.numericalValue =
      (countSadValues / (countSadValues + countHappyValues)) * 100
    return returnableObject
  } else {
    returnableObject.happyOrSad = 'unknown'
    return returnableObject
  }
}

export default filterFunction
