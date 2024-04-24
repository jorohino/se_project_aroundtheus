// Import stylesheet

import "./index.css";

// Import all the classes
import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  config,
  modals,
  editButton,
  editModal,
  profileName,
  profileNameInput,
  profileDescription,
  profileDescriptionInput,
  profileEditForm,
  addButton,
  addModal,
  addModalForm,
  cardTitleInput,
  cardURLInput,
  cardsListElement,
  cardTitle,
  cardImage,
} from "../utils/constants.js";

// New class instances

const profilePopup = new PopupWithForm("#edit-modal", handleEditFormSubmit);
profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm("#add-modal", handleAddCardSubmit);
addCardPopup.setEventListeners();

const popupWithImage = new PopupWithImage("#popup-modal");
popupWithImage.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  "#cards__list"
);
cardSection.renderItems();

const userInfo = new UserInfo({
  profileNameSelector: "#profile__name",
  profileJobSelector: "#profile__description",
});

/*      ---FUNCTIONS---     */

/*  --Card rendering functions--  */

function createCard(cardData) {
  const card = new Card(cardData, "#cards__list-template", handleImageClick);
  return card.getView();
}

function renderCard(cardData) {
  const cardView = createCard(cardData);
  cardSection.addItem(cardView);
}

/*  --Open Image Preview function--  */

function handleImageClick(name, link) {
  popupWithImage.open(name, link);
}

/*  --Event Handlers--  */
function handleEditFormSubmit({ name, description }) {
  userInfo.setUserInfo({ name, description });
  profilePopup.close();
}

function handleAddCardSubmit({ name, link }) {
  const cardElement = renderCard({ name, link });
  cardSection.addItem(cardElement);
  addCardPopup.close();
  addModalForm.reset();
}

/* const cardElement = cardTemplate.cloneNode(true);
    const cardImageElement = cardElement.querySelector(".card__image");
    const cardTitleElement = cardElement.querySelector(".card__title");
    const likeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button");
    
    deleteButton.addEventListener("click", () => {
      cardElement.remove();
  });
  
    cardImageElement.addEventListener("click", () => {
      openModal(popupModal);
      popupModalImage.src = cardData.link;
      popupModalImage.alt = cardData.name;
      popupModalTitle.textContent = cardData.name;
  });
  
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_active");
  })
  
    cardTitleElement.textContent = cardData.name;
    cardImageElement.alt = cardData.name;
    cardImageElement.src = cardData.link;
    return cardElement;
    */

/* -- Form Validation -- */
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formEl) => {
    const validator = new FormValidator(config, formEl);
    const formName = formEl.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

/*      ---EVENT LISTENERS---      */

editButton.addEventListener("click", () => {
  const utdUserInfo = userInfo.getUserInfo();
  profileNameInput.value = utdUserInfo.name;
  profileDescriptionInput.value = utdUserInfo.description.trim();
  profilePopup.open();
});

addButton.addEventListener("click", () => {
  addCardPopup.open();
});

/* Previous version functions

--Modal Functions--

function openModal(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", handleEscape);
  }
  
  --Close Functions--
  
  function closeModal(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEscape);
  }
  
  function handleEscape(evt) {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      closeModal(openedModal);
    }
  }
  
  function handleClickOverlay() {
    modals.forEach((modal) => {
      modal.addEventListener("mousedown", (evt) => {
        if (evt.target === modal) {
          closeModal(modal);
        }
      });
    });
  }
  
  handleClickOverlay();

  closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

function handleImageClick() {
  openModal(popupModal);
  popupModalImage.src = cardData.link;
  popupModalImage.alt = cardData.name;
  popupModalTitle.textContent = cardData.name;
}

addModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardURLInput.value;
  renderCard({ name, link }, cardsListElement);
  closeModal(addModal);
  addModalForm.reset();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editModal);
});


initialCards.forEach((cardData) => renderCard(cardData, cardsListElement));

  */
