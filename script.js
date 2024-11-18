// Add scroll event to change the background color of the navbar when scrolled
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // Smooth scroll to sections when clicking on navbar links
  const links = document.querySelectorAll('#navbar ul li a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,  // Offset to account for navbar
        behavior: 'smooth'
      });
    });
  });
  