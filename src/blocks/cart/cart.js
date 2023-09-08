document.addEventListener("DOMContentLoaded", () => {
  initCartOpenBtn();
  initCartCloseBtn();
  initQuantityButtons();
  initCartPurchaseBtn();
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
  const cart = document.querySelector(".cart");
  cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart__close-btn")) {
      handleCartState();
    }
  });
}

function initCartPurchaseBtn() {
  const cartPurchase = document.querySelector(".cart__purchase");
  cartPurchase.addEventListener("click", handlePurchaseState);
}

function handlePurchaseState() {
  const contactCart = document.querySelector("#contactCart");
  contactCart.classList.toggle("contact_visible");
  handleCartState();
}

function updateCartDisplay(cartItems) {
  const empty = document.querySelector(".cart__empty");
  const sum = document.querySelector(".cart__sum");
  const cartNumber = document.querySelector(".navigation__cart-number");
  const cartPurchase = document.querySelector(".cart__purchase");

  if (cartItems.length !== 0) {
    empty.style.display = "none";
    sum.style.display = "block";
    cartNumber.classList.add("navigation__cart-number_on");
    cartPurchase.style.display = "block";
  } else {
    empty.style.display = "flex";
    sum.style.display = "none";
    cartPurchase.style.display = "none";
    cartNumber.classList.remove("navigation__cart-number_on");
  }

  const cartList = document.querySelector(".cart__list");
  cartList.innerHTML = "";
  let totalSum = 0;
  let totalNum = 0;

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
    totalSum += item.price * item.quantity;
    totalNum += item.quantity;
    cartList.append(listItem);
  });

  cartNumber.textContent = totalNum;
  const sumResult = document.querySelector(".cart__sum-result");
  sumResult.innerHTML = `$${totalSum.toFixed(2)}`;
}

function initQuantityButtons() {
  const cartList = document.querySelector(".cart__list");

  cartList.addEventListener("click", (event) => {
    const productId = event.target.closest(".cart__item").dataset.productId;

    if (event.target.classList.contains("cart__quantity-button_plus")) {
      updateCartItemQuantity(productId, 1);
    } else if (event.target.classList.contains("cart__quantity-button_minus")) {
      updateCartItemQuantity(productId, -1);
    }
  });
}

function updateCartItemQuantity(productId, delta) {
  const product = cartItems.find(item => item.id === productId);

  if (!product) return;

  product.quantity += delta;

  if (product.quantity <= 0) {
    const productIndex = cartItems.indexOf(product);
    cartItems.splice(productIndex, 1);
  }

  updateCartDisplay(cartItems);
}
