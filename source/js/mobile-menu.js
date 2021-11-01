const navMob = document.querySelector('.main-nav__mobile-menu');
const navToggle = document.querySelector('.main-nav__toggle');

  navMob.classList.remove('main-nav__mobile-menu--nojs');
  navMob.classList.add('main-nav__mobile-menu--closed');
  navToggle.addEventListener('click', function() {
    navMob.classList.toggle('main-nav__mobile-menu--closed');
    navMob.classList.toggle('main-nav__mobile-menu--opened');
  });
