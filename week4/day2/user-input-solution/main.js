//get a ref to #submit-btn
let submitBtn = document.getElementById("submit-btn");
// manually add event listener
submitBtn.addEventListener("click", submitForm);

// logic to submit the form, event handler
function submitForm(event) {
    // using the event param to prevent default behavior of
    // refreshing the page after clicking the button
    event.preventDefault();

    // get a ref to the input elements
    let usernameElem = document.querySelector("#username");
    let emailElem = document.querySelector("#email");
    let passElem = document.querySelector("#password");

    // get the values of each input
    let username = usernameElem.value;
    let email = emailElem.value;
    let pass = passElem.value;

    // use a template string
    let message = `Your username is ${username}. Your email is ${email}. Your password is ${pass}`;
    alert(message);

    // empty the form inputs when we're done with them
    usernameElem.value = "";
    emailElem = "";
    passElem = "";
}