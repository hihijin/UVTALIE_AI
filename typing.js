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

//var reply = confirm("정말  새로고침 하시겠습니까?");
