// Change this to the business WhatsApp number (country code + number, digits only).
const WHATSAPP_NUMBER = "919880703268";

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Enquiry form -> opens WhatsApp with a pre-filled message (no backend needed)
const form = document.getElementById("enquiry-form");
const error = form.querySelector(".form-error");
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const type = data.get("type");
  const message = data.get("message").trim();

  if (!name || !phone || !type) {
    error.hidden = false;
    return;
  }
  error.hidden = true;

  const text =
    `Hi WOODSPACE, I'd like a free consultation.\n\n` +
    `Name: ${name}\nPhone: ${phone}\nProject: ${type}\n` +
    (message ? `Details: ${message}` : "");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  form.reset();
});
