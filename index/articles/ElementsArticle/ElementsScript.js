// Define the correct answer
const correctAnswer = 'c'; 

function checkAnswer() {
    // 1. Get all radio input elements with the name "answer"
    const answerInputs = document.getElementsByName('answer');
    let selectedValue;

    // 2. Loop through the inputs to find the checked one
    for (const input of answerInputs) {
        if (input.checked) {
            selectedValue = input.value;
            break; // Stop the loop once we find the checked one
        }
    }

    // 3. Get the feedback paragraph element
    const feedbackElement = document.getElementById('feedback');

    // 4. Check if an option was selected
    if (!selectedValue) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
        return;
    }

    // 5. Compare the selected value with the correct answer
    if (selectedValue === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}