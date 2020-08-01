import happyValues from '../db/db-happy'
import sadValues from '../db/db-sad'
import { KeyObjectType } from 'crypto'

// function
// create counter arrays - sad array - happy array
// compare percentages in the array
// return string or binary values

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
    happyOrSad: null,
    numericalValue: null
  }

  // handling ratio calculation if 0 or only 1 word is provided

  if (countHappyValues === 1 && countSadValues === 0) {
    returnableObject.happyOrSad = 'happy'
    returnableObject.numericalValue = countHappyValues / countSadValues
    return returnableObject
  } else if (countHappyValues === 0 && countSadValues === 0) {
    return returnableObject
  } else if (countHappyValues === 0 && countSadValues === 1) {
    returnableObject.happyOrSad = 'sad'
    returnableObject.numericalValue = countSadValues / countHappyValues
    return returnableObject
  }

  // handling all other cases where words are provided

  if (countHappyValues / countSadValues >= 1.5) {
    returnableObject.happyOrSad = 'happy'
    returnableObject.numericalValue = countHappyValues / countSadValues
    return returnableObject
  } else if (countHappyValues / countSadValues <= 0.5) {
    returnableObject.happyOrSad = 'sad'
    returnableObject.numericalValue = countSadValues / countHappyValues
    return returnableObject
  } else {
    return returnableObject
  }
}

export default filterFunction
