const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (!backToTop) return;
  backToTop.classList.toggle('show', window.scrollY > 300);
});

document.addEventListener("DOMContentLoaded", () => {

  // --------- HEADINGS: faster letter fade ---------
  const headings = document.querySelectorAll("h1, h2, h3, h4");
  headings.forEach(heading => {
    const text = heading.textContent.trim();
    heading.textContent = "";
    heading.style.whiteSpace = "pre"; // preserve spaces
    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = char === " " ? "inline" : "inline-block"; // keep spacing correct
      span.style.opacity = 0;
      span.style.transform = "translateY(15px)"; // slightly smaller movement
      span.style.transition = `opacity 0.4s ease-out ${i * 0.03}s, transform 0.4s ease-out ${i * 0.03}s`; // faster timing
      heading.appendChild(span);
    });
  });

  // --------- Other elements ---------
  const elements = document.querySelectorAll("p, img, section, .product-card, .about-card, .contact-box");

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  });

  // --------- Intersection Observer ---------
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.tagName.match(/H1|H2|H3|H4/)) {
            const spans = entry.target.querySelectorAll("span");
            spans.forEach(span => {
              span.style.opacity = 1;
              span.style.transform = "translateY(0)";
            });
          } else if (entry.target.classList.contains("product-card") || entry.target.classList.contains("about-card")) {
            const cards = entry.target.parentElement.querySelectorAll(entry.target.tagName.toLowerCase() + ", .product-card, .about-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
              }, i * 100); // faster cascade
            });
          } else {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("h1, h2, h3, h4, p, img, section, .product-card, .about-card, .contact-box")
    .forEach(el => observer.observe(el));

});
