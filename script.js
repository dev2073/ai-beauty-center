// JavaScript functionality for SalonBooking landing page

// Survey functionality
function openSurvey() {
  window.open("https://tinyurl.com/ai-beauty-center", "_blank");
}

// Dark mode toggle (optional functionality)
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.documentElement.classList.contains("dark")
  );
}

// Initialize dark mode based on user preference
function initializeDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (darkMode === "true" || (darkMode === null && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

// Animation on scroll
function handleScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideUp");
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  document.querySelectorAll(".card-elegant").forEach((card) => {
    observer.observe(card);
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeDarkMode();
  handleScrollAnimations();

  // Add hover effects to buttons
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });

    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.95)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1.05)";
    });
  });

  // Add click handlers for all survey buttons
  const surveyButtons = document.querySelectorAll(
    'button[onclick="openSurvey()"]'
  );
  surveyButtons.forEach((button) => {
    button.addEventListener("click", openSurvey);
  });
});

// Handle window resize for responsive adjustments
window.addEventListener("resize", function () {
  // Add any responsive adjustments here if needed
});

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages);
