/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */

// Step 1
console.log(pokemon);
console.log(pokemon[20].name);
console.log(pokemon[20].type[0]);
console.log(pokemon[18]);

/** @TODO - Update the page data using a single pokemon */
/**  
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the 
 *          pokemon's base stats
 */

// Step 2
// Get a single Pokémon from the data
let turtwig = pokemon[9];
console.log(turtwig);

// // Get a reference to the heading and set it to the pokemon's id (dex #) and name
// let nameHeading = document.querySelector("#poke_name");
// nameHeading.innerHTML = `#${turtwig.id} - ${turtwig.name}`;

// // Get a reference to the image and set the src to the pokemon's image ([0] is standard, [1] is shiny)
// let pokeImg = document.querySelector("#poke_img");
// pokeImg.src = turtwig.image[0];

// // Set the type heading just as before--since Turtwig is a single-type pokemon, we only need one
// let types = document.querySelector("#poke_types");
// types.innerHTML = `${turtwig.type[0]}-Type`;

// // The scale is purely visual, to make the stat bars more visibly distinct
// let scale = 4;

// // Get a list of stat bars and loop through them to change their width
// let statDivs = document.querySelectorAll("#poke_stats div");
// for(let i = 0; i < statDivs.length; i++){
//     // Get the id of the current stat bar, which we can use to get Turtwig's corresponding stat
//     let stat = statDivs[i].id;
//     // Set the current stat bar's width to Turtwig's corresponding base stat * scale
//     // This uses bracket notation for accessing an object's properties--since the contents of the brackets are strings, we can use a variable
//     statDivs[i].style["width"] = `${turtwig.base[stat] * scale}px`;
// }

/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */

// Step 3--what if this was *way more flexible*
// Get a reference to the random button
let randomBtn = document.querySelector("#random_btn");
// Add a click eventListener to the random button
randomBtn.addEventListener("click", pickRandomStarter);

function pickRandomStarter(){
    // Generate a random index, as usual
    let starterIndex = Math.random();
    starterIndex *= pokemon.length;
    starterIndex = Math.floor(starterIndex);

    // Use the random index to get a Pokémon object from the pokemon array
    let randomStarter = pokemon[starterIndex];

    // Get a reference to the heading and set it to the random pokemon's id (dex #) and name
    let nameHeading = document.querySelector("#poke_name");
    nameHeading.innerHTML = `#${randomStarter.id} - ${randomStarter.name}`;

    // Get a reference to the image and set the src to the pokemon's image ([0] is standard, [1] is shiny)
    let pokeImg = document.querySelector("#poke_img");
    // Bonus: Add a small chance for a shiny!
    let shinyChance = 0.001;
    // Math.random() gives us a random number in the range [0, 1)
    // If our shinyChance is 0.1, for instance, we'll have a roughly 10% (1/10) chance to get a random value below our shiny chance
    // Thus, a 10% shiny rate and a 90% non-shiny rate!
    if(Math.random() > shinyChance){
        // The image property is an array with two indices; the first (index 0) is our standard image...
        pokeImg.src = randomStarter.image[0];
        // Reset the background image, in case we've seen a shiny already
        pokeImg.style["background-image"] = "none";
    } else {
        // ...while the second (index 1) is our shiny image
        pokeImg.src = randomStarter.image[1];
        // Add a sparkly background image to make the shiny Pokémon more noticeable
        pokeImg.style["background-image"] = "url(\"images/shiny-bg.png\")";
        // Set the background-size CSS property to "contain"
        // This scales the background image so the entire image fits, otherwise it would get cut off (or be too small)
        pokeImg.style["background-size"] = "contain";
    }


    // Set the type heading just as before--now we need to check for dual-types!
    let types = document.querySelector("#poke_types");
    // If type[2] is "none" (thus, the Pokémon has no secondary type), we only show the first type
    if(randomStarter.type[1] === "none") {
        types.innerHTML = `${randomStarter.type[0]}-Type`;
    // Otherwise, we need to show both types! (Shout-out to Bulbasaur and Rowlet for being the only dual-type starters)
    } else {
        types.innerHTML = `${randomStarter.type[0]}/${randomStarter.type[1]}-Type`;
    }

    // The scale is purely visual--to make the stat bars visible
    let scale = 4;

    // Get each stat div in turn and set its width to the pokemon's respective base stat * scale
    // This code is explained in the comments above, starting at line 39
    let statDivs = document.querySelectorAll("#poke_stats div");
    for(let i = 0; i < statDivs.length; i++){
        let stat = statDivs[i].id;
        statDivs[i].style["width"] = `${randomStarter.base[stat] * scale}px`;
    }
}