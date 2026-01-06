//-------------------------------------------both form (logIn and signUp form) validation-------------------------------

const form1 = document.querySelector(".signin-side .login-form form");
const email = document.querySelector(
  ".signin-side .login-form form .for-email input"
);
const emailSpan = document.querySelector(
  ".signin-side .login-form form .for-email span"
);
const password = document.querySelector(
  ".signin-side .login-form form .for-password input"
);
const passwordSpan = document.querySelector(
  ".signin-side .login-form form .for-password span"
);
const signinBtn = document.querySelector(
  ".signin-side .login-form form .button button"
);

function form1Validation(e) {
  e.preventDefault();
  let istrue = true;
  if (email.value.trim() === "") {
    emailSpan.style.display = "flex";
    emailSpan.textContent = "Email is required";
    email.style.border = "1px solid #ff0000";
    istrue = false;
  } else {
    emailSpan.style.display = "none";
    email.style.border = "1px solid rgb(0, 252, 21)";
  }

  if (password.value.trim() === "") {
    passwordSpan.style.display = "flex";
    passwordSpan.textContent = "Password is required";
    password.style.border = "1px solid #ff0000";
    istrue = false;
  } else {
    passwordSpan.style.display = "none";
    password.style.border = "1px solid rgb(0, 252, 21)";
  }
  if (istrue) {
    fetch("/sinninbtn", {
      method: "post",
      body: new FormData(form1),
    })
      .then((response) => {
        if (response.ok) {
          alert("response is okey");
        } else {
          alert("form submission is failed");
        }
      })
      .catch((error) => alert("errors find", error));
  }
}
signinBtn.addEventListener("click", form1Validation);
signinBtn.addEventListener("submlit", form1Validation);

const signinSide = document.querySelector(".both-form .form .signin-side");
const registerSide = document.querySelector(".both-form .form .register-side");
const registerBtn = document.querySelector(".register-drive-page button");
const signinBtn2 = document.querySelector(".login-drive-page button");

registerBtn.addEventListener("click", () => {
  signinSide.style.display = "none";
  registerSide.style.display = "flex";
  registerSide.style.visibility = "visible";
});
signinBtn2.addEventListener("click", () => {
  signinSide.style.display = "flex";
  registerSide.style.display = "none";
});

const fullName = document.querySelector(
  ".both-form .form .register-side .login-form .for-name input"
);
const fullNameSpan = document.querySelector(
  ".both-form .form .register-side .login-form .for-name span"
);
const registerEmail = document.querySelector(
  ".both-form .form .register-side .login-form .for-email input"
);
const registerEmailSpan = document.querySelector(
  ".both-form .form .register-side .login-form .for-email span"
);
const registerPassword = document.querySelector(
  ".both-form .form .register-side .login-form .for-password input"
);
const registerPasswordSpan = document.querySelector(
  ".both-form .form .register-side .login-form .for-password span"
);
const registerButton = document.querySelector(
  ".both-form .form .register-side .login-form .button button"
);

const form2 = document.querySelector('.register-side .form2');

registerButton.addEventListener("click", (e) => {
  e.preventDefault();

  let valid = true;
  if (fullName.value.trim() === "") {
    fullName.style.border = "1px solid #ff0000";
    fullNameSpan.style.display = "flex";
    valid =false;
  }else{
    fullName.style.border = "1px solid green";
    fullNameSpan.style.display = "none";
  }
  if (registerEmail.value.trim() === "") {
    registerEmail.style.border = "1px solid #ff0000";
    registerEmailSpan.style.display = "flex";
    valid= false;
  }else{
    registerEmail.style.border = "1px solid green";
    registerEmailSpan.style.display = "flex";
  }
  if (registerPassword.value.trim() === "") {
    registerPassword.style.border = "1px solid #ff0000";
    registerPasswordSpan.style.display = "flex";
    valid = false;
  }else{
    registerPassword.style.border = "1px solid green";
    registerPasswordSpan.style.display = "flex";
  }

  if(valid){
    form2.submit();
    fetch('/register-form', {
      method:'post',
      body: new FormData(form2)
    })
    .then((response)=>{
      if(response.ok){
        alert('form is submitted successfully');
      }else{
        alert('Form fail to submit');
      }
    }).catch((error)=> console.log(error));
  }

});
