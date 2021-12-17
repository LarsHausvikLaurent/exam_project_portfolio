
const form = document.querySelector("#form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError")

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError")

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError")

const adress = document.querySelector("#message");
const adressError = document.querySelector("#adressError")



function validateForm() {
    event.preventDefault();

    if (name.value.trim().length > 5) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }


    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (subject.value.trim().length > 15) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (message.value.trim().length > 15) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }



}

form.addEventListener("submit", validateForm)


function validateEmail() {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}