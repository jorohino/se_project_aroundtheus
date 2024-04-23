/*      ---INITIAL CARDS---     */
export const initialCards = [
  {
    name: "Hartford",
    link: "https://images.unsplash.com/photo-1611008715758-e56c60b9476d?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Boston",
    link: "https://images.unsplash.com/photo-1573524949339-b830334a31ee?q=80&w=3862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New York City",
    link: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Philadelphia",
    link: "https://images.unsplash.com/photo-1517009572053-93fb56dfef49?q=80&w=3090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Atlanta",
    link: "https://images.unsplash.com/photo-1579824966561-2e4d9f79fe9b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Miami",
    link: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  ];
  
const cardData = {
  name: "Miami",
  link: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}
  
/*  -- Config DECLARATIONS-- */
export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

/*Early Version Constants*/

/*  
const closeButtons = document.querySelectorAll(".modal__close-button");
const modals = document.querySelectorAll(".modal");
/*  --Profile Modal DECLARATIONS--  */
/*  
const editButton = document.querySelector("#profile__edit-button");
const editModal = document.querySelector("#edit-modal");
const editModalCloseButton = editModal.querySelector("#edit-modal__close-button");
const profileName = document.querySelector("#profile__name");
const profileNameInput = document.querySelector("#form__name-input");
const profileDescriptionInput = document.querySelector(
  "#form__description-input"
);
const profileDescription = document.querySelector("#profile__description");
const profileEditForm = document.forms["edit-modal__form"];
const profileEditSubmit = document.querySelector("#edit-modal__save");
  
/*  --Card List Modal DECLARATIONS--  */
  
/*
const addButton = document.querySelector("#profile__add-button");
const addModal = document.querySelector("#add-modal");
const addModalCloseButton = document.querySelector("#add-modal__close-button");
const addModalSaveButton = document.querySelector("#add-modal__save");
const addModalForm = document.forms["add-modal__form"];
const cardTitleInput = document.querySelector("#form__title-input");
const cardURLInput = document.querySelector("#form__url-input");
const cardsListElement = document.querySelector("#cards__list");
const cardTemplate = cardsListElement.querySelector("#cards__list-template").content.querySelector(".card");
const cardTitle = document.querySelector("#card__title");
const cardImage = document.querySelector("#card__image");
  
/*   --Popup Modal DECLARATIONS--  */
  
/*
const popupModal = document.querySelector('#popup-modal');
const popupModalCloseButton = document.querySelector('#popup-modal__close-button');
const popupModalImage = document.querySelector(".popup-modal__image");
const popupModalTitle = document.querySelector(".popup-modal__title")
*/