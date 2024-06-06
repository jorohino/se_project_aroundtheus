// Import stylesheet and class

import "./index.css";

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";

import Api from "../components/Api.js";

import {
  config,
  editButton,
  addButton,
  addModalForm,
  profileAvatarContainer,
} from "../utils/constants.js";

// Initialize API
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c91d1d7e-9726-43c4-acb8-289510ab9429",
    "Content-Type": "application/json",
  },
});

// Initialize components

const userInfo = new UserInfo({
  profileNameSelector: "#profile__name",
  profileJobSelector: "#profile__description",
  avatarSelector: "#profile__pfp",
});

const profilePopup = new PopupWithForm("#edit-modal", (formData) => {
  profilePopup.renderLoading(true);
  return api
    .updateUserInfo(formData)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        description: res.about,
      });
      profilePopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profilePopup.renderLoading(false);
    });
});
profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm("#add-modal", (formData) => {
  addCardPopup.renderLoading(true);
  return api
    .createCard(formData)
    .then((res) => {
      const { name, link, _id } = res;
      const cardElement = createCard({ name, link, _id });
      cardSection.addItem(cardElement);
      addCardPopup.close();
      addModalForm.reset();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      addCardPopup.renderLoading(false);
    });
});
addCardPopup.setEventListeners();

const deletePopup = new PopupWithForm("#delete-modal", () => {
  if (deletePopup.card) {
    return api
      .deleteCard(deletePopup.card.getCardId())
      .then(() => {
        deletePopup.card.removeCard();
        deletePopup.close();
      })
      .catch((err) => {
        console.error("Error deleting card:", err);
      });
  }
});
deletePopup.setEventListeners();

const popupWithImage = new PopupWithImage("#popup-modal");
popupWithImage.setEventListeners();

const editAvatarPopup = new PopupWithForm("#edit-avatar-modal", (formData) => {
  console.log("Updating avatar with link:", formData.avatar);
  editAvatarPopup.renderLoading(true);
  return api
    .updateUserAvatar({ avatar: formData.avatar })
    .then((res) => {
      userInfo.setAvatarUrl(res.avatar);
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editAvatarPopup.renderLoading(false);
    });
});
editAvatarPopup.setEventListeners();

/*const cardSection = new Section(
  {
    items: [],
    renderer: createCard,
  },
  "#cards__list"
);
cardSection.renderItems();
*/

/*      ---FUNCTIONS/EVENT HANDLERS/EVENT LISTENERS---     */

/*  --Modal handlers--  */

function handleImageClick({ name, link }) {
  popupWithImage.open({ name, link });
}

function handleDeleteButton(card) {
  deletePopup.card = card;
  deletePopup.open();
}

function handleLikeButton(card) {
  const isCurrentlyLiked = card.getIsLiked();
  const likeToggle = isCurrentlyLiked ? "unlikeCard" : "likeCard";

  api[likeToggle](card.getCardId())
    .then(() => {
      card.setIsLiked(!isCurrentlyLiked);
    })
    .catch((err) => {
      console.error("Error updating like status:", err);
    });
}

/*  --Card rendering functions--  */

function createCard(cardData) {
  console.log("Creating card with:", cardData);
  const card = new Card(
    cardData,
    "#cards__list-template",
    api,
    handleImageClick,
    handleDeleteButton,
    handleLikeButton
  );
  return card.getView();
}

/*  --Event listeners--  */

editButton.addEventListener("click", () => {
  const utdUserInfo = userInfo.getUserInfo();
  profilePopup.setInputValues({
    name: utdUserInfo.name,
    description: utdUserInfo.description.trim(),
  });
  profilePopup.open();
});

addButton.addEventListener("click", () => {
  addCardPopup.open();
});

profileAvatarContainer.addEventListener("click", () => {
  editAvatarPopup.open();
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

/*      ---FETCH API DATA---      */
/*  -Fetch initial data and render cards- */
/*api
  .getInitialCards()
  .then((cards) => {
    console.log(cards);
    cards.forEach((card) => {
      cardSection.addItem(createCard(card));
    });
  })
  .catch((err) => {
    console.error(err);
  });
*/ 
/*  -Fetch user info and set it in UserInfo-  */

let cardSection;

api.getInitialCards()
.then((cards) => {
  cardSection = new Section ({
    items: cards,
    renderer: createCard
  },
  "#cards__list"
);
  cardSection.renderItems();
})
.catch(console.error);
