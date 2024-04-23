import Popup from "./Popup.js";

// Create one instance of this class in index.js and call its parent’s setEventListeners() method.

class PopupWithImage extends Popup {

  // This class will need to override the parent’s open() method. The open() method of the PopupWithImage 
    // class will need to accept the name and link of the card as arguments and add an image to the popup 
      // and the corresponding image src attribute along with a caption for the image. This method should 
        // be called in your image click handler in index.js.

  open(data) {
    // set the image's src and alt
    // set the caption's textContent
    super.open();
  }

}