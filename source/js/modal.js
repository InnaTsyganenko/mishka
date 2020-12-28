/* call window */

const productOrderButton = document.querySelector(".promoted-product__button-order");
const cartButtons = document.querySelectorAll(".catalog__cart-button");
const modalWindow = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");

const modalWindowHeight = getComputedStyle(modalWindow).height.replace('px', '') * 1.0;

function modalWindowPositionCalc (yCoord, yCoordSmall) {
  if (yCoordSmall > modalWindowHeight) {
    yCoord -= modalWindowHeight;
  }
  return yCoord + 'px';
}

if (productOrderButton != undefined) {
  productOrderButton.addEventListener("click", function () {
    modalWindow.style.top = modalWindowPositionCalc(productOrderButton.offsetTop,
      productOrderButton.getBoundingClientRect().top);
    modalWindow.classList.add("modal-active");
    modalOverlay.classList.add("modal-active");
  });
}

if (cartButtons != undefined) {
  for (i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener("click", function () {
      modalWindow.style.top = modalWindowPositionCalc(this.offsetTop,
        this.getBoundingClientRect().top);

      modalWindow.classList.add("modal-active");
      modalOverlay.classList.add("modal-active");
    });
  }
}

modalOverlay.addEventListener("click", function() {
  modalWindow.classList.remove("modal-active");
  modalOverlay.classList.remove("modal-active");
});
