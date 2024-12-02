function moveButton(button) {
    // Get a random position for the button within a wider range
    const randomX = Math.random() * 300 - 150; // X range (-150 to 150)
    const randomY = Math.random() * 150 - 75;  // Y range (-75 to 75)

    // Apply the new position
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Reset the transition duration for consistent movement
    button.style.transition = "transform 0.1s ease";
}


function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
}
