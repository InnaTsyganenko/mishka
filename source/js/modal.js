const productOrderButton = document.querySelector('.promoted-product__button-order');
const cartButtons = document.querySelectorAll('.catalog__cart-button');
const modalWindow = document.querySelector('.modal');
const pageOverlay = document.querySelector('.page__overlay');

if (productOrderButton != undefined) {
  productOrderButton.addEventListener('click', function () {
  event.preventDefault();
  modalWindow.classList.add('modal-active');
  pageOverlay.classList.add('modal-active');
  });
}

if (cartButtons != undefined) {
  for (i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener('click', function () {
      event.preventDefault();
      modalWindow.classList.add('modal-active');
      pageOverlay.classList.add('modal-active');
    });
  }
}

pageOverlay.addEventListener('click', function() {
  modalWindow.classList.remove('modal-active');
  pageOverlay.classList.remove('modal-active');
});
