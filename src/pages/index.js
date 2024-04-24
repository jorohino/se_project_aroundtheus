// Import stylesheet and class

import "./index.css";

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  config,
  editButton,
  addButton,
  profileNameInput,
  profileDescriptionInput,
  addModalForm,
  cardTitleInput,
  cardURLInput,
} from "../utils/constants.js";

// Initialize components

const userInfo = new UserInfo({
  profileNameSelector: "#profile__name",
  profileJobSelector: "#profile__description",
});

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

/*      ---FUNCTIONS/EVENT HANDLERS/EVENT LISTENERS---     */

/*  --Card rendering functions--  */

function createCard(cardData) {
  console.log("Creating card with:", cardData);
  const card = new Card(cardData, "#cards__list-template", handleImageClick);
  return card.getView();
}
/*  --Modal handlers--  */

function handleImageClick({ name, link }) {
  popupWithImage.open({ name, link });
}

function handleAddCardSubmit() {
  const name = cardTitleInput.value;
  const link = cardURLInput.value;

  const cardElement = createCard({ name, link });
  cardSection.addItem(cardElement);
  addCardPopup.close();
  addModalForm.reset();
}

/*  --Event listeners--  */

editButton.addEventListener("click", () => {
  const utdUserInfo = userInfo.getUserInfo();
  profileNameInput.value = utdUserInfo.name;
  profileDescriptionInput.value = utdUserInfo.description.trim();
  profilePopup.open();
});

addButton.addEventListener("click", () => {
  addCardPopup.open();
});

/*  --Form validation--  */
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
