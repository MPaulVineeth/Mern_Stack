let dateDiv = document.querySelector(".date-div");
let timeDiv = document.querySelector(".time-div");

let show = function (toShow, divName, className) {
  let html = `
  <p class=${className}>${toShow}</p>
  `;

  let old = document.querySelector(`.${className}`);
  if (old) {
    old.remove();
  }

  divName.insertAdjacentHTML("beforeend", html);
};

let dateFun = function () {
  const date = new Date();
  let options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Using Internationalizing API
  let displayDate = new Intl.DateTimeFormat("en-In", options).format(date);

  displayDate = displayDate.split(" ").join("/");

  show(displayDate, dateDiv, "display-date");
};

let timeFun = function () {
  // Not initialized in global space because seconds will change when we click again and again
  const date = new Date();

  show(date, timeDiv, "display-time");
};

dateDiv.addEventListener("click", dateFun);
timeDiv.addEventListener("click", timeFun);
