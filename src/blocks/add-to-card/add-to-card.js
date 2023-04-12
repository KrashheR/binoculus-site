const addToCard = document.querySelectorAll('.add-to-card');
const navigationBasketNumber = document.querySelector('.navigation__basket-number');

addToCard.forEach((item) => {
  item.addEventListener('click', () => {
    const currentNumber = Number(navigationBasketNumber.innerHTML);
    if (currentNumber === 0) {
      navigationBasketNumber.classList.add('navigation__basket-number_on');
    }
    navigationBasketNumber.innerHTML = currentNumber + 1;
  });
});

