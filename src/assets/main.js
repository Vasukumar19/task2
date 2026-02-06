// This file is loaded on every page via layout

// Scroll reveal animation for cards
const animateOnScroll = () => {
  const cards = document.querySelectorAll('.card-hover');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
};

// Contact form fake submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const formMessage = document.getElementById('formMessage');

    formMessage.innerHTML = `
      <div class="alert alert-success mt-3">
        Thank you, ${name}! Your message has been sent successfully.
      </div>`;
    contactForm.reset();
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
});