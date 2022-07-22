/**
 * PART 1 - SOLUTION
 */

/**
 * Combines two strings using the + sign which
 * performs string concatenation.
 * 
 * @param {String} str1 - the first string to add
 * @param {String} str2 - the second string to add
 * @returns {String} the combined string of str1 and str2
 */
function combineStrings(str1, str2) {
    //combine the strings with string concatenation
    let combined = str1 + str2;

    // get data out of the function with return
    return combined;
}

// test code given in the code along
let s1 = combineStrings("ABC", "DEF");
console.log(s1);

let s2 = combineStrings("poke", "mon");
console.log(s2);

let s3 = combineStrings("friend", "ship");
console.log(s3);

let s4 = combineStrings("1", "2");
console.log(s4);

/**
 * PART 3 - SOLUTION
 */

/**
 * 
 * @param {Number} num1 - the first number
 * @param {Number} num2 - the second number
 * @param {String} operator - the math operator used
 * @param {number} answer - the result after applying
 * the operator to num1 and num2
 * @returns {Boolean} true if the answer is correct. false otherwise
 */
function checkAnswer(num1, num2, operator, answer) {
    // declare a result variable to check later
    let result;

    // perform different math depending on the operator given
    if (operator === "+") {
        // add numbers here
        result = num1 + num2;
    } else if (operator === "-") {
        // subtract numbers here
        result = num1 - num2;
    }

    /**
     * check if the user answer matches my answer.
     * if so, theyve gotten it right and return true.
     * else, theyve gotten it wrong and return false.
     */
    if (answer === result) {
        return true;
    } else {
        return false;
    }
}

/**
 * PART 4 - SOLUTION
 */


function oddNumberCatcher(arr) {
    // loop through all elements of the array
    for (let idx = 0; idx < arr.length; idx++) {
        // get the current element
        let currentNum = arr[idx];

        // check if its odd with modulo
        if (currentNum % 2 == 1) {
            // returning here would leave the loop
            // and end the function
            return idx;
        }
    }

    /**
     * if we make it all the way through the loop
     * and we haven't exited bc of the return on
     * line 87, we can be sure there aren't any
     * odd numbers. 
     */
    return -1;
}