import { MyFormData } from "./classes/index.js";
import storedData from "./stored-data.js";

/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("my-form");

/**
 * @type {HTMLButtonElement}
 */
const submitBtn = document.querySelector("button");

/**
 * @type {HTMLButtonElement}
 */
const resetBtn = document.getElementById("reset-btn");

/**
 * @type {HTMLInputElement}
 */
const firstnameInput = document.querySelector("#firstname");

/**
 * @type {HTMLInputElement}
 */
const lastnameInput = document.querySelector("#lastname");

/**
 * @type {HTMLInputElement}
 */
const passwordInput = document.querySelector("#password");

/**
 * @type {HTMLInputElement}
 */
const emailInput = document.querySelector("#email");

/**
 * @type {HTMLDivElement}
 */
const genderFieldset = document.querySelector("#gender-fieldset");

/**
 * @param {boolean} asArray
 */
const getGenderFields = (asArray = false) => {
  const inputs = genderFieldset.querySelectorAll("input");

  if (asArray) return [inputs.item(0), inputs.item(1)];

  return {
    male: inputs.item(0),
    female: inputs.item(1),
  };
};

// === === === === === === === ===

const resetValues = () => {
  firstnameInput.value = "";
  lastnameInput.value = "";
  passwordInput.value = "";
  emailInput.value = "";

  const { female, male } = getGenderFields();
  female.checked = false;
  male.checked = false;

  handleSubmitActivation();
};

const handleData = () => {
  const formData = new FormData(form);
  const entries = formData.entries();

  /**
   * @type {MyFormData}
   */
  const data = Object.fromEntries(entries);

  storedData.push(data);
  console.log(storedData);
};

const handleSubmit = () => {
  const isValid = form.checkValidity();

  const isTaken = storedData.some(data => data.email === emailInput.value);

  if (isTaken) alert("This email is taken");

  if (isValid && !isTaken) {
    handleData();
    resetValues();
  }
};

const isSubmitEnabled = () => {
  const firstname = firstnameInput.value;
  const lastname = lastnameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;

  /**
   * @type {boolean}
   */
  const isGenderSelected = getGenderFields(true).some(input => input.checked);

  return (
    !!firstname &&
    !!Boolean(lastname) &&
    !!password &&
    !!email &&
    isGenderSelected
  );
};

const handleSubmitActivation = () => {
  const isEnabled = isSubmitEnabled();

  submitBtn.disabled = !isEnabled;
};

submitBtn.onclick = handleSubmit;
resetBtn.onclick = resetValues;

firstnameInput.onchange = handleSubmitActivation;
lastnameInput.onchange = handleSubmitActivation;
passwordInput.onchange = handleSubmitActivation;
emailInput.onchange = handleSubmitActivation;

getGenderFields(true).forEach(
  input => (input.onclick = handleSubmitActivation),
);
