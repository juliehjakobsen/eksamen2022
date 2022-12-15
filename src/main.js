import "./style.css";

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    btn.textContent = "✕";
  } else {
    btn.textContent = "☰";
  }
}

btn.addEventListener("click", toggleMenu);

// sortiment dropdown
const knap = document.querySelector("toggle.knap");
const sortiment = document.querySelector("open_sortiment");

function toggleKnap() {
  sortiment.classList.toggle("shown");

  const knapShown = sortiment.classList.contains("shown");

  if (knapShown) {
    knap.textContent = "✕";
  } else {
    knap.textContent = "❯";
  }
}
knap.addEventListener("click", knapMenu);
