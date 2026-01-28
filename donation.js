//-------------------------------------------both form (logIn and signUp form) validation-------------------------------

// const form1 = document.querySelector(".signin-side .login-form form");
// const email = document.querySelector(
//   ".signin-side .login-form form .for-email input"
// );
// const emailSpan = document.querySelector(
//   ".signin-side .login-form form .for-email span"
// );
// const password = document.querySelector(
//   ".signin-side .login-form form .for-password input"
// );
// const passwordSpan = document.querySelector(
//   ".signin-side .login-form form .for-password span"
// );
// const signinBtn = document.querySelector(
//   ".signin-side .login-form form .button button"
// );

// function form1Validation(e) {
//   e.preventDefault();
//   let istrue = true;
//   if (email.value.trim() === "") {
//     emailSpan.style.display = "flex";
//     emailSpan.textContent = "Email is required";
//     email.style.border = "1px solid #ff0000";
//     istrue = false;
//   } else {
//     emailSpan.style.display = "none";
//     email.style.border = "1px solid rgb(0, 252, 21)";
//   }

//   if (password.value.trim() === "") {
//     passwordSpan.style.display = "flex";
//     passwordSpan.textContent = "Password is required";
//     password.style.border = "1px solid #ff0000";
//     istrue = false;
//   } else {
//     passwordSpan.style.display = "none";
//     password.style.border = "1px solid rgb(0, 252, 21)";
//   }
//   if (istrue) {
//     fetch("/sinninbtn", {
//       method: "post",
//       body: new FormData(form1),
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert("response is okey");
//         } else {
//           alert("form submission is failed");
//         }
//       })
//       .catch((error) => alert("errors find", error));
//   }
// }
// signinBtn.addEventListener("click", form1Validation);
// signinBtn.addEventListener("submlit", form1Validation);

// const signinSide = document.querySelector(".both-form .form .signin-side");
// const registerSide = document.querySelector(".both-form .form .register-side");
// const registerBtn = document.querySelector(".register-drive-page button");
// const signinBtn2 = document.querySelector(".login-drive-page button");

// registerBtn.addEventListener("click", () => {
//   signinSide.style.display = "none";
//   registerSide.style.display = "flex";
//   registerSide.style.visibility = "visible";
// });
// signinBtn2.addEventListener("click", () => {
//   signinSide.style.display = "flex";
//   registerSide.style.display = "none";
// });

// const fullName = document.querySelector(
//   ".both-form .form .register-side .login-form .for-name input"
// );
// const fullNameSpan = document.querySelector(
//   ".both-form .form .register-side .login-form .for-name span"
// );
// const registerEmail = document.querySelector(
//   ".both-form .form .register-side .login-form .for-email input"
// );
// const registerEmailSpan = document.querySelector(
//   ".both-form .form .register-side .login-form .for-email span"
// );
// const registerPassword = document.querySelector(
//   ".both-form .form .register-side .login-form .for-password input"
// );
// const registerPasswordSpan = document.querySelector(
//   ".both-form .form .register-side .login-form .for-password span"
// );
// const registerButton = document.querySelector(
//   ".both-form .form .register-side .login-form .button button"
// );

// const form2 = document.querySelector('.register-side .form2');

// registerButton.addEventListener("click", (e) => {
//   e.preventDefault();

//   let valid = true;
//   if (fullName.value.trim() === "") {
//     fullName.style.border = "1px solid #ff0000";
//     fullNameSpan.style.display = "flex";
//     valid =false;
//   }else{
//     fullName.style.border = "1px solid green";
//     fullNameSpan.style.display = "none";
//   }
//   if (registerEmail.value.trim() === "") {
//     registerEmail.style.border = "1px solid #ff0000";
//     registerEmailSpan.style.display = "flex";
//     valid= false;
//   }else{
//     registerEmail.style.border = "1px solid green";
//     registerEmailSpan.style.display = "flex";
//   }
//   if (registerPassword.value.trim() === "") {
//     registerPassword.style.border = "1px solid #ff0000";
//     registerPasswordSpan.style.display = "flex";
//     valid = false;
//   }else{
//     registerPassword.style.border = "1px solid green";
//     registerPasswordSpan.style.display = "flex";
//   }

//   if(valid){
//     form2.submit();
//     fetch('/register-form', {
//       method:'post',
//       body: new FormData(form2)
//     })
//     .then((response)=>{
//       if(response.ok){
//         alert('form is submitted successfully');
//       }else{
//         alert('Form fail to submit');
//       }
//     }).catch((error)=> console.log(error));
//   }

// });

const inputWraper = document.querySelectorAll(
  "#login-form .container .right-form label input",
);
inputWraper.forEach((ipt) => {
  ipt.addEventListener("focus", (e) => {
    const span = e.target.closest("label").querySelector("span");
    span.style.bottom = "50%";
  });
  ipt.addEventListener("blur", (e) => {
    const span = e.target.closest("label").querySelector("span");
    if (e.currentTarget.value === "") {
      span.style.bottom = "2px";
    } else {
      span.style.bottom = "50%";
    }
  });
});
const checkbox = document.querySelectorAll(
  "#login-form .container .right-form .checkbox-wraper div input[type='checkbox']",
);
checkbox.forEach((input) => {
  input.addEventListener("change", (e) => {
    const checkParent = input.closest("div");
    if (e.target.checked) {
      checkParent.style.backgroundColor = "green";
      checkParent.style.borderColor = "green";
    } else {
      checkParent.style.backgroundColor = "transparent";
      checkParent.style.borderColor = "var(--secondary-background-color)";
    }
  });
});

const createAccountBtn = document.querySelector(
  "#login-form .container #createAccountForm",
);
const loginFormContainer = document.querySelector(
  "#login-form > div > div.right-form.loginFormContainer",
);
const createFormContainer = document.querySelector("#login-form > div > form");
const logInBtn = document.querySelector(
  "#login-form > div > div.right-form.loginFormContainer.formActive > div.buttons.accountButtons > button",
);
const loginFormBtn = document.querySelector("#createAccountBtn > button.login");
createAccountBtn.addEventListener("click", () => {
  loginFormContainer.style.display = "none";
  createFormContainer.style.display = "flex";
  console.log(createFormContainer);
});
loginFormBtn.addEventListener("click", () => {
  loginFormContainer.style.display = "flex";
  createFormContainer.style.display = "none";
});
logInBtn.addEventListener("click", () => {
  const loginFormInputs = document.querySelectorAll(
    "#login-form .container .loginFormContainer input",
  );
  const validators = {
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    password: (v) => v.length >= 8,
    userName: (v) => /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
    surname: (v) => /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
  };

  let isFormValid = true;
  for (const input of loginFormInputs) {
    const validatorType = input.dataset.validator;
    if (input.value.trim() === "") {
      input.focus();
      isFormValid = false;
      break;
    } else if (validatorType && !validators[validatorType](input.value)) {
      input.style.color = "red";
      input.focus();
      isFormValid = false;
      break;
    } else {
      input.style.color = "black";
    }
  }
  if (isFormValid) {
    loginFormInputs.forEach((input) => {
      input.value = null;
    });
    console.log("pass the validation");
  }
});
