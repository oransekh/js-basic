// Get elements by className
const title = document.querySelector(".name");
const description = document.querySelector(".description");

// Access the buttons with forEach
const btns = document.querySelectorAll(".button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let outPut = e.target.innerText;

    // Remove "active" class from all buttons
    btns.forEach((b) => b.classList.remove("active"));

    // Check which button was clicked and update the title and description
    if (outPut === "Button 1") {
      title.innerHTML = "Taj Mahal";
      description.innerHTML = "The Taj Mahal was built as a symbol of love and is one of the Seven Wonders of the World.";
      btn.classList.add("active");
    } else if (outPut === "Button 2") {
      title.innerHTML = "Great Wall of China";
      description.innerHTML = "The Great Wall of China was constructed to protect against invasions and is a feat of engineering.";
      btn.classList.add("active");
    } else if (outPut === "Button 3") {
      title.innerHTML = "Eiffel Tower";
      description.innerHTML = "The Eiffel Tower, an iconic structure in Paris, represents a remarkable architectural achievement.";
      btn.classList.add("active");
    } else {
      title.innerHTML = "Unknown Button";
      description.innerHTML = "Information about this selection is currently unavailable.";
    }
  });
});
