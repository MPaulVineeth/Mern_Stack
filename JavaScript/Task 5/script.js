let inputs = [
  ...document.querySelectorAll("input"),
  ...document.querySelectorAll("textarea"),
];

let submitButton = document.querySelector(".submit-button");

let show = function (message, currentLabel) {
  let html = `
      <p class="text-Error">${message} is required</p>
  `;
  currentLabel.insertAdjacentHTML("afterend", html);
};

let clearError = function (currentLabel) {
  let errorMessage = currentLabel.nextElementSibling;

  if (errorMessage) {
    errorMessage.remove();
  }
};

let checkFun = function (e) {
  let allFilled = true;

  inputs.forEach(function (currentLabel) {
    clearError(currentLabel);

    let name = currentLabel.name;
    let isEmpty = currentLabel.value == "";

    if (isEmpty) {
      allFilled = false;
      currentLabel.style.borderColor = "red";

      let message =
        name == "Name" || name == "Message" ? `This field` : `A valid ${name}`;

      show(message, currentLabel);
    } else {
      currentLabel.style.borderColor = "black";
    }
  });

  if (!allFilled) {
    e.preventDefault();
  }
};

submitButton.addEventListener("click", checkFun);
