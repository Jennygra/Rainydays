const contactForm = document.querySelector(".contactForm"); 

const name = document.querySelector("#name"); 
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email"); 
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message"); 
const messageError = document.querySelector("#messageError");

const loader = document.querySelector(".loader"); 
const contactUsContainer = document.querySelector(".contact-us-container"); 

contactUsContainer.style.display = "none"; 

setTimeout(function() {
    loader.className = "hidden";
    contactUsContainer.style.display = "";
},400);

function validateForm() {
    event.preventDefault(); 
    
    if(formChecker(name.value,0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(formChecker(message.value,5) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

contactForm.addEventListener("Contact us", validateForm); 

function formChecker(value,len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/; 
    const patternMatches = regEx.test(email); 
    return patternMatches;
}