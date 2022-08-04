// Define a master list of students to be shuffled later
let html_students = [
    "Matthew", "Jayden", "Marc", "Kareem",
    "Brandon", "Kyle", "Indigo", "Ayman",
    "Michael", "Jawad", "Mahak", "Jason",
    "Maximo", "Andy", "Mahib", "Hurera",
    "Mesbahur", "Aman", "Kurren", "James",
    "Myles", "Jiming", "Kaleb"
];

let js_students = [
    "Tobi", "Saket", "Luke", "Brayden",
    "Bryson", "Oliver", "Sean", "Sariel",
    "Seth", "Solomon", "Osi", "Abel",
    "Kingston", "Timothy", "Jahleel", "Syncere",
    "CJ", "Seun", "Juwon", "Luis",
    "Pragath", "Tony"
];

/**
 * A function that randomly shuffles an array according to the
 * Fisher-Yates algorithm introduced in 1964.
 * 
 * @param {array} arr - the array containing the data to be shuffled
 * @returns a new array with shuffled data
 */
function shuffleFisherYates(arr) {
    // create a new array containing the same data as the original
    let result = arr;

    // loop backwards from the array starting at the very last idx
    // up until idx 1
    for (let currentIdx = arr.length - 1; currentIdx > 0; currentIdx--) {
        
        // manipulate Math.random() to give us the next idx to be swapped
        let targetIdx = Math.random() * (currentIdx + 1);
        targetIdx = Math.floor(targetIdx);

        // swap arr[targetIdx] with arr[currentIdx]
        swap(result, targetIdx, currentIdx)
    }

    // return to get this data out of the function
    return result;
}

/**
 * Swaps the values of two indices in an array. For example, if my
 * original array is [3, 6, 4, 0] and I swap indices 2 and 0 my new
 * array would be [4, 6, 3, 0].
 *  
 * @param {array} arr - the array containing the values. will be updated after swapping
 * @param {number} idx1 - the index of the first item to swap
 * @param {number} idx2 - the index of the second item to swap.
 * @returns 
 */
function swap(arr, idx1, idx2) {
    // store the value at arr[idx1] in a temporary variable to not lost it
    let tempVar = arr[idx1];

    // replace the value at idx1 with the value at idx2
    arr[idx1] = arr[idx2];

    // update idx2 to be the old value of idx1 (tempVar). if we updated it
    // with the current value of idx1, we'd just have two copies of data
    // at idx2
    arr[idx2] = tempVar;

    // not returning anything here, but nice to have a return to exit my function
    return;
}

function prettyBreakout(students, studentsPerRoom, numRooms) { 
    // loop through all rooms
    for (let idx = 0; idx < numRooms; idx++) {
        // print the room number using i + 1 (start at 1 instead of 0)
        console.log("Room", idx + 1);
        console.log("==========");

        // console.log 5 students using a while loop
        let count = 0;
        while (count < studentsPerRoom) {
            // what values is this going to output on the first iteration?
            // what about the second? etc
            // is there a scenario where name will be undefined?
            let name = students[idx * studentsPerRoom + count];
            if (name !== undefined) {
                console.log(name);
            }
            
            count++;
        }

        // console.log to make an empty line
        console.log();
    }
}

// get user input for which cohort to shuffle ("html" or "js")
let userInput = process.argv[2];
let shuffled_students;

// check that the user gave us input
if (userInput === undefined) {
    console.log("Error: no input given");
} else if (userInput === "html") {
    // shuffle the html students
    shuffled_students = shuffleFisherYates(html_students);
} else if (userInput === "js") {
    // shuffle the js students
    shuffled_students = shuffleFisherYates(js_students);
} else if (userInput === undefined) {
    console.log("Error: cohort must be specified");
    abort();
} 
else { // handle all other cases that aren't html and js
    console.log("Error: unexpected input");
}

let studentsPerRoom = Number(process.argv[3]);
let numRooms = shuffled_students.length / studentsPerRoom;
numRooms = Math.ceil(numRooms);
prettyBreakout(shuffled_students, studentsPerRoom, numRooms);
