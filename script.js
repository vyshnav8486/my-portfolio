// Add any interactive functionality here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio is ready!');
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });  
  document.querySelector('.nav-home').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  });
  document.querySelector('a[href="#"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent reloading the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  });
  function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
  }
      