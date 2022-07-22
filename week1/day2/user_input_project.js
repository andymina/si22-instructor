/**
 * PART 2 - CODE SOLUTION
 * 
 * user input is 0 zero based so grab all of the arguments
 * based on their indices.
 */
let name = process.argv[2];
let age = process.argv[3];
let sex = process.argv[4];
let dob = process.argv[5];
let phoneNum = process.argv[6];

// now that we've got the data, console.lgo
console.log("Name:", name);
console.log("Age:", age);
console.log("Sex:", sex);
console.log("DOB:", dob);
console.log("Phone No.:", phoneNum);

/**
 * EXTRA CREDIT - CODE SOLUTION
 * 
 * since the extra credit and task 2
 * both use process.argv, you'll need
 * to comment one out to run the other.
 * i've already commented out the extra
 * credit so you can run the other.
 * you can highlight lines 31 to 56
 * and press Ctrl+/ to comment/uncomment
 * code.
 */

// // grab the numbers from process argv
// let firstNum = process.argv[2];
// let secondNum = process.argv[3];

// /**
//  * all data that comes in from process.argv
//  * is of data-type string. to convert from
//  * string to a number we can use something
//  * called casting. generally, casting
//  * allows us to convert one data-type to
//  * another.
//  * 
//  * learn more about casting here:
//  * https://www.w3schools.com/js/js_type_conversion.asp
//  */
// let num1 = Number(firstNum);
// let num2 = Number(secondNum);

// // calculate the result
// let answer = num1 + num2;

// // display everything
// console.log("Calculating...");
// console.log();
// console.log("Result:");
// console.log(num1, "+", num2, "=", answer);
