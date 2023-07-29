async function typingAnimation() {
  const words = ["UVMUSIC AI", "AudioAura", "UVATALIE", "Developer", "User"];

  let state = false;
  setInterval(() => {
    if (state) {
      document.querySelector(".cursor").style.backgroundColor =
        "rgba(255, 255, 255, 0)";
    } else {
      document.querySelector(".cursor").style.backgroundColor =
        "rgba(255, 255, 255, 1)";
    }

    state = !state;
  }, 300);

  let index = 0;
  while (true) {
    let typingText = "";
    for (const ch of words[index]) {
      typingText += ch;
      document.querySelector(".typing-text").innerHTML = typingText;
      await new Promise((resolve) => setInterval(resolve, 100));
    }

    await new Promise((resolve) => setInterval(resolve, 800));

    while (typingText != "") {
      typingText = typingText.substring(0, typingText.length - 1);
      document.querySelector(".typing-text").innerHTML = typingText;
      await new Promise((resolve) => setInterval(resolve, 100));
    }

    index = (index + 1) % words.length;
  }
}

window.onload = () => {
  typingAnimation();
};

const answerInput = document.getElementById("answerInput");
const submitButton = document.getElementById("box-i");

answerInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitAnswer(answerInput.value);
  }
});

submitButton.addEventListener("click", function (e) {
  submitAnswer(answerInput.value);
  console.log(e);
});

function submitAnswer(answer) {
  // 답변 처리 및 원하는 동작을 수행하는 로직을 구현합니다.
  console.log("입력된 답변:", answer);
  // 답변 처리 후 추가적인 작업을 수행할 수 있습니다.
  // 예를 들어, 서버에 답변을 전송하는 등의 작업을 수행할 수 있습니다.
  // 여기서는 단순히 콘솔에 입력된 답변을 출력합니다.
  // 원하는 동작으로 대체하여 사용하시면 됩니다.
}

var reply = confirm("정말  새로고침 하시겠습니까?");
