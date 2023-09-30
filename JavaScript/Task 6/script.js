let inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {
  input.required = true;
});

let divs = {
  login: document.querySelector(".login-div"),
  createAccount: document.querySelector(".create-div"),
  forgot: document.querySelector(".forgot-password-div"),
  ending: document.querySelector(".ending-div"),
};

let buttons = {
  forgot: document.querySelectorAll(".forgot-button"),
  create: document.querySelectorAll(".create-acc"),
  login: document.querySelectorAll(".login-button"),
};

let buttons_submit = document.querySelectorAll(".submit-button");

let hideAllDivs = function () {
  Object.values(divs).forEach((div) => div.classList.add("d-none"));
};

let buttonActions = {
  forgot: () => hideAllDivs() || divs.forgot.classList.remove("d-none"),
  create: () => hideAllDivs() || divs.createAccount.classList.remove("d-none"),
  login: () => hideAllDivs() || divs.login.classList.remove("d-none"),
  submit: () => hideAllDivs() || divs.ending.classList.remove("d-none"),
};

Object.keys(buttons).forEach((button) =>
  buttons[button].forEach((btn) =>
    btn.addEventListener("click", buttonActions[button])
  )
);

buttons_submit.forEach((button) => {
  button.addEventListener("click", function () {
    let currentDiv = Object.values(divs).find(
      (div) => !div.classList.contains("d-none")
    );
    let currentInputs = currentDiv.querySelectorAll("input");
    let allFilled = Array.from(currentInputs).every(
      (input) => input.value !== ""
    );

    if (!allFilled) {
      alert("Please fill all the fields before submitting.");
    } else {
      hideAllDivs();
      divs.ending.classList.remove("d-none");
    }
  });
});
