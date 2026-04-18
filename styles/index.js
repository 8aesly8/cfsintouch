const historyList = document.getElementById("historyList");
const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);

    addToHistory(expression + " = " + result);

    display.value = result;
  } catch {
    display.value = "Error";
  }
}
function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

function clearHistory() {
  historyList.innerHTML = "";
}
function toggleDisplayColor() {
  const display = document.getElementById("display");
  display.classList.toggle("alt-display");
}
const colors = ["blue", "pink", "green", "yellow"];
let currentColorIndex = 0;

function changeDisplayColor() {
  const display = document.getElementById("display");

  // remove all color classes first
  display.classList.remove(...colors);

  // add next color
  display.classList.add(colors[currentColorIndex]);

  // move to next index
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}