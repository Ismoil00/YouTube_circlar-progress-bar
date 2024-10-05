let CircularBar = document.querySelector(".circular-bar");
let PercentValue = document.querySelector(".percent");

let InitialValue = 0;
let finaleValue = 70;
let speed = 10;

let timer = setInterval(() => {
  InitialValue += 1;

  CircularBar.style.background = `conic-gradient(#4285f4 ${
    (InitialValue / 100) * 360
  }deg, #e8f0f7 0deg)`;
  PercentValue.innerHTML = InitialValue + "%";

  if (InitialValue >= finaleValue) {
    clearInterval(timer);
  }
}, speed);
