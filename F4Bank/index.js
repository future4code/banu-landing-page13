const btnMobile = document.querySelector('.btn-mobile');

function togleMenu() {
  const headerContent = document.querySelector('.header-content');

  headerContent.classList.toggle('active');
  btnMobile.classList.toggle('btn-active');
}

btnMobile.addEventListener('click', togleMenu);
