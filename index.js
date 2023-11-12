document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const textInput = document.getElementById("text-input");
    const characterCount = document.getElementById("character-count");
    const maxCharacters = document.getElementById("max-characters");
    const clearButton = document.getElementById("clear-button");
    const resetButton = document.getElementById("reset-button");

    // Set the maximum character limit (you can change this value)
    const maxCharacterLimit = 1000;

    // Function to update character count
    function updateCharacterCount() {
        const currentText = textInput.value;
        const currentCharacterCount = currentText.length;
        characterCount.textContent = currentCharacterCount;

        // Optional: Display an error message if the limit is exceeded
        if (currentCharacterCount > maxCharacterLimit) {
            characterCount.style.color = "red";
        } else {
            characterCount.style.color = "black";
        }
    }

    // Event listener for text input
    textInput.addEventListener("input", updateCharacterCount);

    // Event listener for Clear button
    clearButton.addEventListener("click", function () {
        textInput.value = "";
        updateCharacterCount();
    });

    // Event listener for Reset button
    resetButton.addEventListener("click", function () {
        textInput.value = "";
        maxCharacters.textContent = maxCharacterLimit;
        updateCharacterCount();
    });

    // Initialize character count on page load
    updateCharacterCount();
});
