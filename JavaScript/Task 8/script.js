let inputs = [...document.querySelectorAll(".need-input")];
let passwords = [...document.querySelectorAll(".password-input")];

let submitButton = document.querySelector(".submit-button");

let show = function (message, fontSize, currentLabel) {
  let html = `
  <p
  class="text-nowrap text-Error"
  style="
    font-size: ${fontSize};
  ">
  ${message}
  </p>
  `;
  currentLabel.insertAdjacentHTML("afterend", html);
};

let clearError = function (currentLabel) {
  let errorMessage = currentLabel.nextElementSibling;

  if (errorMessage) {
    errorMessage.remove();
  }
};

let checkForPasswords = function () {
  return passwords[0].value == passwords[1].value;
};

let checkFun = function (e) {
  let allFilled = true;

  inputs.forEach(function (currentLabel) {
    clearError(currentLabel);
    console.log(currentLabel);
    let isEmpty = currentLabel.value == "";

    if (isEmpty) {
      allFilled = false;

      let message = "POOR";

      show(message, "large", currentLabel);
    } else {
      clearError(currentLabel);
    }
  });

  let passwordsAns = checkForPasswords();

  if (!passwordsAns) {
    show("POOR OR MISMATCH", "medium", passwords[1]);
    show("POOR", "medium", passwords[0]);
  }
  if (!allFilled || !passwordsAns) {
    e.preventDefault();
  }
};

submitButton.addEventListener("click", checkFun);
