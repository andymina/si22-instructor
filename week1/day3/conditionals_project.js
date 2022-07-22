/**
 * PART 2 - CODE SOLUTION
 * 
 * Use Math.random() to generate a random
 * decimal between 0 and 1 (exclusive). We
 * then adjust this with interval math to
 * get the desired interval [0, 101) integer.
 */
let randDec = Math.random(); // [0, 1) decimal
randDec = randDec * 101; // [0, 101) deicmal
let randNum = Math.floor(randDec); // use floor to always round down

// get the user input with process.argv
let userInput = process.argv[2];
// convert it to a number with casting
userInput = Number(userInput);

// print to guess and random number to console
console.log("Your guess:", userInput);
console.log("Random number generated:", randNum);
console.log();

/**
 * use conditions to compare userInput to randNum.
 * if the condition inside of the if-statement
 * is true, the code inside of the curly braces
 * will be executed.
 */
if (userInput < randNum) { // check if userInput is less than randNum
    console.log("Your guess is TOO LOW!");
} else if (userInput > randNum) { // check if userInput is greater than randNum
    console.log("Your guess is TOO HIGH!");
} else {
    /**
     * if userInput is less/greater than randNum, one of the first two
     * statements will execute. if the guess ISNT less/greater than
     * randNum then it must be EQUAL to randNum. Since this is the
     * last case to account for, i can just use an else-statement to save
     * on code
     */
    console.log("YOU GUESSED RIGHT!!");
}

/**
 * PART 3 - CODE SOLUTION
 * 
 * you will need to comment out the part 2 code and
 * uncomment this code to run it.
 */
// let score = 0;
// // let userInput = process.argv[3];

// /**
//  * check the userInput with process.argv and 
//  * compare it using conditions. use triple
//  * equals to test if two things have the
//  * same value.
//  */
// if (userInput === "A") {
//     // subtract 1 from score
//     score = score - 1;
//     console.log("Wrong answer!");
// } else if (userInput === "B") {
//     // subtract 1 from score
//     score = score - 1;
//     console.log("Wrong answer!");
// } else if (userInput === "C") {
//     // add 5 to score
//     score = score + 1;
//     console.log("RIGHT ANSWER WOHOO");
// } else if (userInput === "D") {
//     //minus 50
//     score = score - 50;
//     console.log("Bad bad bad");
// } else if (userInput === "I.KNOW.THE.SECRET") {
//     score = score + 1000000;
//     console.log("Welcome to NIRVANA");
// } else {
//     console.log("Invalid response...");
// }