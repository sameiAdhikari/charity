let images = ["photos/IMG_2308.JPG", "photos/np1.png", "photos/np2.png"];

document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");

  //------------------------------------menu bar hilighted function--------------------------------------------------
  // const menuBarItems = document.querySelectorAll(".menu-bar ul li a");
  // menuBarItems.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     item.classList.add("active");
  //   });
  // });
  //------------------------------------video shown function--------------------------------------------------

  const logo = document.querySelector("header .header div img");
  const video = document.querySelector(".mutedBackground");
  logo.addEventListener("click", () => {
    video.style.display = "flex";
    body.classList.add("no-scroll");
  });
  const cancelIcon = document.querySelector(
    ".mutedBackground .logo-details #cancel-icon"
  );
  const playVideo = document.querySelector(
    ".mutedBackground .logo-details video"
  );
  cancelIcon.addEventListener("click", () => {
    video.style.display = "none";
    body.classList.remove("no-scroll");
  });
  //------------------------------------footer contact page--------------------------------------------------

  // const footerLayer = document.querySelector(".footer-layer");
  // const footerLayerCancel = document.querySelector(
  //   ".footer-layer .content-side form .cancel-icon i"
  // );
  // const contactUs = document.querySelector("footer .footer-part .contact-us a");
  // contactUs.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   footerLayer.style.display = "block";
  //   body.classList.add("no-scroll");
  // });
  // footerLayerCancel.addEventListener("click", () => {
  //   footerLayer.style.display = "none";
  //   body.classList.remove("no-scroll");
  // });

  // -----------------------------footer contact form validation----------------------------------------------------------
  const email = document.querySelector(
    "footer .contact-form form .input-email input"
  );
  const password = document.querySelector(
    "footer .contact-form form .input-password input"
  );
  const signIn = document.querySelector("footer .contact-form form .sign-in");
  const contactForm = document.querySelector("footer .contact-form form ");
  let valid = true;

  let logInValidation = (e) => {
    const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3}$/;
    const passkey =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*!?])[A-Za-z\d@#$%&*!?]{8,}$/;
    e.preventDefault();
    if (email.value === "" || !email.value.match(regex)) {
      email.style.border = "1px solid #ff0000";
      valid = false;
    } else {
      email.style.border = "1px solid rgb(0, 255, 21)";
      valid = true;
    }
    if (password.value === "" || !password.value.match(passkey)) {
      password.style.border = "1px solid #ff0000";
      valid = false;
    } else {
      password.style.border = "1px solid rgb(0, 255, 21)";
      valid = true;
    }

    if (valid) {
      alert("form is submitted");
      contactForm.submit();
    }
  };
  const footerLink = document.querySelectorAll(
    "footer .mainFooter .titleLink div a "
  );
  // footerLink.forEach((link) => {
  //   link.addEventListener("click", (e) => {
  //     link.classList.remove("linkActive");
  //     e.currentTarget.classList.add("linkActive");
  //     console.log(e.currentTarget);
  //   });
  // });

  // signIn.addEventListener("click", logInValidation);
  // signIn.addEventListener("submit", logInValidation);

  //------------------------------------validation to short letters to show less words--------------------------------------------------
  const paragraph = document.querySelectorAll(".causes .container .details p");
  paragraph.forEach((para) => {
    const p = para.textContent.trim();
    if (p.length >= 200) {
      para.textContent = p.slice(0, 200) + "...";
    }
  });
}); //------------------------------------DOMContentLoadedfunction end--------------------------------------------------
