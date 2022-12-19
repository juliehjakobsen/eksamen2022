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

const wrappers = document.querySelectorAll(".article_wrapper");
const elements = document.querySelectorAll(".flip");

wrappers.forEach((wrapper, index) => {
  wrapper.addEventListener("click", () => {
    elements[index].classList.toggle("article_info");
  });
});
