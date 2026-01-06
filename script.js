"use strict";

document.addEventListener("DOMContentLoaded", () => {


  const logo = document.querySelector("header .header div");
  const logoDetails = document.querySelector(".logo-details");
  logo.addEventListener("click", () => {
    logoDetails.style.display = "flex";
    body.classList.add("no-scroll");
  });
  const cancel = document.querySelector(".logo-details div .fa-arrow-left ");
  cancel.addEventListener("click", () => {
    logoDetails.style.display = "none";
    body.classList.remove("no-scroll");
  });

  // document.addEventListener("click", (e) => {
  //   if (
  //     !logoDetails.contains(events.target) &&
  //     !cancel.contains(events.target)
  //   ) {
  //     logoDetails.style.display = "none";
  //     body.classList.remove("no-scroll");
  //   }
  // });

  // ----------------------paragraph  validation for more than 200 words----------------------------------------

  const paragraph = document.querySelectorAll(".details p");
  paragraph.forEach((para) => {
    const p = para.textContent.trim();
    if (p.length > 220) {
      para.textContent = p.slice(0, 220) + "....";
    }
  });

  //-----------------function to go onto top-------------------------------------------

  const goToTop = document.querySelector("#goto-top button");
  goToTop.addEventListener("click", () => {
    const header = document.querySelector(".header");
    header.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const formToReset = document.querySelector(".touch div form");
    formToReset.reset();
  });

  //--------------------------------------function to redirect make a donation part ---------------------------------

  const locationSendThird = document.querySelector(
    ".welcome-to-charity .helping-hands .third-child"
  );
  const locationSendSecond = document.querySelector(
    ".welcome-to-charity .helping-hands .second-child"
  );
  locationSendThird.addEventListener("click", () => {
    location.href = "donation.html";
  });
  locationSendSecond.addEventListener("click", () => {
    location.href = "causes.html";
  });
  // --------------------------------------function to scroll down to an specific section---------------------------------------------
  const donationDemo = document.querySelector(".helping-hands .first-child");
  donationDemo.addEventListener("click", () => {
    const volunter = document.querySelector(".touch");
    volunter.scrollIntoView({
      behavior: "smooth", // values: smooth,instant,auto
      block: "center", //values: start,end,center
    });
  });

  // --------------------------------scholarship function---------------------------

  const scholarship = document.querySelector(
    ".welcome-to-charity .scholarship-section"
  );
  const donationForthChild = document.querySelector(
    ".helping-hands .forth-child"
  );
  const body = document.querySelector("body");

  donationForthChild.addEventListener("click", () => {
    scholarship.style.right = "0px";
    body.classList.add("no-scroll");
  });

  const cancelBtn = document.querySelector(
    ".welcome-to-charity .scholarship-section i"
  );

  cancelBtn.addEventListener("click", () => {
    scholarship.style.right = "-450px";
    body.classList.remove("no-scroll");
  });

  //----------------------------------------------learn more button function-------------------------------

  const learnMoreBtn = document.querySelector(".main-body .text .learn-more");
  const learnMoreDescription = document.querySelector(
    ".main-body .description"
  );
  const hidingIcon = document.querySelector(".description i");

  learnMoreBtn.addEventListener("click", () => {
    learnMoreDescription.style.display = "block";
    // body.classList.add('no-scroll');
  });
  hidingIcon.addEventListener("click", () => {
    learnMoreDescription.style.display = "none";
    // body.classList.remove('no-scroll');
  });
 //---------------------------------------------- function to display contact form in footer----------------------------------------------

  const contactUs = document.querySelector("footer .contact-us");
  const footerForm = document.querySelector("footer .footer-layer");
  const cancelform = document.querySelector(
    "footer .content-side .cancel-icon"
  );

  contactUs.addEventListener("click", (e) => {
    event.preventDefault();
    footerForm.style.display = "flex";
    body.classList.add("no-scroll");
  });
  cancelform.addEventListener("click", (e) => {
    footerForm.style.display = "none";
    body.classList.remove("no-scroll");
  });

  //------------------------------fondraiser function-------------------------

  const organisers = document.querySelector(
    ".application .right-side .heading .first-heading"
  );
  const donators = document.querySelector(
    ".application .right-side .heading .second-heading"
  );
  const organisersBox = document.querySelector(
    ".application .right-side .body .for-organisers"
  );
  const donatorsBox = document.querySelector(
    ".application .right-side .body .for-donators"
  );

  donators.addEventListener("click", () => {
    organisers.style.backgroundColor = "#0a1525";
    donators.style.backgroundColor = "#3d416e";
    organisersBox.style.left = "-100%";
    donatorsBox.style.left = "0%";
    organisers.addEventListener("click", () => {
      organisers.style.backgroundColor = "#3d416e";
      donators.style.backgroundColor = "#0a1525";
      organisersBox.style.left = "0%";
      donatorsBox.style.left = "100%";
    });
  });
}); //---------------DOMContentLoaded end --------------------------------

