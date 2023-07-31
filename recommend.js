const search = decodeURI(new URL(window.location.href).search.substring(1));
const title = document.querySelector("h1");
title.textContent = `[${search}] LIST`;

const historyLogo = document.querySelector(".history-logo");
const history = document.querySelector(".history");
const closeBtn = document.querySelector(".closeBtn");

historyLogo.addEventListener("mouseenter", () => {
  historyLogo.classList.remove("logoAnimation");
});
historyLogo.addEventListener("mouseleave", () => {
  historyLogo.classList.add("logoAnimation");
});
historyLogo.addEventListener("click", () => {
  history.classList.remove("hide");
  historyLogo.classList.add("hide");
});
closeBtn.addEventListener("click", () => {
  history.classList.add("hide");
  historyLogo.classList.remove("hide");
});

/*
// 페이지가 로드되면 실행할 함수
window.onload = function () {
  // 스크롤 이벤트를 감지하는 함수
  function checkFooterVisibility() {
    // 이미지 요소의 높이를 구함
    const imageHeight = document.querySelector(".festival").offsetHeight;
    // 스크롤 위치를 구함
    const scrollPosition = window.scrollY;
    // 뷰포트의 높이를 구함
    const viewportHeight = window.innerHeight;

    // 스크롤이 이미지보다 충분히 아래로 내려갔을 때 푸터를 보이도록 설정
    if (scrollPosition + viewportHeight >= imageHeight) {
      document.querySelector("footer").style.display = "block";
    } else {
      document.querySelector("footer").style.display = "none";
    }
  }

  // 스크롤 이벤트를 등록하여 스크롤이 발생할 때마다 checkFooterVisibility 함수를 실행
  window.addEventListener("scroll", checkFooterVisibility);
};
*/
