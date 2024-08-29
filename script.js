const bodyE1 = document.querySelector("body");

// Function to create an animated "I LOVE YOU" text element with random size and custom timing
function createAnimatedText(text, xPos, yPos, duration = 8, delay = 0) {
    const pE1 = document.createElement("p"); // Create a new <p> element
    pE1.textContent = text; // Set the text content to "I LOVE YOU"
    pE1.style.color = "#FF69B4"; // Set the color to pink
    pE1.style.margin = "0";
    pE1.style.fontWeight = "bold"; // Make text bold
    pE1.style.position = "absolute";
    pE1.style.left = xPos + "px"; // Set initial position
    pE1.style.top = yPos + "px"; // Set initial position
    pE1.style.transform = "translate(-500%, -50%)";
    pE1.style.opacity = "1"; // Set initial opacity
    pE1.style.pointerEvents = "none"; // Make it not clickable

    // Generate a random size for the text
    const randomSize = Math.random() * 2 + 1; // Random size between 1em and 3em
    pE1.style.fontSize = randomSize + "em"; // Apply random size

    // Adjust animation duration and delay
    pE1.style.transition = `all ${duration}s linear ${delay}s`; // Set animation duration and delay
    pE1.style.transform = "translate(-500%, -3000%)"; // Adjusted distance for animation
    pE1.style.filter = "hue-rotate(1000deg)";
    pE1.style.opacity = "0";

    bodyE1.appendChild(pE1); // Add the <p> element to the body

    setTimeout(() => {
        pE1.remove(); // Remove the element after the animation is complete
    }, (duration + delay) * 1000); // Adjust timeout duration to match animation time
}

// Mousemove event listener to create animated hearts and "I LOVE YOU" texts on the screen
bodyE1.addEventListener("mousemove", (event) => {
    const xPos = event.pageX;
    const yPos = event.pageY;
    
    // Create heart animation
    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    spanE1.style.background = "url('https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-512.png')";
    spanE1.style.backgroundSize = "cover";
    spanE1.style.position = "absolute";
    spanE1.style.pointerEvents = "none";
    spanE1.style.animation = "animate 6s linear"; // Add animation to hearts
    
    bodyE1.appendChild(spanE1);

    // Remove the heart after the animation
    setTimeout(() => {
        spanE1.remove();
    }, 3000);

    // Randomly decide to create "I LOVE YOU" text
    if (Math.random() < 0.4) { // 40% chance to create "I LOVE YOU" text on each mouse move
        createAnimatedText("I LOVE YOU", xPos, yPos, 10, 0); // Create "I LOVE YOU" text at mouse position
    }
});
