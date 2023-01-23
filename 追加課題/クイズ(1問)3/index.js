const quiz = {
  text: "この生き物の名前は何でしょう？",
  image: "q-picture1.jpg",
};
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.createElement("input");
    button.type = "button";
    button.id = "ロードハウナナフシ";
    button.value = "ロードハウナナフシ";
    button.className = "btn";

    button.onclick = function () {
      document.write("正解！ロードハウナナフシは、最も珍しいナナフシだよ！");
    };

    var container = document.getElementById("container");
    container.appendChild(button);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.createElement("input");
    button.type = "button";
    button.id = "サカダチコノハナナフシ";
    button.value = "サカダチコノハナナフシ";
    button.className = "btn";

    button.onclick = function () {
      document.write("残念！サカダチコノハナナフシは世界一重い昆虫だよ。");
    };

    var container = document.getElementById("container");
    container.appendChild(button);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.createElement("input");
    button.type = "button";
    button.id = "ヤエヤマツダナナフシ";
    button.value = "ヤエヤマツダナナフシ";
    button.className = "btn";

    button.onclick = function () {
      document.write("残念！ヤエヤマツダナナフシは、日本最大級の昆虫だよ！");
    };

    var container = document.getElementById("container");
    container.appendChild(button);
  },
  false
);
