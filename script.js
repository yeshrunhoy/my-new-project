
const display = document.getElementById("display");

function addValue(value) {
  if (display.textContent === "Error") {
    display.textContent = "0";
  }

  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function calculate() {
  const expression = display.textContent;

  //Only allowed numbers and calculation symbols
  if (!/^[0-9+\-*/. ]+$/.test(expression)) {
    display.textContent = "Error";
    return;
  }

  try {
    const result = Function(
      '"use strict"; return (' + expression + ')'
    )();

    if (
      typeof result !== "number" ||
      !Number.isFinite(result)
    ) {
      display.textContent = "Error";
      return;
    }

    display.textContent = String(
      Number(result.toPrecision(10))
    );
  } catch {
    display.textContent = "Error";
  }
}
