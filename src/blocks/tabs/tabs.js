const tabItems = document.querySelectorAll('.tabs__buttons-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

function openTab(event) {
  const tabTarget = event.currentTarget;
  const { button } = tabTarget.dataset;

  tabItems.forEach((item) => {
    item.classList.remove('tabs__buttons-item_active');
  });

  tabContents.forEach((item) => {
    item.classList.remove('tabs__content-item_active');
  });

  tabTarget.classList.add('tabs__buttons-item_active');
  document.querySelector(`#${button}`).classList.add('tabs__content-item_active');
}

tabItems.forEach((element) => {
  element.addEventListener('click', openTab);
});
