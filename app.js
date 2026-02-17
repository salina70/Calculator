let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let output;

clear.addEventListener("click", function () {
  window.location.reload();
});

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (
      !(this.classList.contains("equal") || this.classList.contains("clear"))
    ) {
      if (display.textContent === "0" || display.textContent === output) {
        display.textContent = "";
        display.textContent = this.textContent;
      } else {
        display.textContent += this.textContent;
      }
    }
  });
});

equal.addEventListener("click", function () {
  display.textContent = eval(display.textContent);
  output = display.textContent;
});
