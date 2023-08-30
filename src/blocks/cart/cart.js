document.addEventListener("DOMContentLoaded", () => {
  initCartOpenBtn();
  initCartCloseBtn();
  initQuantityButtons();
  updateCartDisplay([]);
});

function handleCartState() {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("cart_visible");
}

function initCartOpenBtn() {
  const cartOpenBtn = document.querySelector(".cart__open-btn");
  cartOpenBtn.addEventListener("click", handleCartState);
}

function initCartCloseBtn() {
  const cartCloseBtns = document.querySelectorAll(".cart__close-btn");
  cartCloseBtns.forEach((cartCloseBtn) => {
    cartCloseBtn.addEventListener("click", handleCartState);
  });
}

function updateCartDisplay(cartItems) {
  if (cartItems.length !== 0) {
    const empty = document.querySelector(".cart__empty");
    empty.style.display = "none";
  } else {
    const empty = document.querySelector(".cart__empty");
    empty.style.display = "block";
  }

  const cartList = document.querySelector(".cart__list");
  cartList.innerHTML = "";
  let sum = 0;

  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("cart__item");
    listItem.setAttribute("data-product-id", item.id);

    listItem.innerHTML = `
      <img class="cart__item-img" src="${item.image}" alt="${item.name}">
      <p class="cart__item-name">${item.name}</p>
      <span class="cart__item-quantity">
        <button class="cart__quantity-button cart__quantity-button_minus">-</button>
        <span class="cart__quantity-num">${item.quantity}</span>
        <button class="cart__quantity-button cart__quantity-button_plus">+</button>
      </span>
      <span class="cart__item-price">$${item.price}</span>
    `;
    sum += item.price * item.quantity;
    cartList.append(listItem);
  });

  const sumResult = document.querySelector(".cart__sum-result");
  sumResult.innerHTML=`$${sum.toFixed(2)}`;
}

function initQuantityButtons() {
  const cartList = document.querySelector(".cart__list");

  cartList.addEventListener("click", function(event) {
    if (event.target.classList.contains("cart__quantity-button_plus")) {
      const productId = event.target.closest(".cart__item").dataset.productId;
      updateCartItemQuantity(productId, 1);
    } else if (event.target.classList.contains("cart__quantity-button_minus")) {
      const productId = event.target.closest(".cart__item").dataset.productId;
      updateCartItemQuantity(productId, -1);
    }
  });
}

function updateCartItemQuantity(productId, delta) {
  const product = cartItems.find(item => item.id === productId);

  if (product) {
    product.quantity += delta;

    if (product.quantity <= 0) {
      const productIndex = cartItems.indexOf(product);
      cartItems.splice(productIndex, 1);
    }

    updateCartDisplay(cartItems);
  }
}

