export default class FormValidator {
  constructor(config, formEl) {
    this.formEl = formEl;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputs = Array.from(
      this.formEl.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this.formEl.querySelector(this._submitButtonSelector);
    this._errorClass = config.errorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => !input.validity.valid);
  }

  _hideInputError(input) {
    const errorEl = this.formEl.querySelector(`#${input.id}-error`);

    input.classList.remove(this._errorClass);
    input.classList.remove("this._modal__input_invalid");
    errorEl.classList.remove(this._errorClass);
    errorEl.textContent = "";
  }

  _showInputError(input, errorMessage) {
    const errorEl = this.formEl.querySelector(`#${input.id}-error`);

    input.classList.add(this._errorClass);
    input.classList.add("this._modal__input_invalid");
    errorEl.textContent = errorMessage;
    errorEl.classList.add(this._errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
      return;
    }

    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _disableButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this._disableButton;
    });

    this.setEventListeners();
  }

  resetValidation() {
    this._inputs.forEach((input) => {
      this._hideInputError(input);
    });

    this._toggleButtonState();
  }
}

/*

//first parameter is a settings object that stores selectors and form classes,
//// and the second one takes a form element to be validated.
class FormValidator {
    constructor(config, formSelector) {
        this._config = config;
        this._formSelector = formSelector;
    }

    //private method checking the field's validity
    _checkInputValidity(formEl, inputEl, config) {
        if(!inputEl.validity.valid) {
            return showInputError(formEl, inputEl, config)
        }
        hideInputError(formEl, inputEl, config);
    }

    //private method changing the state of the Submit button
    _toggleSubmitButton() {
        //submission button for all forms should be disabled whenever one or more form fields are invalid
    }

    //private method adding all the needed handlers
    _setEventListeners() {

    }

    //public method which enables form validation
    enableValidation(config) {

    }

    //public method to either disable the state of the button and reset form validation 
    //(including the state of the submit button)
    resetValidation() {
        //after SUCCESSFULLY submitting the card form, 
        ////the form fields should be cleared and the submit button should be disabled

        //for the edit profile modal, the button must be disabled after submission. 
        ////When the user opens the modal again, it will already be filled with valid input values

        //reset the validation error messages on the card modal
    }

    //create an instance of the FormValidator class for each form that should be validated
}

*/
