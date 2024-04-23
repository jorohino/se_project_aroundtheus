import Popup from "./Popup.js";

// Create one instance of this class in index.js and call its parent’s setEventListeners() method.

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({popupSelector});
    this._title = this._popupElement.querySelector(".card__title");
    this._image = this._popupElement.querySelector(".card__image");
  }

  // This class will need to override the parent’s open() method. The open() method of the PopupWithImage 
    // class will need to accept the name and link of the card as arguments and add an image to the popup 
      // and the corresponding image src attribute along with a caption for the image. This method should 
        // be called in your image click handler in index.js.

  open({name, link}) {
    this._title.textContent = name;
    this._image.alt = name;
    this._image.src = link;
    super.open();
  }
}