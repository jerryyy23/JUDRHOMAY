document.addEventListener("DOMContentLoaded", () => {
  // Scroll-triggered animations
  const animateElements = document.querySelectorAll(".animate");

  if (animateElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            // Stagger child animations
            const children = entry.target.querySelectorAll(".animate-child");
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("fade-in-up");
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animateElements.forEach(el => observer.observe(el));
  }

  // Hero parallax
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      hero.style.backgroundPositionY = `${scrollPos * 0.4}px`;
    });
  }

  // Button hover animation
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.05)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
  });

  // Product card hover animation
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
      card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
    });
  });
});
