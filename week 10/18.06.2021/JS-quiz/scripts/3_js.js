// !Variables
// - DOM elements
const startBtnElement = document.querySelector(`#start-btn`);
const nextBtnElement = document.querySelector(`#next-btn`);
const quizQuestionElement = document.querySelector(`#quiz__question`);
const questionElement = document.querySelector(`#question`);
const answerBtnsElement = document.querySelector(`#answer-btns`);
const resultElement = document.querySelector(`#result`);
const scoreElement = document.querySelector(`#sore-corner`);

// - program's logic
let questions = [];
let index;
let scoreCorrect = 0;
let scoreIncorrect = 0;

// !Getting data for quiz from .json data file and pushing them into "questions" array
fetch(`../data/JS_questions.json`)
  .then((response) => response.json())
  .then((data) => questions.push(...data));

// Functions
// - starting quiz (after pressing "START QUIZ")
const startQuiz = () => {
  startBtnElement.classList.add(`hide`);
  quizQuestionElement.classList.remove(`hide`);

  // - reseting scores and index (index represents quiz question in .json)
  scoreCorrect = 0;
  scoreIncorrect = 0;
  index = 0;
  setNextQuestion();
};

const setNextQuestion = () => {
  showNextQuestion(questions[index]);
  index++;
};

const selectAnswer = (e) => {
  let correct = e.target.dataset.correct;
  if (correct) {
    e.target.classList.add(`correct`);
    if (e.target.childNodes.length === 1)
      e.target.innerHTML += ` <i class="fas fa-check-circle"></i>`;
    Array.from(answerBtnsElement.children).forEach(
      (btn) => (btn.disabled = true)
    );
    console.log(questions.length);
    console.log(index + 1);

    scoreCorrect++;
    if (questions.length > index + 1) {
      nextBtnElement.classList.remove(`hide`);

      // nextBtnElement.classList.add(`next-btn`);
    } else {
      startBtnElement.innerText = "RESTART QUIZ";
      startBtnElement.classList.remove("hide");
      nextBtnElement.classList.add(`hide`);

      resultElement.classList.remove("hide");
      resultElement.innerText = `Your score is ${
        scoreCorrect - scoreIncorrect
      }points, meaning you have ${scoreCorrect} correct answers and ${scoreIncorrect} incorrect ones from ${
        questions.length
      } questions`;
    }
  } else {
    e.target.classList.add(`wrong`);
    if (e.target.childNodes.length === 1)
      e.target.innerHTML += ` <i class="fas fa-times-circle"></i>`;
    scoreIncorrect++;
  }
};

// -- showing question and answers from questions array
const showQuestion = () => {};

const showNextQuestion = (question) => {
  questionElement.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement(`button`);
    button.innerText = answer.text;
    button.classList.add(`btn`, `btn-js`);
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener(`click`, selectAnswer);
    answerBtnsElement.appendChild(button);
  });
  // console.log(question.question);
};

// Events
document.addEventListener(`DOMContentLoaded`, () => {
  startBtnElement.style.backgroundColor = `var(--js-color)`;
  nextBtnElement.style.backgroundColor = `var(--js-color)`;
});
startBtnElement.addEventListener(`click`, startQuiz);
nextBtnElement.addEventListener(`click`, setNextQuestion);
