import {
  startBtnElement,
  quizQuestionElement,
  resultElement,
} from "./DOM_Elements.js";

import { scoreCorrect, scoreIncorrect, index } from "../3_js.js";

const startQuiz = () => {
  startBtnElement.classList.add(`hide`);
  quizQuestionElement.classList.remove(`hide`);
  if (!resultElement.classList.contains("hide")) {
    resultElement.classList.add("hide");
  }
  // - reseting scores and index (index represents quiz question in .json)
  scoreCorrect = 0;
  scoreIncorrect = 0;
  index = 0;
  setNextQuestion();
};
export default startQuiz;
