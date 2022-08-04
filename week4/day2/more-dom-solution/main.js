/**
 * @TODO implement the onclick event listeners for starters
 * which should:
 *      - change the innerHTML of #poke-text to their id
 */
// take event as a param so we can get the element that
// fired this event later
 function starterClick(event) {
    // get a reference to the element clicked through the event
    let clickedElement = event.target;
    // get the id of the pokemon that was clicked
    let pokemonName = clickedElement.id;
    // set the innerHTML of #poke-text to that name
    let choiceText = document.querySelector("#poke-text");
    choiceText.innerHTML = "You chose " + pokemonName;
}

/**
 * @TODO implement addPika button which onclick should:
 *      - create a new img
 *      - set the src images/pikachu.png
 *      - set the alt text to Pikachu
 *      - add "poke-img" to the classes
 * 
 * and then append it to #img-container
 */
let addPika = document.querySelector("#add-pika");
addPika.onclick = function() {
    // create the element
    let pikaImg = document.createElement("img");

    // add attrs
    pikaImg.setAttribute("src", "images/pikachu.png");
    pikaImg.id = "pikachu";
    pikaImg.classList.add("poke-img");

    // add event listeners
    pikaImg.onclick = starterClick;
    pikaImg.onmouseover = starterOnMouseOver;
    pikaImg.onmouseout = starterOnMouseOut;
    
    // append the element
    let imgContainer = document.querySelector("#img-container");
    imgContainer.append(pikaImg);
}

/**
 * @TODO implement the rmvPika button which onclick should:
 *      - remove the pikachu image
 */
let rmvPika = document.querySelector("#rmv-pika");
rmvPika.onclick = function() {
    // get the element and remove
    let pikaImg = document.querySelector("#pikachu");
    pikaImg.remove();
}

/**
 * @TODO EXTRA CREDIT implement the onmouseover event listener
 * for all starters which should:
 *      - give the current starter a red border
 *      - add a black box shadow of 5px x-offset, 5px y-offset,
 *        and a blur radius of 5px
 */
function starterOnMouseOver(event) {
    // get a reference to the element clicked through the event
    let element = event.target;
    // add the hovered-poke class which gives the styling desired
    element.classList.add("hovered-poke");
}

/**
 * @TODO EXTRA CREDIT implement the onmouseout event listener
 * for all starters which should:
 *      - remove the box shadow
 *      - remove the red border
 */
function starterOnMouseOut(event) {
    // get a reference to the element clicked through the event
    let element = event.target;
    // remove the hovered-poke class
    element.classList.remove("hovered-poke");
}

// add all event listeners with a loop the "coder" way B)
let pokemon = document.querySelectorAll(".poke-img");
for (let i = 0; i < pokemon.length; i++) {
    pokemon[i].onclick = starterClick;
    pokemon[i].onmouseover = starterOnMouseOver;
    pokemon[i].onmouseout = starterOnMouseOut;
}