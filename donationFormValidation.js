// document.addEventListener("DOMContentLoaded", () => {
//   //------------------------------------- validation of input to check if it's empty or filled----------------------------
//   const donation = document.querySelector(".proceed-to-pay button");
//   let donation1 = document.querySelector(".for-donation");

//   function donationFormValidation(e) {
//     e.prevetDefault();
//     let name = document.querySelector(".for-name");
//     let surname = document.querySelector(".for-surname");
//     let address1 = document.querySelector(".for-address");
//     let card1 = document.querySelector(".for-card");
//     const firstSpan = document.querySelector(".donation-form form .pop-up-for-information");
//     const firstName = document.querySelector(".span-for-name");
//     const lastName = document.querySelector(".span-for-surname");
//     const address = document.querySelector(".span-for-address");
//     const donation = document.querySelector(".span-for-donation");
//     const card = document.querySelector(".span-for-card");

//     if (name.value === "") {
//       firstName.style.display = "block";
//     } else {
//       firstName.style.display = "none";
//     }
//     surname.value === ""
//       ? (lastName.style.display = "block")
//       : (lastName.style.display = "none");

//     address1.value === ""
//       ? (address.style.display = "block")
//       : (address.style.display = "none");

//     donation1.value === ""
//       ? (donation.style.display = "block")
//       : (donation.style.display = "none");

//     card1.value === ""
//       ? (card.style.display = "block")
//       : (card.style.display = "none");

//     let isValid = true;
//     if (isValid) {
//       const donationForm = document.querySelector(
//         ".donation-form-for-validation"
//       );
//       donationForm.submit();
//       alert("form is submitted");
//       donationForm.style.display = "none";
//     } else {
//       donation.style.display = "block";
//     }
//   }
//   donation.addEventListener("click", donationFormValidation);
//   donation.addEventListener("submit", function () {
//     donationFormValidation();
//   });

//   // ------------------------------------- validation of checkBox to display value to the input field----------------------------

//   const checkBox1 = document.querySelector(".checkbox-for-10");
//   checkBox1.addEventListener("click", () => {
//     if (checkBox1.checked) {
//       const checkBox1Span = document.querySelector(
//         ".select-amount .checkbox10"
//       ).textContent;
//       donation1.value = checkBox1Span;
//     } else {
//       donation1.value = "";
//     }
//   });
//   const checkBox2 = document.querySelector(".checkbox-for-50");
//   checkBox2.addEventListener("click", () => {
//     if (checkBox2.checked) {
//       const checkBox2Span = document.querySelector(
//         ".select-amount .checkbox50"
//       ).textContent;
//       donation1.value = checkBox2Span;
//     } else {
//       donation1.value = "";
//     }
//   });
//   const checkBox3 = document.querySelector(".checkbox-for-100");
//   checkBox3.addEventListener("click", () => {
//     if (checkBox3.checked) {
//       const checkBox3Span = document.querySelector(
//         ".select-amount .checkbox100"
//       ).textContent;
//       donation1.value = checkBox3Span;
//     } else {
//       donation1.value = "";
//     }
//   });
// });

const donation = document.querySelector(".proceed-to-pay button");
let donation1 = document.querySelector(".for-donation");


const validateform = (e) => {
  e.preventDefault();

  let isValid = true;
  const name = document.querySelector(".for-name");
  const nameSpan = document.querySelector(".span-for-name");
  const surname = document.querySelector(".for-surname");
  const surnameSpan = document.querySelector(".span-for-surname");
  const address = document.querySelector(".for-address");
  const addressSpan = document.querySelector(".span-for-address");
  const donation = document.querySelector(".for-donation");
  const donationSpan = document.querySelector(".span-for-donation");
  const card = document.querySelector(".for-card");
  const cardSpan = document.querySelector(".span-for-card");
  if (name.value === "") {
    nameSpan.style.display = "block";
    name.style.border = "1px solid #ff0000";
    isValid = false;
  } else {
    nameSpan.style.display = "none";
    name.style.border = "1px solid #3f5a41";
  }

  if (surname.value === "") {
    surnameSpan.style.display = "block";
    surname.style.border = "1px solid #ff0000";
    isValid = false;

  } else {
    surnameSpan.style.display = "none";
    surname.style.border = "1px solid #3f5a41";
  }
  if (address.value === "") {
    addressSpan.style.display = "block";
    address.style.border = "1px solid #ff0000";
    isValid = false;

  } else {
    addressSpan.style.display = "none";
    address.style.border = "1px solid #3f5a41";
  }
  if (card.value === "") {
    cardSpan.style.display = "block";
    card.style.border = "1px solid #ff0000";
    isValid = false;

  } else {
    cardSpan.style.display = "none";
    card.style.border = "1px solid #3f5a41";
  }

  if(isValid){
    const form = document.querySelector('.donation-form form');
    form.submit();
    alert('Thank you for your saving life.');

  }
};

donation.addEventListener("click", validateform);

const donationCheckBox = document.querySelector(".donation-amount");
const selfEnterAmount = document.querySelector(".self-enter-amount");
const enterAmount = document.querySelector(".self-enter-amount input");
donationCheckBox.addEventListener("click", () => {
  if (donationCheckBox.checked) {
    selfEnterAmount.style.display = "flex";
    selfEnterAmount.style.width = "100%";
    selfEnterAmount.style.flexDirection = "row";
  } else {
    selfEnterAmount.style.display = "none";
  }
});
