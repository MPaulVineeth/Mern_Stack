let reverseNumberFunc = function (number) {
  number = String(number).split("");
  let ans = [];

  for (let i = number.length - 1; i >= 0; i--) {
    ans.push(number[i]);
  }
  return ans.join("");
};

let number = 32243;
let reversedNumber = reverseNumberFunc(number);
console.log(`Input : ${number}`);
console.log(reversedNumber);
