console.log("Product page loaded");

/* ================= PRODUCT DATA ================= */
const productData = {
  "Powertools": [
    "Electric Drill",
    "Impact Drill",
    "Angle Grinder",
    "Die Grinder",
    "Orbital Sander",
    "Belt Sander",
    "Cut-off Machine",
    "Circular Saw",
    "Rotary Hammer",
    "Impact Wrench"
  ],

  "Hand Tools": [
    "Claw Hammer",
    "Ball Peen Hammer",
    "Screwdriver Set",
    "Adjustable Wrench",
    "Combination Wrench Set",
    "Long Nose Pliers",
    "Cutting Pliers",
    "Allen Key Set",
    "Measuring Tape",
    "Spirit Level"
  ],

  "Welding Materials": [
    "Welding Rods",
    "Welding Wires",
    "Welding Machine",
    "Welding Helmet",
    "Welding Gloves",
    "Chipping Hammer",
    "Ground Clamp",
    "Electrode Holder",
    "Welding Apron",
    "Welding Accessories"
  ],

  "Steel / Rebars": [
    "Deformed Steel Bars",
    "Round Bars",
    "Angle Bars",
    "Flat Bars",
    "Channel Bars",
    "I-Beams",
    "H-Beams",
    "Steel Plates",
    "Steel Pipes",
    "Square Tubes"
  ],

  "Plumbing": [
    "Faucets",
    "Shower Sets",
    "Ball Valves",
    "Gate Valves",
    "Check Valves",
    "Water Meters",
    "Flexible Hoses",
    "Pipe Clamps",
    "Drain Cleaners",
    "Plumbing Accessories"
  ],

  "PVC Pipes & Fittings": [
    "PVC Pipes",
    "Elbow Fittings",
    "Tee Fittings",
    "Couplings",
    "Adapters",
    "Reducers",
    "Union Joints",
    "PVC Solvent Cement",
    "End Caps",
    "Clean Out Fittings"
  ],

  "Lumber / Plywood": [
    "Ordinary Lumber",
    "Marine Plywood",
    "Phenolic Boards",
    "Hardwood Lumber",
    "Softwood Lumber",
    "Commercial Plywood",
    "Wood Panels",
    "Wood Studs",
    "Wood Beams",
    "Plywood Sheets"
  ],

  "Roofing / Tubulars": [
    "GI Roofing Sheets",
    "Pre-painted Roofing Sheets",
    "Corrugated Sheets",
    "Ridge Rolls",
    "Steel Tubulars",
    "Square Tubes",
    "Rectangular Tubes",
    "Roof Fasteners",
    "Insulation Sheets",
    "Roofing Accessories"
  ],

  "Wires & Cables": [
    "THHN Wires",
    "THW Wires",
    "Flat Cords",
    "Extension Cords",
    "Speaker Wires",
    "Control Cables",
    "Service Drop Cables",
    "Armored Cables",
    "Coaxial Cables",
    "Electrical Accessories"
  ],

  /* ===== MACHINERY PRODUCTS ===== */

  "Power Arc Bar Cutter": [
    "Portable Bar Cutter",
    "Heavy Duty Bar Cutter",
    "Electric Bar Cutter",
    "Hydraulic Bar Cutter",
    "Rebar Cutting Machine",
    "Automatic Bar Cutter",
    "Compact Bar Cutter",
    "Industrial Bar Cutter",
    "High-Speed Bar Cutter",
    "Bar Cutter Accessories"
  ],

  "Tamping Rammer": [
    "Diesel Tamping Rammer",
    "Gasoline Tamping Rammer",
    "Electric Tamping Rammer",
    "Heavy Duty Rammer",
    "Compact Rammer",
    "Soil Compaction Rammer",
    "Construction Rammer",
    "Industrial Rammer",
    "Portable Rammer",
    "Rammer Spare Parts"
  ],

  "Plate Compactor": [
    "Single Plate Compactor",
    "Reversible Plate Compactor",
    "Diesel Plate Compactor",
    "Gasoline Plate Compactor",
    "Heavy Duty Compactor",
    "Soil Compactor",
    "Asphalt Compactor",
    "Construction Compactor",
    "Industrial Compactor",
    "Compactor Accessories"
  ],

  "Ride-On Roller": [
    "Single Drum Roller",
    "Double Drum Roller",
    "Diesel Ride-On Roller",
    "Hydraulic Roller",
    "Asphalt Roller",
    "Road Construction Roller",
    "Heavy Duty Roller",
    "Compact Ride-On Roller",
    "Industrial Roller",
    "Roller Spare Parts"
  ],

  "Pneumatic Jack Hammer": [
    "Light Duty Jack Hammer",
    "Heavy Duty Jack Hammer",
    "Industrial Jack Hammer",
    "Concrete Breaker",
    "Rock Breaker",
    "Air-Powered Jack Hammer",
    "Demolition Hammer",
    "Road Breaking Hammer",
    "Construction Jack Hammer",
    "Jack Hammer Accessories"
  ],

  "Roadline Applicator": [
    "Manual Roadline Applicator",
    "Thermoplastic Applicator",
    "Cold Paint Applicator",
    "Hand-Pushed Applicator",
    "Automatic Roadline Machine",
    "Line Marking Machine",
    "Road Marking Equipment",
    "Industrial Applicator",
    "Portable Applicator",
    "Applicator Accessories"
  ],

  "Tower Light": [
    "LED Tower Light",
    "Diesel Tower Light",
    "Solar Tower Light",
    "Portable Tower Light",
    "Construction Tower Light",
    "Mobile Lighting Tower",
    "Industrial Tower Light",
    "Emergency Tower Light",
    "High Mast Light",
    "Tower Light Accessories"
  ]
};

/* ================= MODAL LOGIC ================= */
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    modalTitle.textContent = category;
    modalList.innerHTML = "";

    (productData[category] || ["Product details coming soon"]).forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      modalList.appendChild(li);
    });

    modal.style.display = "flex";
modalList.scrollTop = 0; // always start at top

  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

/* ================= PAGE ANIMATIONS ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ---- Letter Fade Animation (FAST & SAFE) ---- */
  const headings = document.querySelectorAll("h1, h2, h3, h4");

  headings.forEach(heading => {
    const text = heading.textContent;
    heading.textContent = "";
    heading.style.whiteSpace = "pre";

    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = char === " " ? "inline" : "inline-block";
      span.style.opacity = 0;
      span.style.transform = "translateY(10px)";
      span.style.transition = `opacity 0.35s ease ${i * 0.025}s, transform 0.35s ease ${i * 0.025}s`;
      heading.appendChild(span);
    });
  });

  /* ---- Scroll Reveal Elements ---- */
  const revealElements = document.querySelectorAll(
    "p, img, section, .product-card, .about-card, .contact-box"
  );

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(25px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  /* ---- Intersection Observer ---- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        if (entry.target.tagName.match(/H1|H2|H3|H4/)) {
          entry.target.querySelectorAll("span").forEach(span => {
            span.style.opacity = 1;
            span.style.transform = "translateY(0)";
          });
        } else {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document
    .querySelectorAll("h1, h2, h3, h4, p, img, section, .product-card, .about-card, .contact-box")
    .forEach(el => observer.observe(el));
});
