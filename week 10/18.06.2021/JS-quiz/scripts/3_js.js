// !Variables
// - DOM elements                    in this case import is used for test purposes only
import {
  startBtnElement,
  nextBtnElement,
  quizQuestionElement,
  questionElement,
  answerBtnsElement,
  resultElement,
  scoreElement,
} from "./modules/DOM_Elements.js";

// - program's logic                  there is no reason for using import
export let questions = [];
export let index;
export let scoreCorrect = 0;
export let scoreIncorrect = 0;

// !Getting data for quiz from .json data file and pushing them into "questions" array
import fetchFunction from "./modules/fetch.js"; // in my opinion this import is worth it)
fetchFunction(`../data/JS_questions.json`);

// Functions
// - starting quiz (after pressing "START QUIZ")
import start from "./modules/start.js";
start();

const setNextQuestion = () => {
  resetButtons();
  showNextQuestion(questions[index]);
  index++;
};

const selectAnswer = (e) => {
  let correct = e.target.dataset.correct;
  if (correct) {
    // add css syling to button
    e.target.classList.add(`correct`);
    // add green check mark
    if (e.target.childNodes.length === 1)
      e.target.innerHTML += ` <i class="fas fa-check-circle"></i>`;
    // disabling buttons after ckiking on right answer
    Array.from(answerBtnsElement.children).forEach(
      (btn) => (btn.disabled = true)
    );
    // console.log(questions.length);
    // console.log(index + 1);
    // adding point to score
    scoreCorrect++;

    if (questions.length > index) {
      nextBtnElement.classList.remove(`hide`);

      // nextBtnElement.classList.add(`next-btn`);
    } else {
      startBtnElement.innerText = "RESTART QUIZ";
      startBtnElement.classList.remove("hide");
      nextBtnElement.classList.add(`hide`);

      resultElement.classList.remove("hide");
      resultElement.innerText = `Your score is ${
        scoreCorrect - scoreIncorrect
      } points, meaning you have ${scoreCorrect} correct answers and ${scoreIncorrect} incorrect ones from ${
        questions.length
      } questions.`;
    }
  } else {
    e.target.classList.add(`wrong`);
    if (e.target.childNodes.length === 1)
      e.target.innerHTML += ` <i class="fas fa-times-circle"></i>`;
    scoreIncorrect++;
    // console.log(answerBtnsElement.firstChild);
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

//
const resetButtons = () => {
  nextBtnElement.classList.add("hide");

  while (answerBtnsElement.firstChild) {
    answerBtnsElement.removeChild(answerBtnsElement.firstChild);
  }
};

// Events
document.addEventListener(`DOMContentLoaded`, () => {
  startBtnElement.style.backgroundColor = `var(--js-color)`;
  nextBtnElement.style.backgroundColor = `var(--js-color)`;
});
startBtnElement.addEventListener(`click`, startQuiz);
nextBtnElement.addEventListener(`click`, setNextQuestion);
