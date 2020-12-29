/* call window */

const productOrderButton = document.querySelector(".promoted-product__button-order"); /* определяем кнопку на index */
const cartButtons = document.querySelectorAll(".catalog__cart-button"); /* определяем кнопки на catalog page */
const modalWindow = document.querySelector(".modal"); /* находим модальное окно */
const modalOverlay = document.querySelector(".modal-overlay"); /* подложка для всей страницы, активна при появлении модального окна */
const modalWindowHeight = getComputedStyle(modalWindow).height.replace('px', '') * 1.0; /* вычисляем и записываем высоту модального окна (приводим к числу) */

function modalWindowPositionCalc (yCoord, yCoordSmall) { /* функция для вычисления позиции появления модального окна. */
  if (yCoordSmall > modalWindowHeight) { /* yCoordSmall - расстояние от нажатой кнопки до верха окна (видимой части экрана). Проверяем, больше ли это расстояние высоты модального окна */
    yCoord -= modalWindowHeight; /* yCoord - расстояние от нажатой кнопки до верха страницы (top: 0). Вычитаем высоту модального окна, чтобы показать его в видимой области */
  }
  return yCoord + 'px'; /* возвращаем верхнюю координату показа модального окна в px */
/* функция нужна чтобы показать модальное окно полностью в пределах видимой области.
Потому что пользователь может нажать на кнопку промотав её наверх.
В таком случае без вычисления координат окно появляется на фиксированной высоте и это может быть не область просмотра.
То есть нажимаешь на кнопку, а модальное окно появляется где-то вверху.
А благодаря функции окно появляется в области просмотра */
}

if (productOrderButton != undefined) { /* проверяем, на какой из страниц мы находимся (определён ли класс .promoted-product__button-order) */
  productOrderButton.addEventListener("click", function () { /* клик на кнопку */
    modalWindow.style.top = modalWindowPositionCalc(productOrderButton.offsetTop,
      productOrderButton.getBoundingClientRect().top); /* присваиваем модальному окну вычисленную верхнюю координату top */
    modalWindow.classList.add("modal-active"); /* показываем модальное окно */
    modalOverlay.classList.add("modal-active"); /* показываем подложку */
  });
}

if (cartButtons != undefined) { /* проверяем, на какой из страниц мы находимся (определён ли класс .catalog__cart-button) */
  for (i = 0; i < cartButtons.length; i++) { /* кнопок корзины на странице catalog пока 3, потом может стать больше. Делаем для них цикл */
    cartButtons[i].addEventListener("click", function () { /* клик на кнопку */
      modalWindow.style.top = modalWindowPositionCalc(this.offsetTop,
        this.getBoundingClientRect().top); /* присваиваем модальному окну вычисленную верхнюю координату top */
      modalWindow.classList.add("modal-active"); /* показываем модальное окно */
      modalOverlay.classList.add("modal-active"); /* показываем подложку */
    });
  }
}

modalOverlay.addEventListener("click", function() { /* при клике за пределами модального окна, оно исчезает */
  modalWindow.classList.remove("modal-active");
  modalOverlay.classList.remove("modal-active");
});
