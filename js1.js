
(function() {
  let sum1=0;
function buildQuiz() {
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = [];


    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.c1) {
      // add to the number of correct answers
      sum1=sum1+1;
      answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c2)
    {
        sum1=sum1+2;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c3)
    {
        sum1=sum1+3;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c4)
    {
        sum1=sum1+4;
        answerContainers[questionNumber].style.color = "green";
    }
    else if(userAnswer === currentQuestion.c5)
    {
        sum1=sum1+5;
        answerContainers[questionNumber].style.color = "green";
    }
 
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `Result : ${sum1} out of ${5*myQuestions.length}`;
  //if(sum1>45)
  //  resultsContainer.innerHTML = `High level of stress. All the best!`
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question: "How tired do you feel waking up each morning ? ",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "On how many days out of 5 , would you check your phone , right after getting up?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How much are you unwilling to go to class ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
      question: "How often do you get irritated by small mishaps ?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
      question: "How often do you wish to run away ?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
      question: "How much does the mistreatment of your fellow classmates or professors impact you ?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
      question: "How much do you feel that course that you are persuing is totally out of your interest? ",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
      question: "How often do you feel that even though you have friends, who hang out with you, but you still feel lonely ?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        e: "5"
      },
      c1: "a",
      c2: "b",
      c3: "c",
      c4: "d",
      c5: "e"
    },
    {
    question: "How often do you regret the choices you have made ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How often do you blame others ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How often do you overthink and waste the entire day with only one though clinging on your mind ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How much irritated do you feel after a fully packed day with a lot of workload ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How often are you distracted by the notifications popping on your mobile phones even while you’re working ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "Does not having the right sum of money, to participate in an event or join a course, stress you out ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },
  {
    question: "How much does having lower grades than your peers impact you ?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
    },
    c1: "a",
    c2: "b",
    c3: "c",
    c4: "d",
    c5: "e"
  },


];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();
