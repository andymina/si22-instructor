/**
 * @NOTE this function takes one parameter, the generation number,
 * and returns an object containing two props:
 *      - lower: the lower inclusive bound of the Pokedex ids for this
 *        generation
 *      - upper: the upper exclusive bound of the Pokedex ids for this
 *        generation
 */
function getGenerationRange(genNum) {
    /**
     * @NOTE using a switch statement here which is basically a
     * glorified if-statement. depending on the value that's passed in
     * the specified case will run. learn more about switch statements here:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
     */
    switch (genNum) {
        case 1:
            return { lower: 1, upper: 152 };
        
        case 2:
            return { lower: 152, upper: 252 };

        case 3:
            return { lower: 252, upper: 387 };

        case 4:
            return { lower: 387, upper: 494 };

        case 5:
            return { lower: 494, upper: 650 };

        case 6:
            return { lower: 650, upper: 722 };

        case 7:
            return { lower: 722, upper: 810 };

        case 8:
            return { lower: 810, upper: 906 };

        case 0:
            return { lower: 1, upper: 906 };
    }
}

/**
 * @NOTE i moved the code to update the UI from out json code along into a function.
 * since JSON and objects are interchangeable in JS it was extremely flexible. the
 * only major difference is that widths of stat bars are normalized to the 1-255
 * range since pokemon like Blissey have a max base stat.
 */
 function updateUI(pokemonObj) {
    // Get a reference to the heading and set it to the pokemon's id (dex #) and name
    let nameHeading = document.querySelector("#poke_name");
    nameHeading.innerHTML = `#${pokemonObj.id} - ${pokemonObj.name.toUpperCase()}`;

    // Get a reference to the image and set the src to the pokemon's image
    let pokeImg = document.querySelector("#poke_img");
    pokeImg.src = pokemonObj.image;

    // Get a list of stat bars
    let statDivs = document.querySelectorAll("#poke_stats div");

    // and loop through them to change their width
    for (let i = 0; i < statDivs.length; i++) {
        // Get the id of the current stat bar, which we can use to get the pokemons's corresponding stat
        let stat = statDivs[i].id;

        // Set the current stat bar's width to normalized base state width
        // This uses bracket notation for accessing an object's properties--since the contents of the
        // brackets are strings, we can use a variable
        statDivs[i].style["width"] = `${pokemonObj.base[stat] / 255 * 100}%`;
    }
}

/**
 * @TODO create a function called randNumGenerator which takes two parameters
 * (lower and upper) and returns a random integer  between [lower, upper)
 */
function randNumGenerator(lower, upper) {
    // the number of possible choices to make
    let possibleChoices = upper - lower;

    // generate a number between [0, possibleChoices)
    let result = Math.random() * possibleChoices;

    // shift the interval to start at lower
    result += lower;

    // return the floored result to get an integer
    return Math.floor(result);
}

/**
 * @NOTE often times when you use an API, you'll need to "clean"
 * the data. data from API comes with a lot of information and
 * cleaning the data means trimming it down to only the things
 * you need.
 * 
 * @TODO create a function called loadPokemon that takes one parameter,
 * the PokeDex id of a Pokemon, which:
 *      - calls the PokeAPI to get the specified Pokemon
 *      - cleans the raw Pokemon data to be usable
 *      - updates the UI according
 */
function loadPokemon(pokedexId) {
    // load the url as const with a template string
    const url = `https://pokeapi.co/api/v2/pokemon/${pokedexId}`;

    // use the built-in fetch function to make an async HTTP request
    fetch(url)
        // using a callback function when the async is done
        .then(function(response) {
            // the HTTP response object, not the data we need
            console.log(response);

            // we're returing inside the callback function! not loadPokemon
            // this .json() gives us the actual data we want
            return response.json();
        })
        .then(function(jsonData) {
            // the pokemon JSON data we need
            // this is received from the return in the above callback
            console.log(jsonData);

            /**
             * clean our Pokemon data. our final object should look like:
             * 
             * {
             *      id: the pokedex number,
             *      name: the name of the pokemon,
             *      image: the url of the pokemon sprite,
             *      base: {
             *          hp: the base HP of the pokemon
             *          atk: the base attack
             *          def: the base defense
             *          sp_atk: the base special attack
             *          sp_def: the base special defense
             *          spd: the base speed
             *      }
             * }
             */
            let pokemon = {
                id: jsonData.id,
                name: jsonData.name,
                image: jsonData.sprites.front_default,
                base: {
                    hp: jsonData.stats[0].base_stat,
                    atk: jsonData.stats[1].base_stat,
                    def: jsonData.stats[2].base_stat,
                    sp_atk: jsonData.stats[3].base_stat,
                    sp_def: jsonData.stats[4].base_stat,
                    spd: jsonData.stats[5].base_stat
                }                
            };
            
            // print for good measure
            console.log(pokemon);

            // call the updateUI function
            updateUI(pokemon);
        });
}



/**
 * @TODO create an event handler for #random_btn which:
 *      - gets the generation value the user selected in the 
 *        radio inputs
 *      - gets a random Pokedex number within that generation range
 *      - loads the data of a Pokemon with the specified Pokedex number
 *        from an API
 */
let randomBtn = document.querySelector("#random_btn");
randomBtn.onclick = (event) => {
    // prevent default behavior
    event.preventDefault();

    // get the element with the checked radio box
    let selectedOption = document.querySelector("input[name='generation']:checked");
    // get the value using casting to change the datatype from String to Number
    let generation = Number(selectedOption.value);

    // get the generation range using the user-selected value
    let genRange = getGenerationRange(generation);
    // get a random PokeDex id within that range
    let pokedexId = randNumGenerator(genRange.lower, genRange.upper);

    // call the loadPokemon function
    loadPokemon(pokedexId);
}