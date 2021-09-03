const btnMobile = document.querySelector('.btn-mobile');
const faqList = document.querySelectorAll('.faq-lista dt');

function togleMenu() {
  const headerContent = document.querySelector('.header-content');

  headerContent.classList.toggle('active');
  btnMobile.classList.toggle('btn-active');
}

btnMobile.addEventListener('click', togleMenu);

function toggleFaqList(item) {
  item.classList.toggle('dt-active');
  item.nextElementSibling.classList.toggle('dt-active');
}

faqList.forEach((item) => {
  item.addEventListener('click', () => toggleFaqList(item));
});

console.log('Test');
