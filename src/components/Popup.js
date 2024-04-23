export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  };

    // It has public methods called open() and close() to open and close the popup. 
        // The open() method should be called in the preexisting event handlers in index.js.

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  };

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  };

    // It has a private method named _handleEscClose() that stores the logic for closing the popup 
        // by pressing the Esc key.

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  };

    // It has a public method named setEventListeners() that adds a click event listener to the close 
        // icon of the popup. The modal window should also close when users click on the shaded area around 
            // the form.

  setEventListeners() {
    this._popupElement.addEventListener("click", (e) => {
      if(e.target.classList.contains("modal") 
      || e.target.classList.contains("modal__close-button")
      ) {
        this.close();
      }
    });
  };
}

// You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its 
    // children classes, as described below (PopupWithImage + PopupWithForm classes).