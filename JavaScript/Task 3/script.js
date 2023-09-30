let buttonDiv = document.querySelector(".button-div");

let ansFun = function (e) {
  if (e.target.classList[0] == "button-div") return;

  let oldResult = document.querySelector(".ans-div");
  if (oldResult) {
    oldResult.remove();
  }

  let input1 = document.querySelector(".first-number").value;
  let input2 = document.querySelector(".second-number").value;

  if (input1 == "" || input2 == "") {
    alert("Enter The Inputs Correctly");
    return;
  }

  let operator = e.target.value;
  let ans = eval(` ${input1}${operator}${input2}`);

  if (!isNaN(ans) && isFinite(ans)) {
    ans = ans;
  } else {
    ans = "Infinite";
  }

  let html = `
  <div class="ans-div">
    <p>The Result Is :</p>
    <p>${ans}</p>
  </div>
  `;
  buttonDiv.insertAdjacentHTML("afterend", html);
};
buttonDiv.addEventListener("click", ansFun);
