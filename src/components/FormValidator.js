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
    if (!errorEl) return;

    input.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
    errorEl.classList.remove(this._errorClass);
    errorEl.textContent = "";
  }

  _showInputError(input, errorMessage) {
    const errorEl = this.formEl.querySelector(`#${input.id}-error`);
    if (!errorEl) return;

    input.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
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
