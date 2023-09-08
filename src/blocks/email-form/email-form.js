document.addEventListener("DOMContentLoaded", () => {
  initEmailForm();
});

function initEmailForm() {
  const emailForm = document.querySelector(".email-form");
  const modalEmail = document.getElementById("modalEmail");

  emailForm.addEventListener("submit", (event) => handleEmailFormSubmit(event, modalEmail));
}

function handleEmailFormSubmit(event, modal) {
  event.preventDefault();
  modal.style.display = "flex";
}