const navigationHamburger = document.querySelector('.navigation__hamburger');
const navigationList = document.querySelector('.navigation__list');

navigationHamburger.addEventListener('click', () => {
  navigationList.classList.toggle('navigation__list_active');
});
