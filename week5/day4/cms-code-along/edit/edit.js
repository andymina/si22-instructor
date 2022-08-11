/**
 * @TODO get a reference to the firebase database
 */
const database = firebase.database().ref();

/**
 * @TODO get a const reference to the following elements
 *      - input with id #hero-title
 *      - input with id #hero-desc
 *      - input with id #hero-img
 */
const heroTitle = document.querySelector("#hero-title");
const heroDesc = document.querySelector("#hero-desc");
const heroImg = document.querySelector("#hero-img");

/**
 * @TODO get a reference to #save-btn and attach an anonymous
 * onclick event handler that:
 *      - gets the values of the three inputs in the form
 *      - IF the input field isn't blank add it to a temporary
 *        data object * 
 *      - prints the data object for good measure
 *      - updates the data object created to the Firebase database
 * 
 * Each property of the object should be that corresponding element's id.
 * @HINT we already have the references and the ids
 * 
 * @BONUS use an arrow function
 */
const saveBtn = document.querySelector("#save-btn");
saveBtn.onclick = (event) => {
    // prevent default behavior
    event.preventDefault();

    // make the empty data object for now
    let data = {};

    // if it isn't empty add it!
    if (heroTitle.value !== "") {
        data[heroTitle.id] = heroTitle.value;
    }

    if (heroDesc.value !== "") {
        data[heroDesc.id] = heroDesc.value;
    }

    if (heroImg.value !== "") {
        data[heroImg.id] = heroImg.value;
    }

    // print for good measure
    console.log(data);

    // push to database
    database.update(data);
};