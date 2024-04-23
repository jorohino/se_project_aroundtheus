import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";



/*      ---FUNCTIONS---     */

/*  --Card rendering functions--  */

function getCardElement(cardData) {
  return new Card(cardData, '#cards__list-template', handleImageClick).getView();
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
    const formName = formEl.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(config);

/*  --Modal Functions-- */

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardsListElement.prepend(cardElement);
}

/** --Close Functions-- **/

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

 /*  --Popup/Image Click Functions-- */
function handleImageClick() {
  openModal(popupModal);
  popupModalImage.src = cardData.link;
  popupModalImage.alt = cardData.name;
  popupModalTitle.textContent = cardData.name;
}

/*      ---EVENT LISTENERS---      */

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editModal);
});

addModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardURLInput.value;
  renderCard({name, link}, cardsListElement);
  closeModal(addModal);
  addModalForm.reset(); 
})

editButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openModal(editModal);
});

addButton.addEventListener("click", () => {
  openModal(addModal);
});

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
})

initialCards.forEach((cardData) => renderCard(cardData, cardsListElement));
