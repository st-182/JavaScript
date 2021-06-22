export default class Quiz {
  constructor(
    startBtnElement,
    nextBtnElement,
    quizQuestionElement,
    questionElement,
    answerBtnsElement,
    resultElement,
    // scoreElement,
    questions,
    index,
    scoreCorrect,
    scoreIncorrect
  ) {
    this.startBtnElement = startBtnElement;
    this.nextBtnElement = nextBtnElement;
    this.quizQuestionElement = quizQuestionElement;
    this.questionElement = questionElement;
    this.answerBtnsElement = answerBtnsElement;
    this.resultElement = resultElement;
    this.questions = questions;
    this.index = index;
    this.scoreCorrect = scoreCorrect;
    this.scoreIncorrect = scoreIncorrect;
  }
  startQuiz() {
    this.startBtnElement.classList.add(`hide`);
    this.quizQuestionElement.classList.remove(`hide`);
    if (!this.resultElement.classList.contains("hide")) {
      this.resultElement.classList.add("hide");
    }
    // - reseting scores and index (index represents quiz question in .json)
    this.scoreCorrect = 0;
    this.scoreIncorrect = 0;
    this.index = 0;
    this.setNextQuestion();
  }

  setNextQuestion() {
    this.resetButtons();
    this.showNextQuestion(this.questions[this.index]);
    index++;
  }

  selectAnswer(e) {
    let correct = e.target.dataset.correct;
    if (correct) {
      // add css syling to button
      e.target.classList.add(`correct`);
      // add green check mark
      if (e.target.childNodes.length === 1)
        e.target.innerHTML += ` <i class="fas fa-check-circle"></i>`;
      // disabling buttons after ckiking on right answer
      Array.from(this.answerBtnsElement.children).forEach(
        (btn) => (btn.disabled = true)
      );
      // console.log(questions.length);
      // console.log(index + 1);
      // adding point to score
      this.scoreCorrect += 1;

      if (questions.length > index) {
        this.nextBtnElement.classList.remove(`hide`);

        // nextBtnElement.classList.add(`next-btn`);
      } else {
        this.startBtnElement.innerText = "RESTART QUIZ";
        this.startBtnElement.classList.remove("hide");
        this.nextBtnElement.classList.add(`hide`);

        this.resultElement.classList.remove("hide");
        this.resultElement.innerText = `Your score is ${
          this.scoreCorrect - this.scoreIncorrect
        } points, meaning you have ${scoreCorrect} correct answers and ${
          this.scoreIncorrect
        } incorrect ones from ${this.questions.length} questions.`;
      }
    } else {
      e.target.classList.add(`wrong`);
      if (e.target.childNodes.length === 1)
        e.target.innerHTML += ` <i class="fas fa-times-circle"></i>`;
      this.scoreIncorrect += 1;
      // console.log(answerBtnsElement.firstChild);
    }
  }
  showNextQuestion(question, btnClass) {
    this.questionElement.textContent = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement(`button`);
      button.innerText = answer.text;
      button.classList.add(`btn`, btnClass);
      if (answer.correct) button.dataset.correct = answer.correct;
      button.addEventListener(`click`, selectAnswer);
      this.answerBtnsElement.appendChild(button);
    });
    // console.log(question.question);
  }
}
