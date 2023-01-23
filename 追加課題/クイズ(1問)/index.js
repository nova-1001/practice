const quizText = document.getElementById("quiz-text");
const quizImage = document.getElementById("quiz-image");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

const quiz = {
  text: "この生き物の名前は何でしょう？",
  image: "q-picture1.jpg",
  choices: [
    {
      text: "ロードハウナナフシ",
      feedback: "正解！ロードハウナナフシは、最も珍しいナナフシだよ！",
    },
    {
      text: "サカダチコノハナナフシ",
      feedback: "残念！サカダチコノハナナフシは世界一重い昆虫だよ。",
    },
    {
      text: "ヤエヤマツダナナフシ",
      feedback: "残念！ヤエヤマツダナナフシは、日本最大級の昆虫だよ！",
    },
  ],
};

const reloadQuiz = function () {
  quizText.textContent = "Q. " + quiz.text;

  quizImage.src = "./images/" + quiz.image;

  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;
};

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback;
};

choice1.onclick = function () {
  choose(0);
};
choice2.onclick = function () {
  choose(1);
};
choice3.onclick = function () {
  choose(2);
};

reloadQuiz();
