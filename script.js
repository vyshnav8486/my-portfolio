const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden');
    navMenu.classList.add('visible');
  } else {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('visible');
  }
});
