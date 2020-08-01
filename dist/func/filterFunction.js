"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_happy_1 = __importDefault(require("../db/db-happy"));
const db_sad_1 = __importDefault(require("../db/db-sad"));
// function
// create counter arrays - sad array - happy array
// compare percentages in the array
// return string or binary values
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
    // calculate ratios
    if (countHappyValues / countSadValues >= 1.5) {
        return true;
    }
    else if (countHappyValues / countSadValues <= 0.5) {
        return false;
    }
    else {
        return null;
    }
}
exports.default = filterFunction;
//# sourceMappingURL=filterFunction.js.map