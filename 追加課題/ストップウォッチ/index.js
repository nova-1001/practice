const display = document.getElementById("display");
const button = document.getElementById("button");

let count = 0;

const countUp = function () {
  count += 1;
  display.textContent = count / 100;
};

let id = null;

button.onclick = function () {
  if (id === null) {
    // start
    id = setInterval(countUp, 10);
    button.textContent = "stop";
  } else {
    // stop
    clearInterval(id);
    id = null;
    button.textContent = "start";
  }
};

//setIntervalをスタートする瞬間が1秒近く遅れる。
//setIntervalの時間は、「前の実行が終わってから次の実行が始まるまでに、最低限確保される待ち時間」なので、実行同士の間隔は関数自体の実行時間が足し込まれて、必ずセットした時間を上回る。
//上の2つが重なることで遅れがそこまででもないのに秒が飛ぶこともある。
