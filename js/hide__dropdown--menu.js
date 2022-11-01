const btnMenu = document.querySelector('.btn__mobile--menu');
const menu = document.querySelector('.nav__header--mobile');
const toggleMenu = function () {
  menu.classList.toggle('open');
};

btnMenu.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btnMenu;
  const menu_is_active = menu.classList.contains('open');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});
