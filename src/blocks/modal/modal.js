function hideModal(event) {
  const modal = event.target.closest(".modal");
  if (modal) {
    modal.style.display = "none";
  }
}

document.querySelectorAll(".modal__button").forEach(button => {
  button.addEventListener("click", hideModal);
});