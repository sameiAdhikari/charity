// -----------------------------footer contact form validation----------------------------------------------------------
const signInBtn = document.querySelector(
  "body > div.footer-layer > div > div.content-side > form > button",
);
const inputBtns = document.querySelectorAll(
  "body > div.footer-layer > div > div.content-side > form > div > input",
);
const contactForm = document.querySelector(
  "body > div.footer-layer > div > div.content-side > form",
);
let valid = true;

let logInValidation = (e) => {
  const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/; // Matches standard email format
  const passkey = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/; // Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*!?])[A-Za-z\d@#$%&*!?]{8,}$/;

  e.preventDefault();

  for (const input of inputBtns) {
    if (input.value === "") {
      input.focus();
      input.style.border = "1px solid red";
      valid = false;
      break;
    } else {
      const inputType = input.dataset.validate;
      if (inputType === "email") {
        const closestSpan = input.parentElement.querySelector("span");
        if (!regex.test(input.value)) {
          closestSpan.style.display = "block";
          input.style.border = "1px solid red";
          valid = false;
          break;
        } else {
          closestSpan.style.display = "none";
          input.style.border = "1px solid green";
          valid = true;
        }
      } else if (inputType === "password") {
        const closestSpan = input.parentElement.querySelector("span");
        if (!passkey.test(input.value)) {
          closestSpan.style.display = "block";
          input.style.border = "1px solid red";
          valid = false;
          break;
        } else {
          closestSpan.style.display = "none";
          input.style.border = "1px solid green";
          valid = true;
        }
      }
    }
  }

  if (valid) {
    contactForm.submit();
    contactForm.reset();
    alert("form is submitted");
  }
};

signInBtn.addEventListener("click", logInValidation);
signInBtn.addEventListener("submit", logInValidation);

const logintoFacebook = document.querySelector(
  "body > div.footer-layer > div > div.content-side > form > div.buttons > div.signup-with.facebook",
);
logintoFacebook.addEventListener("click", () => {
  // window.location.href = "https://www.facebook.com/login/";
  // window.location.href =
  //   "https://www.facebook.com/v18.0/dialog/oauth" +
  //   "?client_id=YOUR_APP_ID" +
  //   "&redirect_uri=https://your-site.com" +
  //   "&response_type=code" +
  //   "&scope=email";
  window.open(
    "https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=https://your-site.com&response_type=code&scope=email",
    "_blank",
    "width=600,height=400",
    "noopener,noreferrer",
  );
});

const logintoGoogle = document.querySelector(
  "body > div.footer-layer > div > div.content-side > form > div.buttons > div.signup-with.google",
);
logintoGoogle.addEventListener("click", () => {
  // window.location.href = "https://accounts.google.com/signin";
  window.open(
    "https://accounts.google.com/singin",
    // "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=https://your-site.com&response_type=code&scope=email profile",
    "_blank",
    "width=600,height=400",
    "noopener,noreferrer",
  );
});
