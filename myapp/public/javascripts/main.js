document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (This would be handled by the server in a real app)');
        this.reset();
      });
    }
  });