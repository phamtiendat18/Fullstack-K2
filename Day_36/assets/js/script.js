// let time, hi;
// let lastTime;
// function counter(timestamp) {
//   if (!lastTime) {
//     lastTime = timestamp;
//   }
//   var progress = timestamp - lastTime;
//   if (progress > 1000) {
//     // counterEl.innerText = `${count}`;
//     // if (count === 0) {
//     //   btn.classList.add("show");
//     //   clickable = true;
//     // } else {
//     //   btn.classList.remove("show");
//     // }
//     // if (count <= 0) {
//     //   return 0;
//     // }
//     // time--;
//     lastTime = timestamp;
//   }
//   requestAnimationFrame(counter);
//   //   console.log(timestamp);
//   if (timestamp === 3000) {
//   }
// }
// //   console.log(timestamp);

// requestAnimationFrame(counter);

import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
let number = 1;
let count = 3;
let correctQuestions = 0;
let totalQuestions;
const query = {
  _page: number,
  _limit: PAGE_LIMIT,
};
const root = document.querySelector("#root");
const container = document.createElement("div");
container.className = "container";
root.append(container);
const loadingGame = () => {
  container.innerHTML = `
    <div class="timer">
          <span>${count}</span>
    </div>
    `;
  const timerEl = container.querySelector(".timer > span");
  let timerInterval = setInterval(() => {
    --count;
    timerEl.innerText = count;
    if (count < 0) {
      timerEl.innerText = "Go!!!";
    }
    if (count === -1) {
      renderQuestion();
      clearInterval(timerInterval);
    }
  }, 1000);
};
const handleStart = () => {
  container.innerHTML = `
    <div class="start">
        <button class="btn-start">Start</button>
      </div>`;
  const btnStart = container.querySelector(".start .btn-start");
  console.log(btnStart);
  btnStart.addEventListener("click", loadingGame);
};
const resetQuestions = () => {
  number = 1;
  query._page = number;
  count = 3;
  correctQuestions = 0;
  handleStart();
};

const handleEndGame = () => {
  container.innerHTML = `
  <div class="end">
          <div class="transcript">
            <p class="total-correct">Bạn đã đúng: <span>${correctQuestions}/${totalQuestions}</span> câu</p>
            <p class="point">Điểm của bạn là: <span>${Math.round(
              (correctQuestions / totalQuestions) * 100
            )}</span> điểm</p>
          </div>
          <div class="chooses">
            <button class="btn-replay">Chơi lại</button>
            <button class="btn-exit">Thoát</button>
          </div>
        </div>
  `;
  const btnReplay = container.querySelector(".end .chooses .btn-replay");
  btnReplay.addEventListener("click", resetQuestions);
};
const stripHtmlTag = (html) => html.replace(/<[^>]*>?/gm, "");
const renderQuestion = async () => {
  const queryString = new URLSearchParams(query).toString();
  const { data: questions, response } = await client.get(
    `/questions?${queryString}`
  );
  container.innerHTML = ` ${questions
    .map(
      ({ question, answers }) => `
  <div class="question">${stripHtmlTag(question)}</div>
  <div class="answers">
    ${answers
      .map(
        (answer) => `
    <div class="answer">${stripHtmlTag(answer)}</div>
    `
      )
      .join("")}
  </div>`
    )
    .join("")}
    <div class="notification"></div>
  `;
  const answers = container.querySelectorAll(".answers .answer");
  const notification = container.querySelector(".notification");
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (answer.innerText.trim() === questions[0].correct) {
        // answer.style.background === "green";
        answer.style.background = "green";
        notification.innerText = "Correct";
        notification.style.background = "green";
        correctQuestions += 1;
        number += 1;
      } else {
        notification.innerText = "Not-Correct";
        notification.style.background = "red";
        answer.style.background = "red";
        number += 1;
      }
      totalQuestions = response.headers.get("X-Total-Count");
      if (number > totalQuestions) {
        setTimeout(handleEndGame, 1000);
      }
      query._page = number;
      renderQuestion();
    });
  });
};
window.addEventListener("load", handleStart());
