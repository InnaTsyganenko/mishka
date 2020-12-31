/* call window */

const productOrderButton = document.querySelector(".promoted-product__button-order"); /* определяем кнопку на index */
const cartButtons = document.querySelectorAll(".catalog__cart-button"); /* определяем кнопки на catalog page */
const modalWindow = document.querySelector(".modal"); /* находим модальное окно */
const modalOverlay = document.querySelector(".modal-overlay"); /* подложка для всей страницы, активна при появлении модального окна */

if (productOrderButton != undefined) { /* проверяем, на какой из страниц мы находимся (определён ли класс .promoted-product__button-order) */
  productOrderButton.addEventListener("click", function () { /* клик на кнопку */
  modalWindow.classList.add("modal-active"); /* показываем модальное окно */
  modalOverlay.classList.add("modal-active"); /* показываем подложку */
  });
}

if (cartButtons != undefined) { /* проверяем, на какой из страниц мы находимся (определён ли класс .catalog__cart-button) */
  for (i = 0; i < cartButtons.length; i++) { /* кнопок корзины на странице catalog пока 3, потом может стать больше. Делаем для них цикл */
    cartButtons[i].addEventListener("click", function () { /* клик на кнопку */
      modalWindow.classList.add("modal-active"); /* показываем модальное окно */
      modalOverlay.classList.add("modal-active"); /* показываем подложку */
    });
  }
}

modalOverlay.addEventListener("click", function() { /* при клике за пределами модального окна, оно исчезает */
  modalWindow.classList.remove("modal-active");
  modalOverlay.classList.remove("modal-active");
});
