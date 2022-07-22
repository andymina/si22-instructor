/**
 * PART 1 - SOLUTION
 */

/**
 * Get data into this function with parameters.
 * 
 * @param {Number} number - the number to check if even or odd
 */
function evenOrOdd(number) {
    console.log("Your number is:", number);

    /**
     * use the modulo operator to check since
     * it gives the remainder. if theres a remainder
     * when mod 2, then the number if odd. else
     * its even
     */
    if (number % 2 === 1) {
        console.log(number, "is odd");
    } else {
        console.log(number, "is even");
    }
}

/**
 * Given two numbers as parameters to get data into
 * the functionn, checks if num1 is divisible by num2
 * using the modulo operator to see if theres
 * a remainder.
 * 
 * @param {Number} num1 - the first num to check if its divsible
 * @param {Number} num2 - the num to check divisibility against
 */
function divisor(num1, num2) {
    /**
     * again use modulo to check if theres a remainder.
     * if there isn't, then num1 is divisble by num2.
     * else, its not divisible
     */
    if (num1 % num2 === 0) {
        console.log(num1, "is divisible by", num2);
    } else {
        console.log(num1, "is NOT divisible by", num2);
    }
}

/**
 * 
 * @param {string} name1 - the name of the first object
 * @param {Number} x1 - the first x coord
 * @param {Number} y1 - the first y coord
 * @param {string} name2 - the name of the second object
 * @param {Number} x2 - the second x coord
 * @param {Number} y2 - the second y coord
 */
function distanceCalculator(name1, x1, y1, name2, x2, y2) {
    // compute the lhs and rhs products
    let lhsProduct = (x2 - x1) ** 2;
    let rhsProduct = (y2 - y1) ** 2;

    // sum the lhs and rhs
    let sum = lhsProduct + rhsProduct;

    // use Math.sqrt to get the final result
    let result = Math.sqrt(sum);

    // finally print everything
    console.log(name1, "and", name2, "are", result, "meter(s) apart");
}

/**
 * Prints every element of type string to the console
 * using the typeof operator.
 * 
 * @param {Array} arr - the array to be printed
 */
function arrayHandler(arr) {
    // use a for loop to loop through all elements
    for (let idx = 0; idx < arr.length; idx++) {
        // get element type with typeof
        let elementType = typeof(arr[idx]);

        // check if its a string and print if so
        if (elementType === "string") {
            console.log(arr[idx]);
        }
    }
}