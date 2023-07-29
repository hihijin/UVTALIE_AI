const exText = document.querySelector("#example-text");
const words = [
  "EX) 아련한 분위기의 영상에 맞는 인트로 음악을 찾아줘",
  "EX) 미스테리 추리물에 맞는 배경 음악을 찾아줘",
  "EX) 신나는 영상 분위기에 맞는 음악을 찾아줘",
];
let currentIndex = 0; // 현재 배열의 인덱스를 추적할 변수

// 1초마다 실행되는 함수
function changeText() {
  exText.textContent = words[currentIndex]; // 현재 인덱스에 해당하는 문구로 변경
  currentIndex = (currentIndex + 1) % words.length; // 다음 인덱스를 설정하고, 배열의 길이를 초과하면 다시 0으로 설정
}

// 맨 처음 1초 후에 한 번 실행
setTimeout(changeText, 1500);

// 이후 1초마다 changeText 함수를 실행
setInterval(changeText, 2000);
