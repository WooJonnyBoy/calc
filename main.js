window.addEventListener("load", () => {
  const previous = document.querySelector(".previous");
  const current = document.querySelector(".current");
  const keys = document.querySelectorAll(".key");
  const operatorValue = document.querySelector(".operator");

  let operator;

  const sum = (curr, prev = 0) => {
    return Number(curr) + Number(prev);
  };

  const subtract = (curr, prev = 0) => {
    if (prev === "" || prev === 0) return Number(curr);
    return Number(prev) - Number(curr);
  };

  const mult = (curr, prev) => {
    if (prev === "" || prev === 0) return Number(curr);
    return Number(curr) * Number(prev);
  };

  const divide = (curr, prev) => {
    if (prev === "" || prev === 0) return Number(curr);
    return Number(prev) / Number(curr);
  };

  Object.entries(keys).forEach((key) => {
    key[1].addEventListener("click", (e) => {
      if (isFinite(e.target.textContent) || e.target.textContent === '.') {
        if(e.target.textContent === '.' && current.value === '') current.value = '0'
        if(e.target.textContent === '.' && current.value.includes('.')) return 
        current.value += e.target.textContent;
      }
      if (e.target.textContent === "+") {
        operator = "+";
        operatorValue.textContent = operator;
        previous.value = sum(current.value, previous.value);
        current.value = "";
      }
      if (e.target.textContent === "-") {
        operator = "-";
        operatorValue.textContent = operator;
        previous.value = subtract(current.value, previous.value);
        current.value = "";
      }
      if (e.target.textContent === "x") {
        operator = "X";
        operatorValue.textContent = operator;
        previous.value = mult(current.value, previous.value);
        current.value = "";
      }
      if (e.target.textContent === "÷") {
        operator = "÷";
        operatorValue.textContent = operator;
        previous.value = divide(current.value, previous.value);
        current.value = "";
      }
      if (e.target.textContent === "±") {
        if(current.value === 0 || current.value === '') return 
        if(current.value.includes('-')) return current.value = current.value.slice(1)
        current.value = '-' + current.value
      }
      if (e.target.textContent === "AC") {
        previous.value = "";
        current.value = "";
        operatorValue.textContent = "";
      }
      if (e.target.textContent === "=") {
        if (operator && operator === "+") {
          current.value = sum(current.value, previous.value);
          previous.value = "";
          operatorValue.textContent = "";
        }
        if (operator && operator === "-") {
          current.value = subtract(current.value, previous.value);
          previous.value = "";
          operatorValue.textContent = "";
        }
        if (operator && operator === "X") {
          current.value = mult(current.value, previous.value);
          previous.value = "";
          operatorValue.textContent = "";
        }
        if (operator && operator === "÷") {
          current.value = divide(current.value, previous.value);
          previous.value = "";
          operatorValue.textContent = "";
        }
      }
      if (e.target.textContent === "⬅") {
        current.value = current.value.slice(0, -1);
      }
    });
  });
});
