// JavaScript for form validation
const form = document.getElementById("myForm");
const email = document.getElementById("email");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailError = document.getElementById("emailError");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");

const submitButton = document.getElementById("submit-btn");

// Add an input event listener for each input field
email.addEventListener("input", validateEmail);
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  let valid = true;
  emailError.textContent = "";
  firstNameError.textContent = "";
  lastNameError.textContent = "";

  if (email.value === "") {
    emailError.textContent = "Email is required";
    valid = false;
    addErrorClass(email);
  } else if (!isValidEmail(email.value)) {
    emailError.textContent = "Invalid email format";
    valid = false;
    addErrorClass(email);
  }

  if (firstName.value === "") {
    firstNameError.textContent = "First name is required";
    valid = false;
    addErrorClass(firstName);
  } else if (firstName.value.length < firstName.minLength || firstName.value.length > firstName.maxLength) {
    firstNameError.textContent = `First name should be between ${firstName.minLength} and ${firstName.maxLength} characters`;
    addErrorClass(firstName);
  }

  if (lastName.value === "") {
    lastNameError.textContent = "Last name is required";
    valid = false;
    addErrorClass(lastName);
  } else if (lastName.value.length < lastName.minLength || lastName.value.length > lastName.maxLength) {
    lastNameError.textContent = `Last name should be between ${lastName.minLength} and ${lastName.maxLength} characters`;
    addErrorClass(lastName);
  }

  if (valid) {
    logFormValues();
  }
});


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function addErrorClass(inputElement) {
  inputElement.classList.add("error-input");
  inputElement.parentElement.parentElement.querySelector(".error-wrapper").classList.add("error-wrapper-active");
}

function removeErrorClass(inputElement) {
  inputElement.classList.remove("error-input");
  inputElement.parentElement.parentElement.querySelector(".error-wrapper").classList.remove("error-wrapper-active");
}

function logFormValues() {
  console.log("Form submitted with the following values:");
  console.log("Email:", email.value);
  console.log("First Name:", firstName.value);
  console.log("Last Name:", lastName.value);
}

submitButton.addEventListener("click", function () {
  form.dispatchEvent(new Event("submit")); // Manually trigger the form submission
});

// Validation functions for custom validation
function validateEmail() {
  if (email.value === "") {
    emailError.textContent = "Email is required";
    addErrorClass(email);
  } else if (!isValidEmail(email.value)) {
    emailError.textContent = "Invalid email format";
    addErrorClass(email);
  } else {
    removeErrorClass(email);
  }
}

function validateFirstName() {
  if (firstName.value === "") {
    firstNameError.textContent = "First name is required";
    addErrorClass(firstName);
  } else if (firstName.value.length < firstName.minLength || firstName.value.length > firstName.maxLength) {
    firstNameError.textContent = `First name should be between ${firstName.minLength} and ${firstName.maxLength} characters`;
    addErrorClass(firstName);
  } else {
    removeErrorClass(firstName);
  }
}

function validateLastName() {
  if (lastName.value === "") {
    lastNameError.textContent = "Last name is required";
    addErrorClass(lastName);
  } else if (lastName.value.length < lastName.minLength || lastName.value.length > lastName.maxLength) {
    lastNameError.textContent = `Last name should be between ${lastName.minLength} and ${lastName.maxLength} characters`;
    addErrorClass(lastName);
  } else {
    removeErrorClass(lastName);
  }
}
