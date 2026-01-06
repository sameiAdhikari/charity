const form = document.querySelector(".touch .height form");
const formbtn = document.querySelector(".touch .height form  button");
const inputFields = document.querySelectorAll(
  ".touch .height form .form-id input"
);
let isValid = true;

function validateInput(event) {
  event.preventDefault();
  inputFields.forEach((input) => {
    const nextSibling = input.nextElementSibling;
    if (input.value === "") {
      nextSibling.style.display = "block";
      input.style.border = "1px solid red";
      isValid = false;
    } else {
      nextSibling.style.display = "none";
      input.style.border = "1px solid black";
      isValid = true;
    }
  });
  if (isValid) {
    // form.submit();
    alert("your form is submitted");
    form.reset();
  }
}

formbtn.addEventListener("click", validateInput);
