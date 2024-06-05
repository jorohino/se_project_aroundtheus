export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    api,
    handleImageClick,
    handleDeleteButton
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._api = api;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButton = handleDeleteButton;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this.handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton(this);
    });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });
  }

  handleLikeButton() {
    const likeToggle = this._isLiked ? "unlikeCard" : "likeCard";

    this._api[likeToggle](this._id)
      .then(() => {
        this._isLiked = !card._isLiked;
        this._likeButton.classList.toggle("card__like-button_active");
      })
      .catch((err) => {
        console.error("Error updating like status:", err);
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

    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    }
    return this._cardEl;
  }
}
