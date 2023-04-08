const number = document.querySelectorAll(".number");
const numberinput = (number) => {
  if (currentnumber == "0") {
    currentnumber = number;
  } else {
    currentnumber += number;
  }
};
let currentnumber = "0";
let prevnumber = "";
let calculationoperator = "";
const inputoperator = (operator) => {
  prevnumber = currentnumber;
  calculationoperator = operator;
  currentnumber = "0";
};
const inputscreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  inputscreen.value = number;
};
number.forEach((number) => {
  number.addEventListener("click", (event) => {
    event.preventDefault();
    numberinput(event.target.value);
    updateScreen(currentnumber);
    console.log(prevnumber);
    console.log(currentnumber);
    console.log(calculationoperator);
  });
});
const operator = document.querySelectorAll(".operator");
operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    event.preventDefault();
    inputoperator(event.target.value);
    updateScreen(calculationoperator);
  });
});
const equal = document.querySelector(".equal-sign");
equal.addEventListener("click", () => {
  let result = "";
  switch (calculationoperator) {
    case "+":
      result = parseFloat(prevnumber) + parseFloat(currentnumber);
      break;
    case "-":
      result = parseFloat(prevnumber) - parseFloat(currentnumber);
      break;
    case "*":
      result = parseFloat(prevnumber) * parseFloat(currentnumber);
      break;
    case "/":
      result = parseFloat(prevnumber) / parseFloat(currentnumber);
      break;
    default:
      return;
  }
  currentnumber = result;
  calculationoperator = "";
  updateScreen(currentnumber);
});
const allclear = document.querySelector(".all-clear");
allclear.addEventListener("click", () => {
  currentnumber = "0";
  calculationoperator = "";
  updateScreen(currentnumber);
});
const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
  currentnumber = currentnumber / 100;
  updateScreen(currentnumber);
});