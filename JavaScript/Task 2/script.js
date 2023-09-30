let alphaFunc = function (str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    map.set(i, str.charCodeAt(i));
  }

  let sortedMap = new Map([...map.entries()].sort(([, a], [, b]) => a - b));

  return [...sortedMap.values()].reduce(function (acc, value) {
    return acc + String.fromCharCode(value);
  }, "");
};

let otherAlphaFun = function (str) {
  return str.split("").sort().join("");
};

// Both above functions perform same , so any one is correct
console.log(`Input : webmaster`);
console.log(alphaFunc("webmaster"), otherAlphaFun("webmaster"));
