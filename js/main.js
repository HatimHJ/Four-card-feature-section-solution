// const submitBtn = document.querySelector(".btn");
// const email = document.querySelector(".email");
// const errorText = document.querySelector(".error");
// const errorIcon = document.querySelector(".error").previousElementSibling;

// submitBtn.addEventListener("click", handleForm);

// function handleForm(e) {
//   e.preventDefault();
//   validation(email);
// }

// const validation = (item) => {
//   if (item.value === "") {
//     item.style.border = `2px solid #f96262`;
//     errorIcon.style.visibility = "visible";
//     errorText.textContent = `Email cannot be empty`;
//   }
//   // email Validation
//   else if (!ValidateEmail(item.value)) {
//     item.style.border = `2px solid #f96262`;
//     errorIcon.style.visibility = "visible";
//     errorText.textContent = `Looks like this is not an email`;
//   } else {
//     errorText.textContent = ``;
//     errorIcon.style.visibility = "hidden";
//     item.style.border = `1px solid #ce9797`;
//   }
// };

// /**
//  *  Email Validation Source
//  * https://www.w3resource.com/javascript/form/email-validation.php
//  *
//  */
// function ValidateEmail(mail) {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
//     return true;
//   }
//   return false;
// }
