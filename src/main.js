import { doc } from "prettier";
import "./style.css";

// konstanter til burgermenu
const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");
// konstant til card
const articles = document.querySelectorAll(".card");
const wrappers = document.querySelectorAll(".article_wrapper");
const elements = document.querySelectorAll(".flip");

// konstanter til logind
const openLogin = document.querySelector("#konto");
const closeLogin = document.querySelector("#luk");
const logIn = document.querySelector("#loginbox");


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


  openLogin.addEventListener("click", aabnLogin);
closeLogin.addEventListener("click", lukLogin);
}



wrappers.forEach((wrapper, index) => {
  wrapper.addEventListener("click", () => {
    elements[index].classList.toggle("article_info");
  });
});

const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");


acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}

if (sessionStorage.getItem("fjerncookieboks")) {
  fjernCookieBoks.classList.add("hidden");
}





function aabnLogin() {
  console.log("hejigen")
  logIn.classList.add("vis");
  
}

function lukLogin() {
  console.log("hej")
  logIn.classList.add("gemt");
  
}



