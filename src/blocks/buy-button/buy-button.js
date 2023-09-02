let products = [];
let cartItems = [];

fetch("data/products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
  })
  .catch((error) => console.error("Error loading products:", error));

document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const productId = this.dataset.productId;
    const product = products.find((p) => p.id === productId);

    if (!product) {
      console.error(`Product with ID ${productId} not found`);
      return;
    }

    const existingProduct = cartItems.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    updateCartDisplay(cartItems);
  });
});
