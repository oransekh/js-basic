// Get button elements
const btns = document.querySelectorAll(".buttons button");
// Display the value
const display = document.querySelector(".output1");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "=") {
      // Evaluate the expression in display
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
    } else {
      if (value === "AC") {
        // Clear the display if "C" button is clicked
        display.innerText = "";
      } else if (value === "C") {
        // Remove only the last character from the display
        display.innerText = display.innerText.slice(0, -1);
      } else {
        // Append clicked button's value to display
        display.innerText += value;
      }
    }
  });
});

console.log(btn, "")