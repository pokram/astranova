const questions = [
    {
      question: "Example1",
      answers: [
        { text: "1", correct: false },
        { text: "2", correct: false },
        { text: "3", correct: true },
        { text: "4", correct: false }
      ]
    },
    {
      question: "Which language runs in a web browser?",
      answers: [
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false }
      ]
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent Van Gogh", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
    {
      question: "What is 5 + 7?",
      answers: [
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "14", correct: false },
        { text: "11", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false }
      ]
    },
    {
        question: "44634 planet is known as the Red Planet?",
        answers: [
          { text: "Earth", correct: false },
          { text: "Venus", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "5352352 planet is known as the Red Planet?",
        answers: [
          { text: "Earth", correct: false },
          { text: "Venus", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false }
        ]
    }
  ];

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
  }

  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("choice-btn");
      button.addEventListener("click", () => selectAnswer(button, answer.correct));
      const li = document.createElement("li");
      li.appendChild(button);
      choicesElement.appendChild(li);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    choicesElement.innerHTML = "";
  }

  function selectAnswer(button, correct) {
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach(btn => btn.disabled = true);

    if (correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }

    buttons.forEach(btn => {
      const isCorrect = questions[currentQuestionIndex].answers.find(a => a.text === btn.textContent).correct;
      if (isCorrect) {
        btn.classList.add("correct");
      }
    });

    nextButton.style.display = "block";
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    resetState();
    questionElement.textContent = "Quiz finished!";
    nextButton.textContent = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz, { once: true });
  }

  startQuiz();