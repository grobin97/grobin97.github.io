// Finds the important things from the page
const quizForm = document.getElementById("quiz-form");
const resultsSection = document.getElementById("quiz-results");
const overallResult = document.getElementById("overall-result");
const questionResults = document.getElementById("question-results");


// Function that runs when the user submits the quiz
quizForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    let score = 0;

    // This variable will store the feedback for each question
    let feedback = "";

    // Question 1
    const question1Answer = document
        .getElementById("question1")
        // Make the answer more universal
        .value
        .trim()
        .toLowerCase()
        .replace("-", " ");

    if (
        question1Answer === "tim berners lee" ||
        question1Answer === "berners lee"
    ) {
        score += 20;

        feedback += `
            <div class="correct-result">
                <p><strong>Question 1:</strong> Correct - 20/20</p>
                <p>Answer: Tim Berners-Lee</p>
            </div>
        `;
    } else {
        feedback += `
            <div class="incorrect-result">
                <p><strong>Question 1:</strong> Incorrect - 0/20</p>
                <p>Correct answer: Tim Berners-Lee</p>
            </div>
        `;
    }

    // Question 2
    const question2Answer = document.querySelector(
        'input[name="question2"]:checked'
    ).value;

    if (question2Answer === "b") {
        score += 20;

        feedback += `
            <div class="correct-result">
                <p><strong>Question 2:</strong> Correct - 20/20</p>
                <p>Answer: Mosaic displayed pictures alongside text.</p>
            </div>
        `;
    } else {
        feedback += `
            <div class="incorrect-result">
                <p><strong>Question 2:</strong> Incorrect - 0/20</p>
                <p>Correct answer: Mosaic displayed pictures alongside text.</p>
            </div>
        `;
    }

    // Question 3
    const question3Answer = document.querySelector(
        'input[name="question3"]:checked'
    ).value;

    if (question3Answer === "c") {
        score += 20;

        feedback += `
            <div class="correct-result">
                <p><strong>Question 3:</strong> Correct - 20/20</p>
                <p>Answer: Google Chrome was introduced in 2008.</p>
            </div>
        `;
    } else {
        feedback += `
            <div class="incorrect-result">
                <p><strong>Question 3:</strong> Incorrect - 0/20</p>
                <p>Correct answer: 2008</p>
            </div>
        `;
    }

    // Question 4
    const question4Answer = document.querySelector(
        'input[name="question4"]:checked'
    ).value;

    if (question4Answer === "c") {
        score += 20;

        feedback += `
            <div class="correct-result">
                <p><strong>Question 4:</strong> Correct - 20/20</p>
                <p>
                    Answer: The same-origin policy limits how one website
                    can access another website's data.
                </p>
            </div>
        `;
    } else {
        feedback += `
            <div class="incorrect-result">
                <p><strong>Question 4:</strong> Incorrect - 0/20</p>
                <p>
                    Correct answer: It limits how one website can access
                    another website's data.
                </p>
            </div>
        `;
    }

    // Question 5
    // Find every checked box
    const checkedBoxes = document.querySelectorAll(
        'input[name="question5"]:checked'
    );

    // Store the value of each checked box in an array
    const question5Answers = [];

    checkedBoxes.forEach(function(checkbox) {
        question5Answers.push(checkbox.value);
    });

    // Makes sure the user selected all 3 correct answeres
    const question5IsCorrect =
        question5Answers.length === 3 &&
        question5Answers.includes("https") &&
        question5Answers.includes("passwords") &&
        question5Answers.includes("permissions");

    if (question5IsCorrect) {
        score += 20;

        feedback += `
            <div class="correct-result">
                <p><strong>Question 5:</strong> Correct - 20/20</p>
                <p>
                    Answers: HTTPS support, password managers, and
                    website permission controls.
                </p>
            </div>
        `;
    } else {
        feedback += `
            <div class="incorrect-result">
                <p><strong>Question 5:</strong> Incorrect - 0/20</p>
                <p>
                    Correct answers: HTTPS support, password managers,
                    and website permission controls.
                </p>
            </div>
        `;
    }

    // Overall result
    if (score >= 80) {
        overallResult.innerHTML = `
            <p class="pass-result">Pass</p>
            <p><strong>Total Score:</strong> ${score}/100</p>
        `;
    } else {
        overallResult.innerHTML = `
            <p class="fail-result">Fail</p>
            <p><strong>Total Score:</strong> ${score}/100</p>
        `;
    }

    // Place the individual feedback on the page
    questionResults.innerHTML = feedback;

    // Make the results section visible
    resultsSection.hidden = false;
});

// Clear the results when the form is reset
quizForm.addEventListener("reset", function() {
    overallResult.innerHTML = "";
    questionResults.innerHTML = "";
    resultsSection.hidden = true;
});