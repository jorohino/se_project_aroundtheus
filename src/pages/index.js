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

const profilePopup = new PopupWithForm("#edit-modal", (formData) => {
  userInfo.setUserInfo(formData);
  profilePopup.close();
});
profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm("#add-modal", (formData) => {
  const name = formData.title;
  const link = formData.link;
  handleAddCardSubmit(name, link);
});
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
  console.log("Creating card with:", cardData);
  const card = new Card(cardData, "#cards__list-template", handleImageClick);
  return card.getView();
}

function renderCard(cardData) {
  console.log("Rendering card with data:", cardData);
  const cardView = createCard(cardData);
  cardSection.addItem(cardView);
}

/*  --Open Image Preview function--  */

function handleImageClick({ name, link }) {
  popupWithImage.open({ name, link });
}

/*  --Event Handlers--  */
function handleEditFormSubmit({ name, description }) {
  userInfo.setUserInfo({ name, description });
  profilePopup.close();
}

function handleAddCardSubmit() {
  const name = cardTitleInput.value;
  const link = cardURLInput.value;

  const cardElement = createCard({ name, link });
  cardSection.addItem(cardElement);
  addCardPopup.close();
  addModalForm.reset();
}

/*
function handleAddCardSubmit({ name, link }) {
  const cardElement = createCard({ name, link });
  cardSection.addItem(cardElement);
  addCardPopup.close();
  addModalForm.reset();
}
*/

/*function handleAddCardSubmit({ name, link }) {
  const cardElement = renderCard({ name, link });
  cardSection.addItem(cardElement);
  addCardPopup.close();
  addModalForm.reset();
}
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
