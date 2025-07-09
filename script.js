// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Animate skill bars
const animateSkills = () => {
  const skillBars = document.querySelectorAll('.progress-bar');
  skillBars.forEach(bar => {
    const value = bar.getAttribute('aria-valuenow');
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = value + '%';
    }, 200);
  });
};

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
};

let skillsAnimated = false;
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection && isInViewport(skillsSection) && !skillsAnimated) {
    animateSkills();
    skillsAnimated = true;
  }
});

// Hover effect for service cards
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-15px)';
  });
  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
});

// Portfolio card hover
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    const content = this.querySelector('.portfolio-content');
    content.style.transform = 'translateY(0)';
    content.style.opacity = '1';
  });
  card.addEventListener('mouseleave', function () {
    const content = this.querySelector('.portfolio-content');
    content.style.transform = 'translateY(100%)';
    content.style.opacity = '0';
  });
});

// Hire form submit
document.querySelector('.hire-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const modal = document.querySelector('#hireModal');
  const modalBody = modal.querySelector('.modal-body');
  modalBody.innerHTML = `
    <div class="text-center">
      <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
      <h4 class="mt-3">Thank You!</h4>
      <p>Your request has been submitted successfully. I'll get back to you soon!</p>
      <button class="btn btn-primary mt-3" data-bs-dismiss="modal">Close</button>
    </div>
  `;
});

// Smooth scroll for nav links (excluding # only)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || !document.querySelector(href)) return;

    e.preventDefault();
    const target = document.querySelector(href);
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Hero text animation
const animateText = () => {
  const text = document.querySelector('.hero-content h1');
  if (!text) return;
  const content = text.textContent;
  text.textContent = '';

  [...content].forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    span.style.transform = 'translateY(20px)';
    span.style.display = 'inline-block';
    span.style.transition = `all 0.3s ease ${index * 0.05}s`;
    text.appendChild(span);

    setTimeout(() => {
      span.style.opacity = '1';
      span.style.transform = 'translateY(0)';
    }, 100);
  });
};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  animateText();

  // Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (el) {
    return new bootstrap.Tooltip(el);
  });

  // Thank You Modal Submit
  const contactForm = document.getElementById("contactForm");
  const thankYouModal = document.getElementById("thankYouModal");

  if (contactForm && thankYouModal) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.reset();
      thankYouModal.style.display = "flex";
    });
  }
});

// Close Thank You Modal
function closeThankYou() {
  const modal = document.getElementById("thankYouModal");
  if (modal) modal.style.display = "none";
}

// Back to top
const backToTopBtn = document.getElementById("backToTopBtn");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



