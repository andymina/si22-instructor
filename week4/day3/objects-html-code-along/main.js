/**
 * @TODO implement the submitButton onclick event handler
 * which onclick should:
 *      - get the form data from #form-container
 *      - create an object containing form data
 *      - create a method called debug for this object
 *        which alerts form data using a template string
 *        for debugging purposes
 *      - create and appends a User HTML element
 *        to #user-container
 */
let submitBtn = document.querySelector("#submit-btn");
submitBtn.onclick = function(event) {
    event.preventDefault();

    // get a ref to the elements
    let usernameElem = document.getElementById("username");
    let urlElem = document.getElementById("pfp-url");

    /** @NOTE demo that keys can be strings */
    let formData = {
        username: usernameElem.value,
        pfpURL: urlElem.value,
        debug: function() {
            let message = `Username: ${this.username}, pfpURL: ${this.pfpURL}`;
            alert(message);
        }
    };

    // create a new User object
    let addedUser = new User(formData.pfpURL, formData.username);

    // get the HTML element
    let userElem = addedUser.makeHTML();

    // append it to #user-container
    let divContainer = document.querySelector("#user-container");
    divContainer.append(userElem);
}

/**
 * @TODO create a User class which has username, email,
 * and pfpURL props containing the appropriate data. the
 * constructor of this class should assign data appropriately.
 * if pfpURL is an empty string, we should assign it a value
 * of "images/default-pfp.jpg"
 * 
 * @TODO create a makeHTML method for the User class
 * which will return an HTML element representing the 
 * User.
 * 
 * this HTML element should be a div with the class "user-item".
 * 
 * this div should have two children:
 *      - an img with the src set to this object's pfpURL
 *      - an h2 with the text set to this object's username
 */
class User {
    // create a constructor with two params
    constructor(pfpURL, username) {
        // check if its an empty string with a conditional
        if (pfpURL === "") {
            this.pfpURL = "images/default-pfp.jpg";
        } else {
            /**
             * @NOTE interesting stuff going on here. these
             * are two different values: the right one is a param
             * and the left is an object property. even though they
             * both *kinda* have the same name they don't crossfire.
             * this is because for the left side we are accessing an
             * object property with the `this` keyword
             */
            this.pfpURL = pfpURL;
        }

        /**
         * @NOTE interesting stuff going on here. these
         * are two different values: the right one is a param
         * and the left is an object property. even though they
         * both *kinda* have the same name they don't crossfire.
         * this is because for the left side we are accessing an
         * object property with the `this` keyword
         */
        this.username = username;
    }

    // define a method in a class
    makeHTML() {
        // create the parent div element
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("user-item");

        // create the img element
        let pfp = document.createElement("img");
        
        // set the src of the img
        pfp.setAttribute("src", this.pfpURL);
        // can also set the src with the code below
        // pfp.src = this.pfpURL;

        // append it to parentDiv
        parentDiv.append(pfp);

        // create the h2 element
        let userHeading = document.createElement("h2");
        // change the innerHTML to be the username, should really use
        // innerText here but this is what we learned.
        userHeading.innerHTML = this.username;
        // append it to parentDiv
        parentDiv.append(userHeading);

        // return to get the new element out
        return parentDiv;
    }
}