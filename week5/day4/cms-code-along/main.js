/**
 * @TODO get a ref to our firebase database
 */
const database = firebase.database().ref();

/**
 * @TODO get const reference to these elements:
 *      - an h1 with id #hero-title
 *      - an h3 with id #hero-desc
 *      - an img with id #hero-img
 */
const heroTitle = document.querySelector("#hero-title");
const heroDesc = document.querySelector("#hero-desc");
const heroImg = document.querySelector("#hero-img");

/**
 * @TODO create a function called updateWebsite that
 * takes a dataSnapshot from Firebase as a parameter
 * that:
 *      - unpacks the data from the dataSnapshot
 *        into an object called data
 *      - console.logs this data
 *      - assigns the content of data to the appropriate elements
 *        IF it exists (meaning it is not undefined)
 */
function updateWebsite(dataSnapshot) {
    // unpack the data from dataSnapshot from Firebase
    let data = dataSnapshot.val();

    // print for good measure
    console.log(data)

    // assign the content appropriately if it exists
    if (data[heroTitle.id] !== undefined) {
        heroTitle.innerHTML = data[heroTitle.id];
    }

    if (data[heroDesc.id] !== undefined) {
        heroDesc.innerHTML = data[heroDesc.id];
    }

    if (data[heroImg .id]!== undefined) {
        heroImg.src = data[heroImg.id];
    }
}

/**
 * @TODO attach the updateWebsite function as an event
 * listener for the "value" event in the database
 */
database.on("value", updateWebsite);