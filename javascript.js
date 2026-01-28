let images = ["photos/IMG_2308.JPG", "photos/np1.png", "photos/np2.png"];

document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  //------------------------------------validation to short letters to show less words--------------------------------------------------
  const paragraph = document.querySelectorAll(".causes .container .details p");
  paragraph.forEach((para) => {
    const p = para.textContent.trim();
    if (p.length >= 200) {
      para.textContent = p.slice(0, 200) + "...";
    }
  });
}); //------------------------------------DOMContentLoadedfunction end--------------------------------------------------

const learnMoreButton = document.querySelector(
  "#hero-section > div.container > button",
);
//------------------------------------learn more button end of home page-------------------------------------------------
learnMoreButton?.addEventListener("click", () => {
  const containerDetailes = document.querySelector("#containerDetailes");
  containerDetailes.style.display = "block";
  window.document.body.style.overflow = "hidden";
});
const cancelButton = document.querySelector(
  "#containerDetailes .modal .close-btn",
);
cancelButton?.addEventListener("click", () => {
  const containerDetailes = document.querySelector("#containerDetailes");
  containerDetailes.style.display = "none";
  window.document.body.style.overflow = "auto";
});
