const productOrderButton = document.querySelector('.promoted-product__button-order');
const cartButtons = document.querySelectorAll('.catalog__cart-button');
const modalWindow = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');

if (productOrderButton != undefined) {
  productOrderButton.addEventListener('click', function () {
  event.preventDefault();
  modalWindow.classList.add('modal-active');
  modalOverlay.classList.add('modal-active');
  });
}

if (cartButtons != undefined) {
  for (i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener('click', function () {
      event.preventDefault();
      modalWindow.classList.add('modal-active');
      modalOverlay.classList.add('modal-active');
    });
  }
}

modalOverlay.addEventListener('click', function() {
  modalWindow.classList.remove('modal-active');
  modalOverlay.classList.remove('modal-active');
});
