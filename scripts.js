const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error");
const emailErrorIcon = document.getElementById("error-icon");

email.addEventListener("change", (event) => {
  if (!email.validity.valid) {
    emailErrorIcon.style.display = "block";
    showError();
    event.preventDefault();
  } else {
    emailErrorIcon.style.display = "none";
    emailError.innerText = "";    
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.typeMismatch) {
    emailError.innerText = "Please provide a valid email";
  } else if (email.validity.valueMissing) {
    emailError.innerText = "You need to enter an e-mail address";
  }
}
