const animElements = document.querySelectorAll(".scroll-animation");
const animElementsRight = document.querySelectorAll(".scroll-animation-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.1 }
);

animElements.forEach((el) => observer.observe(el));
animElementsRight.forEach((el) => observer.observe(el));
