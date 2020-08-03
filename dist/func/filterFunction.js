"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_happy_1 = __importDefault(require("../db/db-happy"));
const db_sad_1 = __importDefault(require("../db/db-sad"));
// The following function accepts a string, strips it, and turns it into an array
// It then determines whether the sentences in the string make it 'happy' or 'sad'
// It returns an object: a string with 'happy', 'sad', or 'null' and a
// number OR null entry showing how happy or sad the sentence is on a scale
function filterFunction(userInput) {
    //force to lowercase, remove all punctuation, split into an array of strings
    var inputAsArray = userInput
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .split(' ');
    // create counter variables
    var countHappyValues = 0;
    var countSadValues = 0;
    // loop through array of user input values and assign happy and sad
    inputAsArray.forEach(element => {
        // if the element is within the happyValues list, add to the count happy values variable
        db_happy_1.default.indexOf(element) > -1 ? countHappyValues++ : null;
        // if the element is within the sadValues list, add to the count happy values variable
        db_sad_1.default.indexOf(element) > -1 ? countSadValues++ : null;
    });
    // calculate ratios & return object
    var returnableObject = {
        happyOrSad: null,
        numericalValue: null
    };
    // handling ratio calculation if 0 or only 1 word is provided
    if (countHappyValues === 1 && countSadValues === 0) {
        returnableObject.happyOrSad = 'happy';
        returnableObject.numericalValue = 100;
        return returnableObject;
    }
    else if (countHappyValues === 0 && countSadValues === 0) {
        returnableObject.numericalValue = null;
        return returnableObject;
    }
    else if (countHappyValues === 0 && countSadValues === 1) {
        returnableObject.happyOrSad = 'sad';
        returnableObject.numericalValue = 100;
        return returnableObject;
    }
    // handling all other cases where words are provided
    if (countHappyValues / countSadValues >= 1.5) {
        returnableObject.happyOrSad = 'happy';
        returnableObject.numericalValue =
            (countHappyValues / (countHappyValues + countSadValues)) * 100;
        return returnableObject;
    }
    else if (countHappyValues / countSadValues <= 0.5) {
        returnableObject.happyOrSad = 'sad';
        returnableObject.numericalValue =
            (countSadValues / (countSadValues + countHappyValues)) * 100;
        return returnableObject;
    }
    else {
        return returnableObject;
    }
}
exports.default = filterFunction;
//# sourceMappingURL=filterFunction.js.map