// Update this value if the business WhatsApp contact changes. Use country code + number, digits only.
const WHATSAPP_NUMBER = "254742664335";
const makeWhatsAppUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".product-enquire").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "your products";
    const message = `Hello, I visited your website and I'm interested in ${product}. Kindly share the product specifications, availability and quotation. Thank you.`;
    window.open(makeWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  });
});

const filterButtons = [...document.querySelectorAll(".filter-btn")];
const cards = [...document.querySelectorAll(".product-card")];
const searchInput = document.querySelector("#product-search");
let activeFilter = "all";
function updateProducts() {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach((card) => {
    const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchMatch = !term || `${card.dataset.name} ${card.textContent}`.toLowerCase().includes(term);
    const show = categoryMatch && searchMatch;
    card.classList.toggle("hidden", !show);
    if (show) visible++;
  });
  document.querySelector(".empty-state")?.remove();
  if (!visible) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No matching products. Try another search or category.";
    document.querySelector("#product-grid").append(empty);
  }
}
filterButtons.forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle("selected", item === button));
  updateProducts();
}));
searchInput.addEventListener("input", updateProducts);
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
