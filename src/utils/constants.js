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
};

/*  -- Config DECLARATIONS-- */

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

/* -- Modal DECLARATIONS -- */

export const modals = document.querySelectorAll(".modal");

/* -Profile Modal DECLARATIONS- */

export const editButton = document.querySelector("#profile__edit-button");
export const editModal = document.querySelector("#edit-modal");

export const profileName = document.querySelector("#profile__name");
export const profileNameInput = document.querySelector("#form__name-input");
export const profileDescriptionInput = document.querySelector(
  "#form__description-input"
);
export const profileDescription = document.querySelector(
  "#profile__description"
);
export const profileEditForm = document.forms["edit-modal__form"];
export const profileAvatarContainer = document.querySelector(
  ".profile__pfp-button"
);

/*  --Card List Modal DECLARATIONS--  */

export const addButton = document.querySelector("#profile__add-button");
export const addModal = document.querySelector("#add-modal");
export const addModalForm = document.forms["add-modal__form"];
export const cardTitleInput = document.querySelector("#form__title-input");
export const cardURLInput = document.querySelector("#form__url-input");
export const cardsListElement = document.querySelector("#cards__list");
export const cardTitle = document.querySelector("#card__title");
export const cardImage = document.querySelector("#card__image");