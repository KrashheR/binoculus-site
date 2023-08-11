const addToCart = document.querySelectorAll('.add-to-cart');

addToCard.forEach((item) => {
  const navigationBasketNumber = document.querySelector('.navigation__basket-number');

  item.addEventListener('click', () => {
    const currentNumber = Number(navigationBasketNumber.innerHTML);
    if (currentNumber === 0) {
      navigationBasketNumber.classList.add('navigation__basket-number_on');
    }
    navigationBasketNumber.innerHTML = currentNumber + 1;
  });
});

