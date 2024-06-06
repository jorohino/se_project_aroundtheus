export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    api,
    handleImageClick,
    handleDeleteButton,
    handleLikeButton,
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._api = api;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeButton = handleLikeButton;
  }

  
  getCardId() {
    return this._id;
  }

  getIsLiked() {
    return this._isLiked;
  }

  setIsLiked(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  _renderLikes() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton(this);
    });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  removeCard() {
    this._cardEl.remove();
    this._cardEl = null;
  }

  getView() {
    this._cardEl = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeButton = this._cardEl.querySelector(".card__like-button");
    this._deleteButton = this._cardEl.querySelector(".card__delete-button");
    this._cardImageEl = this._cardEl.querySelector(".card__image");
    this._cardTitleEl = this._cardEl.querySelector(".card__title");

    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;

    this._setEventListeners();

    this._renderLikes();
    return this._cardEl;
  }
}
