import happyValues from '../db/db-happy'
import sadValues from '../db/db-sad'

// function
// create counter arrays - sad array - happy array
// loop through all words provided and count
// compare percentages in the array
// return string or binary values

function filterFunction(userInput: string): number | null {
  //force to lowercase, remove all punctuation, split into an array of strings
  var inputAsArray = userInput
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(' ')
  //   console.log('DEBUGGING' + inputAsArray[0])

  // create counter variables

  var countHappyValues = 0
  var countSadValues = 0

  // loop through array of user input values and assign happy and sad

  inputAsArray.forEach(element => {
    // if the element is within the happyValues list, add to the count happy values variable

    happyValues.indexOf(element) > -1 ? countHappyValues++ : null

    // if the element is within the sadValues list, add to the count happy values variable

    sadValues.indexOf(element) > -1 ? countSadValues++ : null

    console.log('DEBUGGING HAPPY VALUES' + countHappyValues)
    console.log('DEBUGGING HAPPY VALUES' + countSadValues)

    // console.log('DEBUGGING' + element)
  })

  return null
}

export default filterFunction
