export default class Card {
    constructor({name, link}, cardSelector, handleImageClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    _setEventListeners() {
        this._cardEl.querySelector('.card__like-button').addEventListener('click', () => {
            this._handleLikeButton()
        });
        this._cardEl.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteButton()
        });
        this._cardEl.querySelector('.card__image').addEventListener('click', () => {
            this._handleImageClick()
        })
    }

    _handleLikeButton() {
        this._cardEl.querySelector('.card__like-button').classList.toggle('card__like-button_active');
    }

    _handleDeleteButton() {
        this._cardEl.remove();
        this._cardEl = null;
    }

    getView() {
        this._cardEl = document
        .querySelector(this._cardSelector)
        .content.querySelector('.card')
        .cloneNode(true);
        //get the card view
        this._setEventListeners();
        //return card
    }
}

/*


const cardImageEl = cardEl.querySelector('.card__image');
const cardTitleEl = cardEl.querySelector('.card__title');
const likeButton = cardEl.querySelector('.card__like-button');
const deleteButton = cardEl.querySelector('.card__delete-button');

//(data) = an object containing the card's text and a link to its image

//(cardSelector) = a selector string for the corresponding <template> element

//(handleImageClick) = a function that handles the opening of the preview picture modal. 
////You should already have this function from previous iterations of the project, 
////although it might have a different name, or it might be an anonymous function.

class Card {
    constructor(data, cardSelector, handleImageClick) {
        this._title = data.title;
        this._image = data.image;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
}

    //Private method that sets the necessary event listeners
    

    // private method for the delete and like button handlers (since the image click handler is 
    ////passed as an argument, you won't create a corresponding method inside the Card class)
    _handleDeleteButton() {

    }

    _handleLikeButton() {

    }

    //public method that returns a fully functional card element populated with the appropriate data.
}

*/
