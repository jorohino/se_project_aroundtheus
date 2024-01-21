const initialCards = [
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

const editButton = document.querySelector("#profile__edit-button");
const modal = document.querySelector("#modal");
const modalCloseButton = modal.querySelector("#modal__close-button");
const profileName = document.querySelector("#profile__name");
const profileNameInput = document.querySelector("#form__name-input");
const profileDescriptionInput = document.querySelector(
  "#form__description-input"
);
const profileDescription = document.querySelector("#profile__description");
const profileEditForm = document.forms["modal__form"];
const profileEditSubmit = document.querySelector("#modal__save");
const cardTemplate = document.querySelector("#cards__list-template").content;
const cardsListElement = document.querySelector("#cards__list");

function openModal() {
  modal.classList.add("modal_opened");
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent.trim();
}

function closeModal() {
  modal.classList.remove("modal_opened");
}

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal();
});

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardsListElement.append(cardElement);
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  cardTitleElement.textContent = data.name;
  cardImageElement.alt = data.name;
  cardImageElement.src = data.link;
  return cardElement;
}

editButton.addEventListener("click", openModal);

modalCloseButton.addEventListener("click", closeModal);

profileEditSubmit.addEventListener("submit", handleProfileFormSubmit);
