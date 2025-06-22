// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe the widget heading and widget cards
document.addEventListener("DOMContentLoaded", () => {
  const widgetHeading = document.querySelector(".widget-heading");
  const widgetCards = document.querySelectorAll(".widget-card");

  if (widgetHeading) {
    observer.observe(widgetHeading);
  }

  // Observe each widget card
  widgetCards.forEach((card) => {
    observer.observe(card);
  });
});
