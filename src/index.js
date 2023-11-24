import './pages/index.css';

import { INITIAL_CARDS } from './components/cards.js';

import { closeModal, openModal } from './components/modal.js';

import { createCard, deleteCard, likeCard } from './components/card.js';

const popupImage = document.querySelector('.popup_type_image');
const popupImageCaption = popupImage.querySelector('.popup__caption');
const popupImageImage = popupImage.querySelector('.popup__image');

const cardsContainer = document.querySelector('.places__list');

const cardTemplate = document.querySelector('#card-template').content;
const cardForm = document.forms['new-place'];
const cardNameInput = cardForm.elements['place-name'];
const cardLinkInput = cardForm.elements.link;

const popupCard = document.querySelector('.popup_type_new-card');
const popupCardButtonOpen = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const profileForm = document.forms['edit-profile'];
const profileNameInput = profileForm.elements.name;
const profileDescriptionInput = profileForm.elements.description;

const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileButtonOpen = document.querySelector('.profile__edit-button');

const handleCardImageClick = (event) => {
  popupImageImage.src = event.currentTarget.src;
  popupImageImage.alt = event.currentTarget.alt;
  popupImageCaption.textContent = event.currentTarget.alt;

  openModal(popupImage);
};

const handleCardFormSubmit = (event) => {
  event.preventDefault();

  cardsContainer.prepend(
    createCard(
      cardTemplate,
      {
        name: cardNameInput.value,
        link: cardLinkInput.value,
      },
      deleteCard,
      likeCard,
      handleCardImageClick
    )
  );

  cardForm.reset();

  closeModal(popupCard);
};

const handleProfileFormSubmit = (event) => {
  event.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  closeModal(popupProfile);
};

const handlePopupProfileButtonOpenClick = () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  openModal(popupProfile);
};

const handlePopupCardButtonOpenClick = () => {
  cardForm.reset();

  openModal(popupCard);
};

cardForm.addEventListener('submit', handleCardFormSubmit);

popupCardButtonOpen.addEventListener('click', handlePopupCardButtonOpenClick);

profileForm.addEventListener('submit', handleProfileFormSubmit);

popupProfileButtonOpen.addEventListener(
  'click',
  handlePopupProfileButtonOpenClick
);

INITIAL_CARDS.forEach((cardData) => {
  cardsContainer.append(
    createCard(
      cardTemplate,
      cardData,
      deleteCard,
      likeCard,
      handleCardImageClick
    )
  );
});
