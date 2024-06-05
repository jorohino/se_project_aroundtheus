import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  // It accepts two arguments: the popup selector and a callback function,
  // which PopupWithForm calls when the form’s submit event fires.

  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = this._popupForm.querySelectorAll("input");
    this._submitBtn = this._popupElement.querySelector(".modal__save");
    this._submitBtnText = this._submitBtn.textContent;
  }

  // It has a private method named _getInputValues(), which collects data from all the input fields and
  // returns it as an object. This data should then be passed to the submission handler as an argument.
  _getInputValues() {
    const formData = {};
    this._inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    return formData;
  }

  // Reviewer suggested method to insert data into inputs
  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  // It overrides the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm
  // class should add a submit event listener to the form and call the setEventListeners() method of the
  // parent class.

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues())
        .then(() => {
          this.close();
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }
}
