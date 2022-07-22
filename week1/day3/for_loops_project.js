/**
 * PART 1b - SOLUTION
 */
// get user input and change data type 
// with casting
let count = Number(process.argv[2]);
for (let start = count; start >= 0; start--) {
    console.log(count);
}

/**
 * PART 2 - SOLUTION
 */
let students = [
    "Andy", "Joshua", "Neev",
    "Kathrine", "Khye", "Danny Rojas"
];
// start at index 0 and go until students.length
for (let idx = 0; idx < students.length; idx++) {
    console.log("Instructors -", students[idx]);
}

/**
 * EXTRA CREDIT
 */
let bigArray = [
    'S', 'Z', 'A', 'H', 'G', 'B', 'Y', 'I', 'A', 'N', 'T', 'V', 'C', 'Q', 'C', 'P',
    'D', 'Q', 'Q', 'K', 'T', 'N', 'J', 'V', 'U', 'Q', 'Q', 'C', 'V', 'P', 'A', 'G',
    'Z', 'A', 'R', 'U', 'A', 'P', 'M', 'B', 'R', 'A', 'R', 'O', 'F', 'I', 'G', 'F',
    'O', 'L', 'B', 'R', 'V', 'Y', 'P', 'J', 'H', 'O', 'S', 'A', 'A', 'O', 'F', 'T',
    'E', 'S', 'J', 'W', 'T', 'B', 'R', 'R', 'Y', 'B', 'O', 'A', 'O', 'S', 'Y', 'U',
    'W', 'E', 'Q', 'M', 'O', 'F', 'H', 'W', 'K', 'G', 'Y', 'F', 'A', 'W', 'S', 'U',
    'O', 'T', 'C', 'D', 'B', 'Z', 'A', 'H', 'G', 'B', 'Y', 'I', 'A', 'N', 'T', 'V',
    'C', 'Q', 'C', 'P', 'D', 'Q', 'Q', 'K', 'E', 'N', 'J', 'V', 'U', 'Q', 'Q', 'C',
    'V', 'P', 'A', 'G', 'Z', 'A', 'R', 'U', 'A', 'P', 'M', 'B', 'R', 'A', 'R', 'O',
    'F', 'I', 'G', 'F', 'O', 'L', 'B', 'R', 'V', 'Y', 'P', 'J', 'H', 'O', 'S', 'A',
    'R', 'O', 'F', 'T', 'E', 'S', 'J', 'W', 'T', 'B', 'R', 'R', 'Y', 'B', 'O', 'A',
    'O', 'S', 'Y', 'U', 'Y', 'E', 'Q', 'M', 'O', 'F', 'H', 'W', 'K', 'G', 'Y', 'F',
    'A', 'W', 'S', 'U', 'O', 'T', 'C', 'D'
];
// instead of idx++ to increment 1 we increment 20
for (let idx = 0; idx < bigArray.length; idx += 20) {
    console.log(bigArray[idx]);
}
