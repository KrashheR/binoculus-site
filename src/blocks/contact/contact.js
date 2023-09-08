document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
});

function isValidPhoneNumber(phoneNumber) {
  const phoneValidationRegex = /^(?:\+7|8)\d{10}$/;

  return phoneValidationRegex.test(phoneNumber);
}

function closeContactCart() {
  const contactCart = document.getElementById("contactCart");
  contactCart.classList.toggle("contact_visible");
}

function handleFormSubmission(event) {
  const phoneInput = document.querySelector(".contact__phone");
  event.preventDefault();
  if (isValidPhoneNumber(phoneInput.value)) {
    showModal("Менеджер свяжется с вами в течение 5-10 минут!");
    closeContactCart();
  } else {
    showModal("Введите корректный номер телефона!");
  }
}

function initEventListeners() {
  const closeButton = document.querySelector(".contact__close-btn");
  const submitButton = document.querySelector(".contact__button");

  closeButton.addEventListener("click", closeContactCart);
  submitButton.addEventListener("click", handleFormSubmission);
}

function showModal(message) {
  const modal = document.getElementById("modalCart");
  const modalMessage = modal.querySelector(".modal__message");

  modalMessage.textContent = message;
  modal.style.display = "flex";
}