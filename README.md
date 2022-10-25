# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.png)
### Links

- Solution URL: [click here](https://your-solution-url.com)
- Live Site URL: [click here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this challenge i was able to put in pratice the recently studied forms validations, be it in the html itself or using the JS API, also learned a lot about forms styling.

- Very proud of the form itself:
```html
<form action="#">
        <label for="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
          />
          <span class="error" aria-live="polite"></span>
        </label>
        <label for="submitBtn">
          <input type="submit" value="" id="submitBtn" />
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
          <img id="error-icon" src="./images/icon-error.svg" alt="/">
        </label>
      </form>
```

- Making the submit button like that was really challenging:
```css
label:nth-child(2) {
    background-image: linear-gradient(to right, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    right: 0;
    bottom: 0%;
    height: 100%;
    width: 60px;
    transition: all 500ms ease-in-out;
}
```
- Manipulating DOM its always the best part 🤓
```js
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
```

### Continued development

Looking foward to improve this forms validation, in all the especific cases.

### Useful resources

- [Submit styling](https://chodounsky.com/2015/05/12/svg-as-a-submit-button/) - This article helped me with some technics to make the submit button still be the submit button but also style him freely
- [W3schools](https://www.w3schools.com/) - Their docs always help me with some syntax that i may forget
- [Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript) - MDN and a "crash course" about form validation

## Author

- Frontend Mentor - [@jAllanOli](https://www.frontendmentor.io/profile/jAllanOli)
- gitHub - [@jAllanOli](https://github.com/jAllanOli)

