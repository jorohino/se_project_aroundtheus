import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  // It accepts two arguments: the popup selector and a callback function,
  // which PopupWithForm calls when the form’s submit event fires.

  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  // It has a private method named _getInputValues(), which collects data from all the input fields and
  // returns it as an object. This data should then be passed to the submission handler as an argument.
  _getInputValues() {
    const formData = {};
    this._inputs = this._popupForm.querySelectorAll("input");
    this._inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    return formData;
  }
  /*_getInputValues() {
    const formData = {};
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
    this._inputList.forEach((inputEl) => {
      inputValues[inputEl.name] = inputEl.value;
    });

    return inputValues;
  }
*/
  // It overrides the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm
  // class should add a submit event listener to the form and call the setEventListeners() method of the
  // parent class.

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
