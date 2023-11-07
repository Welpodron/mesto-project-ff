// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
const createCard = (data, deleteCallback) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardElement.querySelector(".card__title").textContent = data.name;
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCallback);

  return cardElement;
};

// @todo: Функция удаления карточки
const deleteCard = (event) => {
  event.target.closest(".card").remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  cardsContainer.append(createCard(cardData, deleteCard));
});
