// JavaScript for Animations and Smooth Scrolling

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 50,
              behavior: 'smooth'
          });
      }
  });
});

// Fade-in Animation on Scroll
const elementsToAnimate = document.querySelectorAll('.section-title, .section-text, .product-item, .contact-form, .footer');

const fadeInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
      }
  });
}, {
  threshold: 0.2 // Trigger animation when 20% of the element is visible
});

elementsToAnimate.forEach(element => fadeInObserver.observe(element));

// Button Hover Animation
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = 'none';
  });
});
