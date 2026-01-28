"use strict";

const submitbtn = document.querySelector(".touch div form .button button");
const fullName = document.querySelector(
  ".touch div form .form-id div .full-name"
);
const surname = document.querySelector(".touch div form .form-id div .surname");
const emailAddress = document.querySelector(
  ".touch div form .form-id div .email-address"
);
const mobileNumber = document.querySelector(
  ".touch div form .form-id div .mobile-number"
);
const fullNameSpan = document.querySelector(
  ".touch div form .form-id div .full-name-span"
);
const surnameSpan = document.querySelector(
  ".touch div form .form-id div .surname-span"
);
const emailAddressSpan = document.querySelector(
  ".touch div form .form-id div .email-address-span"
);
const mobileNumberSpan = document.querySelector(
  ".touch div form .form-id div .mobile-number-span"
);
const isValid = true;
const formValidation = (e) => {
  const inputs = document.querySelectorAll("");

  // if (fullName.value === "") {
  //   fullName.style.border = "1px solid red";
  //   fullNameSpan.style.display = "flex";
  // } else {
  //   fullNameSpan.style.display = "none";
  //   fullName.style.border = "1px solid green";
  // }
  // surname.value === ""
  //   ? ((surnameSpan.style.display = "block"),
  //     (surname.style.border = "1px solid red"))
  //   : ((surnameSpan.style.display = "none"),
  //     (surname.style.border = "1px solid green"));
  // emailAddress.value === ""
  //   ? ((emailAddressSpan.style.display = "block"),
  //     (emailAddress.style.border = "1px solid red"))
  //   : ((emailAddressSpan.style.display = "none"),
  //     (emailAddress.style.border = "1px solid green"));
  // mobileNumber.value === ""
  //   ? (mobileNumberSpan.style.display = "block")(
  //       (mobileNumber.style.border = "1px solid red")
  //     )
  //   : (mobileNumberSpan.style.display = "none"),
  //   (mobileNumber.style.border = "1px solid green");

  if (isValid) {
    const form = document.querySelector(".volunter-form");
    alert("form is submitted");
    const inputsParts = document.querySelectorAll(
      ".touch div form .form-id div input"
    );
    inputsParts.forEach((input) => {
      input.value = "";
    });
  }
};
submitbtn.addEventListener("click", (event) => {
  event.preventDefault();
  formValidation();
});
submitbtn.addEventListener("submit", (event) => {
  event.preventDefault();
  formValidation();
});
