/**
 * The main function to play our game! Randomly selects:
 *      a house for the player to live int
 *      the number of countries the player will travel to
 *      
 * 
 * @returns {string} the players future/outcome!
 */
function mash() {
    // get the future outcomes for the plater
    let futureHome = getHome();
    let futurePet = getPet();
    let futureTravelCount = getTravelCount();
    let futureSpouse = getSpouse();
    let futureCar = getCar();

    // check if the player got lucky and print if they did
    if (futureSpouse === "Sabina" && futureTravelCount >= 5) {
        console.log("You got really lucky! :)");
    }

    // return the player's future with string concatenation
    return "You will live in a " + futureHome +
        ", with your pet " + futurePet +
        ", travel to " + futureTravelCount + " countries" +
        ", marry " + futureSpouse +
        ", and drive a " + futureCar + "!";
}

/**
 * Generates a random whole number between [0, upper).
 * 
 * @param {number} upper the upper exclusive limit of the random interval
 * @returns {number} the random number generated
 */
function randNumGenerator(upper) {
    // get a random number between [0, 1) decimal
    let randDec = Math.random();

    // change the interval by multiplying with shorthand [0, upper) decimal
    randDec *= upper;

    // floor it to get integer
    let randNum = Math.floor(randDec);

    // return to get data out of this function
    return randNum;
}

/**
 * Randomly picks one of ["Mansion", "Castle", "Shack", "House"] for the
 * player to live in.
 * 
 * @returns {str} the random choice
 */
function getHome() {
    // array of possible homes
    let homes = ["Mansion", "Castle", "Shack", "House"];
    
    // grab the first user argument based on 0 indexing
    let userInput = process.argv[2];

    // only add userInput to the homes array if its not undefined
    if (userInput !== undefined) {
        homes.push(userInput);
    }

    /**
     * generate a random number to use as the index. also use homes.length as
     * the upper exclusive limit so we don't generate an index that doesn't
     * exist. this would give us undefined
     */
    let randomIdx = randNumGenerator(homes.length);

    // return the value at that index
    return homes[randomIdx];
}

/**
 * Randomly picks how many countries the player will travel to.
 * 
 * @returns {number}
 */
function getTravelCount() {
    // return a random number between [0, 101)
    return randNumGenerator(101);
}

/**
 * Randomly picks one of [
 *      "Kurama (Naruto)", "Chopper (One Piece)",
 *      "Ryuk (Deathnote)", "Superdog"
 *  ] for the player to own as a pet.
 * 
 * @returns {str} the random choice
 */
function getPet() {
    // array of possible pets
    let pets = [
        "Kurama (Naruto)", "Chopper (One Piece)",
        "Ryuk (Deathnote)", "Superdog"
    ];

    // grab the second user argument based on 0 indexing
    let userInput = process.argv[3];

    /**
     * use my randNumGenerator function to generate a randomChoice,
     * either 0 or 1 making it a 50/50 chance. if the function returns
     * 0 then ill use the user input. else if the function returns 1
     * then ill use my array.
     */
    let randomChoice = randNumGenerator(2); // [0, 2)

    // make sure userInput isn't undefined if the computer chooses 0!!
    if (randomChoice === 0 && userInput !== undefined) {
        return userInput;
    }

    // since there aren't any other possibilites besides 0 and 1 i can
    // use an else statement and reduce the amount of code i need to write
    else {
        /**
         * generate a random number to use as the index. also use pets.length as
         * the upper exclusive limit so we don't generate an index that doesn't
         * exist. this would give us undefined
         */
        let randomIdx = randNumGenerator(pets.length);

        // return the value at that index
        return pets[randomIdx];
    }
}

/**
 * Randomly picks one of the spouses below for the player
 * to marry.
 * 
 * @returns {str} the name of the spouse
 */
function getSpouse() {
    // possible spouses
    let spouses = [
        "Sabina", "Zendaya", "Billie Eilish",
        "Jada Pinkett Smith", "Beyonce"
    ];

    /**
     * generate a random number to use as the index. also use spouses.length as
     * the upper exclusive limit so we don't generate an index that doesn't
     * exist. this would give us undefined
     */
     let randomIdx = randNumGenerator(spouses.length);

     // return the value at that index
     return spouses[randomIdx];
}

/**
 * Randomly picks one of the spouses below for the player
 * to drive.
 * 
 * @returns {str} the type of car
 */
function getCar() {
    // possible cars
    let cars = ["Lambo", "Flintstones", "2003 Toyota Camry", "Batmobile"];

    /**
     * generate a random number to use as the index. also use cars.length as
     * the upper exclusive limit so we don't generate an index that doesn't
     * exist. this would give us undefined
     */
     let randomIdx = randNumGenerator(cars.length);

     // return the value at that index
     return cars[randomIdx];
}

// actually run the mash game and print the user's result
let result = mash();
console.log(result);