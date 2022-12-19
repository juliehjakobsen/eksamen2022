import "./style.css";

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");
const articles = document.querySelectorAll(".card");

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

sidenVises();

function sidenVises() {
  console.log("sidenVises");
  console.log(articles);

  articles.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("valgt");
    });
  });
}
