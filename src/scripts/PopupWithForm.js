import Popup from "./Popup.js";
// Create an instance of the PopupWithForm class for each popup that contains a form, and call 
  // their setEventListeners() method.
  
// It accepts two arguments: the popup selector and a callback function, 
  // which PopupWithForm calls when the form’s submit event fires.

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({popupSelector});
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;

  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  // It has a private method named _getInputValues(), which collects data from all the input fields and 
    // returns it as an object. This data should then be passed to the submission handler as an argument.

  // It overrides the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm 
    // class should add a submit event listener to the form and call the setEventListeners() method of the 
      // parent class.
}

// index.js

// const newCardPopup = new PopupWithForm("#add-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();