const time = document.querySelector(".privacy-policy .wrapper .time");

setInterval(() => {
  // let d = new Date().toLocaleDateString();
  let c = new Date().toLocaleString();
  time.textContent = c;
}, 1000);

const footerLayer = document.querySelector(".footer-layer");
const footerLayerCancel = document.querySelector(
".footer-layer .content-side form .cancel-icon i"
);
const contactUs = document.querySelector("footer .footer-part .contact-us a");
contactUs.addEventListener("click", (e) => {
e.preventDefault();
footerLayer.style.display = "block";
});
footerLayerCancel.addEventListener("click", () => {
footerLayer.style.display = "none";
});
