/**
 * PART 1b - SOLUTION
 */
// get the user input from process.argv
// and change it to number with casting
let count = Number(process.argv[2]);
// this loop will run as long as count is
// greater than or equal to 0
while (count >= 0) {
    console.log(count);
    count--;
}

/**
 * PART 3b - SOLUTION
 */

// generate 2 random numbers
let randNum1 = Math.random() * 11;
let randNum2 = Math.random() * 11;
randNum1 = Math.floor(randNum1);
randNum2 = Math.floor(randNum2);

// keep track of the number of tries
// start at 1 try since we've already generated
let tries = 1;
while (randNum1 !== randNum2) {
    // console log results
    console.log("1st num:", randNum1, "2nd num:", randNum2);

    // generate new randomNumbers
    randNum1 = Math.random() * 11;
    randNum2 = Math.random() * 11;
    randNum1 = Math.floor(randNum1);
    randNum2 = Math.floor(randNum2);

    // update tries
    tries++;
}
console.log("Took", tries, "tries! End loop.");