//----------------------------------------------image Function to change image-------------------------------

// let greaterThenSign = document.querySelector(".greater-than-sign");
// let lessThenSign = document.querySelector(".less-than-sign");
// let currentIndex = 0;
// greaterThenSign.addEventListener("click", () => {
//   let mainImage = document.querySelector(".main-section img");
//   currentIndex = (currentIndex + 1) % images.length;
//   mainImage.src = images[currentIndex];
//   lessThenSign.style.display = "block";

//   if (currentIndex === 2) {
//     greaterThenSign.style.display = "none";
//   }
// });
// lessThenSign.addEventListener("click", () => {
//   let mainImage = document.querySelector(".main-section img");
//   if (currentIndex > 0) {
//     currentIndex = currentIndex - 1;
//     mainImage.src = images[currentIndex];
//     greaterThenSign.style.display = "block";
//   }
//   if (currentIndex <= 0) {
//     lessThenSign.style.display = "none";
//   }
// });
let pointer1 = document.querySelector(".pointer1");
let pointer2 = document.querySelector(".pointer2");
let pointer3 = document.querySelector(".pointer3");
let mainImage = document.querySelector(".main-body .main-section img");
// let pointer = document.querySelector(".sliding-dots div");
pointer1.addEventListener("click", () => {
  mainImage.src = "photos/np.png";
  pointer1.classList.add("pointer1");
  pointer2.classList.remove("pointer1");
  pointer3.classList.remove("pointer1");
});
pointer2.addEventListener("click", () => {
  mainImage.src = "photos/np1.png";
  pointer2.classList.add("pointer1");
  pointer1.classList.remove("pointer1");
  pointer3.classList.remove("pointer1");
});
pointer3.addEventListener("click", () => {
  mainImage.src = "photos/np2.png";
  pointer3.classList.add("pointer1");
  pointer2.classList.remove("pointer1");
  pointer1.classList.remove("pointer1");
});

//------------------------------------- validation to highlight a menu by setting active class upon page loaded----------------------------

// document.addEventListener("DOMContentLoaded", MenuLinkHilight);

// function MenuLinkHilight() {
//   const menuLinks = document.querySelectorAll(".menu-bar ul li a");

//   const currentPath = window.location.pathname.split("/").pop(); // Extract just the filename
//   menuLinks.forEach((link) => {
//     const getLink = link.getAttribute("href").split("/").pop(); // Extract filename similarly
//     if (getLink === currentPath) {
//       link.classList.add("active");
//       // link.style.color = "#fff";
//     } else {
//       link.classList.remove("active");
//     }
//   });
// }

// ---------------------video play when click on logo-----------------------
// document.addEventListener("DOMContentLoaded", (e) => {

// });

// ---------------------------footer contact form validation---------------------------------
