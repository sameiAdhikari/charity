"use strict";

const btn = document.querySelector("#volunterForm form .button button");

const formValidation = (e) => {
  let valid = true;
  const inputs = document.querySelectorAll("#volunterForm form .inputs input");

  const checkBox = document.querySelector(
    "#volunterForm form .terms-and-condition .termsNcondition .checkbox input",
  );

  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.style.border = "1px solid #ff0000";
      valid = false;
    } else {
      input.style.border = "1px solid rgb(3, 200, 6)";
    }
  });

  const parent = checkBox.closest(".checkbox");
  if (!checkBox.checked) {
    parent.style.border = "2px solid red";
    return;
  } else {
    parent.style.border = "2px solid green";
  }

  if (valid) {
    const form = document.querySelector("#volunterForm form");
    form.submit();
    alert("Thank you for submitting the form");
  }
};

btn.addEventListener("click", formValidation);
btn.addEventListener("submit", formValidation);
