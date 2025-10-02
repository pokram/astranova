const questions = [
  {
    question: "Why did humanity build AstraNova?",
    answers: [
      { text: "To escape endless war on Earth", correct: false },
      { text: "Because Earth became nearly uninhabitable", correct: true },
      { text: "To explore deep space voluntarily", correct: false },
      { text: "As a luxury project for the rich", correct: false }
    ]
  },
  {
    question: "Which zone of AstraNova is restricted and dangerous to enter?",
    answers: [
      { text: "Trade Plateau", correct: false },
      { text: "Shadow Zone", correct: true },
      { text: "Engineers’ Zone", correct: false },
      { text: "Central Housing District", correct: false }
    ]
  },
  {
    question: "Who is the official leader of AstraNova?",
    answers: [
      { text: "Zoro, the Shadow Merchant", correct: false },
      { text: "Dr. Vex Calder", correct: false },
      { text: "Captain Lyra Solis", correct: true },
      { text: "The Citizens’ Council", correct: false }
    ]
  },
  {
    question: "What is the main source of power in AstraNova?",
    answers: [
      { text: "Solar arrays and energy cores", correct: true  },
      { text: "Imported fuel from Earth", correct: false },
      { text: "Manual labor of the citizens", correct: false },
      { text: "Pure magic crystals", correct: false }
    ]
  },
  {
    question: "How would you react if a black market dealer offers you forbidden tech?",
    answers: [
      { text: "Accept immediately – it might help you survive", correct: false },
      { text: "Refuse politely and walk away", correct: false },
      { text: "Report them to the authorities", correct: true },
      { text: "Try to trade it for food and credits", correct: false }
    ]
  },
  {
      question: "In a crisis, which quality is most important for a citizen of AstraNova?",
      answers: [
        { text: "Discipline", correct: true },
        { text: "Creativity", correct: false },
        { text: "Loyalty", correct: false },
        { text: "Courage", correct: false }
      ]
  },
  {
      question: "Dr. Vex offers you a chance to join a secret experiment in the Shadow Zone. What do you do?",
      answers: [
        { text: "Join him without hesitation", correct: false },
        { text: "Demand more information first", correct: true },
        { text: "Decline and report him", correct: false },
        { text: "Decline but keep the secret", correct: false }
      ]
  },
  {
    question: "What is the greatest current threat to AstraNova?",
    answers: [
      { text: "Shortage of clean water", correct: false },
      { text: "Power struggles between factions", correct: true },
      { text: "Alien invasion", correct: false },
      { text: "Meteor storms", correct: false }
    ]
  },
  {
    question: "Which type of contribution would you make to AstraNova?",
    answers: [
      { text: "Engineering and technical support", correct: true },
      { text: "Trade and negotiation", correct: false },
      { text: "Security and defense", correct: false },
      { text: "Research and exploration", correct: false }
    ]
  },
  {
    question: "If you discover the rumored portal to a new planet, what would you do?",
    answers: [
      { text: "Keep it secret for yourself", correct: false },
      { text: "Share it with Captain Lyra Solis", correct: true },
      { text: "Sell the information to Zoro", correct: false },
      { text: "Join Dr. Vex in exploring it", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.textContent = "Next Question";
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
  score++;  // ✅ loeme punkti
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

if (score >= 7) {
  questionElement.textContent = `✅ Congratulations! Your AstraNova visa is approved. 
  You got ${score}/${questions.length} correct.`;
} else {
  questionElement.textContent = `❌ Application rejected. You must remain in Earth’s ruins. 
  You got only ${score}/${questions.length} correct.`;
}

nextButton.textContent = "Restart";
nextButton.style.display = "block";
nextButton.addEventListener("click", startQuiz, { once: true });
}

startQuiz();
