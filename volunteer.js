"use strict";

//------------------------------------footer contact page--------------------------------------------------

const footerLayer = document.querySelector(".footer-layer");
const footerLayerCancel = document.querySelector(
  ".footer-layer .content-side form .cancel-icon i"
);
const contactUs = document.querySelector("footer .footer-part .contact-us a");
contactUs.addEventListener("click", (e) => {
  e.preventDefault();
  footerLayer.style.display = "block";
  body.classList.add("no-scroll");
});
footerLayerCancel.addEventListener("click", () => {
  footerLayer.style.display = "none";
  body.classList.remove("no-scroll");
});

//------------------------------------validation to short letters to show less words--------------------------------------------------
const paragraph = document.querySelectorAll(".causes .container .details p");
paragraph.forEach((para) => {
  const p = para.textContent.trim();
  if (p.length >= 200) {
    para.textContent = p.slice(0, 200) + "...";
  }
});

//   const apikey = 'dd0bdba3de2b482eb7c1630c947de645'
//   const url = 'https://newsapi.org/v2/everything?q=Apple&from=2025-01-11&sortBy=popularity&apiKey=dd0bdba3de2b482eb7c1630c947de645';

//   var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

// let date = new Date();
// console.log(date.getUTCFullYear())
