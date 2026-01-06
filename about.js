// const locationSendThird = document.querySelector(
//     ".welcome-to-charity .helping-hands .third-child"
//   );
//   const locationSendSecond = document.querySelector(
//     ".welcome-to-charity .helping-hands .second-child"
//   );
//   locationSendThird.addEventListener("click", () => {
//     location.href = "donation.html";
//   });
//   locationSendSecond.addEventListener("click", () => {
//     location.href = "causes.html";
//   });

// const contactUs = document.querySelector("footer .contact-us");
// const footerForm = document.querySelector("footer .footer-layer");
// const cancelform = document.querySelector(
//   "footer .content-side .cancel-icon"
// );
// const body = document.querySelector('body');

// contactUs.addEventListener("click", (e) => {
//   event.preventDefault();
//   footerForm.style.display = "flex";
//   body.classList.add("no-scroll");
// });
// cancelform.addEventListener("click", (e) => {
//   footerForm.style.display = "none";
//   body.classList.remove("no-scroll");
// });

const firstFundraiser = document.querySelector(".first-fundraiser");
const secondFundraiser = document.querySelector(".second-fundraiser");
const thirdFundraiser = document.querySelector(".third-fundraiser");
const fourthFundraiser = document.querySelector(".fourth-fundraiser");

const nationalAids = document.querySelector("#national-aid");
const socialActions = document.querySelector("#social-actions");
const animals = document.querySelector("#animals");
const birthdayPresents = document.querySelector("#birthday-presents");
const anyOthers = document.querySelector("#any-others");

const titles = document.querySelectorAll(".list-of-fundraiser .titles span");
titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    titles.forEach((e) => {
      e.classList.remove("add-active");
    });
    e.target.classList.add("add-active");
  });
});

nationalAids.addEventListener("click", () => {
  firstFundraiser.style.display = "flex";
  secondFundraiser.style.display = "none";
  thirdFundraiser.style.display = "none";
  fourthFundraiser.style.display = "none";
});
socialActions.addEventListener("click", () => {
  firstFundraiser.style.display = "none";
  secondFundraiser.style.display = "flex";
  thirdFundraiser.style.display = "none";
  fourthFundraiser.style.display = "none";
});
animals.addEventListener("click", () => {
  firstFundraiser.style.display = "none";
  secondFundraiser.style.display = "none";
  thirdFundraiser.style.display = "flex";
  fourthFundraiser.style.display = "none";
});
birthdayPresents.addEventListener("click", () => {
  firstFundraiser.style.display = "none";
  secondFundraiser.style.display = "none";
  thirdFundraiser.style.display = "none";
  fourthFundraiser.style.display = "flex";
});

// -------------------------------------date timing setting function-----------------------------

document.addEventListener('DOMContentLoaded',()=>{
  let setDate = ()=>{
    const span = document.querySelector('.about-body .container .left-side .description .paragraph-details .date');
  let date = new Date();
  let time = date.toDateString();
  let time2 = date.toTimeString();
  span.textContent =`${time}   ${time2}`;
  };
  setInterval(setDate, 1000);
})
