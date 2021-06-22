import {
  startBtnElement,
  quizQuestionElement,
  resultElement,
} from "./DOM_Elements.js";

export const startQuiz = (correct, incorrect, index, func) => {
  startBtnElement.classList.add(`hide`);
  quizQuestionElement.classList.remove(`hide`);
  if (!resultElement.classList.contains("hide")) {
    resultElement.classList.add("hide");
  }
  // - reseting scores and index (index represents quiz question in .json)
  correct = 0;
  incorrect = 0;
  index = 0;
  func();
};
