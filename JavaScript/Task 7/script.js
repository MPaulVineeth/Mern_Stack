let control = document.querySelector(".video-control");

let start = document.querySelector(".start-button");
let stop = document.querySelector(".stop-button");

let startFun = function () {
  control.play();
};

let stopFun = function () {
  control.pause();
};

start.addEventListener("click", startFun);
stop.addEventListener("click", stopFun);
