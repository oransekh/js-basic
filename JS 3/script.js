// Show the modal every 10 seconds
function nextModel() {
    const interval = setInterval(() => {
        const outPut = document.getElementById("outPut").value;

        if (outPut) {
            clearInterval(interval); // Stop the interval if there's output value
        } else {
            openModal(); // Open modal if there's no output value
        }
    }, 2000); // 10 seconds
}

// Open the modal
function openModal() {
    document.getElementById("popupModal").style.display = "flex";
}

// Close the modal
function closeModal() {
    document.getElementById("popupModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("popupModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Start the modal interval when DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
    nextModel();
});

// Event listener for button click to control modal display
document.getElementById("btn").addEventListener("click", () => {
    const outPut = document.getElementById("outPut").value;
    
    if (outPut) {
        closeModal(); // Close modal if there's output value
        alert(outPut)
    } else {
        openModal(); // Open modal immediately if there's no output
    }
});
