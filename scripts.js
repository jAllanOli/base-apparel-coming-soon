const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error");
const emailErrorIcon = document.getElementById("error-icon");

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    event.preventDefault();
    emailErrorIcon.style.display = "block";
    email.classList.add("invalid-input");
    showError();
  } else {
    emailErrorIcon.style.display = "none";
    emailError.innerText = "";
  }
});

function showError() {
  if (email.validity.typeMismatch) {
    emailError.innerText = "Please provide a valid email";
  } else if (email.validity.valueMissing) {
    emailError.innerText = "You need to enter an e-mail address";
  }
}
