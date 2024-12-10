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
  document.getElementById("home-link").addEventListener("click", function () {
    loadContent(`<section id="home">
      <h2>Welcome to My Portfolio</h2>
      <p>This is the home page content.</p>
    </section>`);
  });

  document.getElementById("about-link").addEventListener("click", function () {
    loadContent(`<section id="about">
      <h2>About Me</h2>
      <p>This is the about page content. The navbar remains fixed.</p>
    </section>`);
  });

  document.getElementById("contact-link").addEventListener("click", function () {
    loadContent(`<section id="contact">
      <h2>Contact Me</h2>
      <p>This is the contact page content.</p>
    </section>`);
  });

  // Function to load content dynamically
  function loadContent(html) {
    document.getElementById("content").innerHTML = html;
  }    