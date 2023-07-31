const exText = document.querySelector("#example-text");
const form = document.querySelector("form");
const answerInput = document.querySelector(".answerInput");
const submitButton = document.querySelector(".box-i");

const words = [
  "EX) 아련한 분위기의 영상에 맞는 인트로 음악을 찾아줘",
  "EX) 미스테리 추리물에 맞는 배경 음악을 찾아줘",
  "EX) 신나는 영상 분위기에 맞는 음악을 찾아줘",
];
let currentIndex = 0;

function changeText() {
  exText.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}
setTimeout(changeText, 1500);
setInterval(changeText, 2000);
/*
answerInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitAnswer(answerInput.value);
  }
});
*/
form.addEventListener("submit", submitAnswer);

function submitAnswer(e) {
  e.preventDefault();
  location.assign(`../recommend.html?${e.target.text.value}`);
  console.log("입력된 답변:", e.target.text.value);
}
