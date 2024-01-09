let root = document.querySelector("#root");
let searchForm = root.querySelector(".search-form");
let searchBar = searchForm.querySelector(".search-bar");
let input = searchBar.querySelector("input");
let microIcon = searchBar.querySelector(".micro-icon");
let searchIcon = searchBar.querySelector(".search-icon");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let msg = new SpeechSynthesisUtterance();
recognition.continuous = false;
recognition.lang = "vi-VN"; // Chọn ngôn ngữ Tiếng Việt
// Sự kiện tìm kiếm thủ công
searchIcon.addEventListener("click", () => {
  if (input.value !== "") {
    setTimeout(() => {
      searchForm.submit();
    }, 1000);
  }
});
// Sự kiện tìm kiếm bằng giọng nói

// Sự kiện click vào icon micro => bắt đầu nhận diện giọng nói
microIcon.addEventListener("click", (e) => {
  e.preventDefault();
  recognition.start();
  microIcon.style.color = "red";
});

// Kết thúc nhận diện
recognition.addEventListener("end", () => {
  recognition.stop();
  microIcon.style.color = "black";
});
// Kết quả trả về
recognition.addEventListener("result", (e) => {
  let text = e.results[0][0].transcript;
  input.value = text;
  msg.volume = 4;
  msg.pitch = 1;
  msg.lang = "vi-VN";
  msg.text = `I wil try search ${text}`;
  speechSynthesis.speak(msg);
  handleValue(text);
});

// Hàm xử lý các từ khóa để mở 1 số trang web (1 vài trang web có thể tìm kiếm)
const handleValue = (text) => {
  text = text.toLowerCase();
  let keys = ["chỉ đường tới", "bài hát", "video"];
  let result;
  if (text.includes("mở")) {
    text = text.split("mở")[1].trim();
    keys.forEach((key) => {
      if (text.includes(key)) {
        let textArr = text.split(key);
        text = textArr[0].trim();
        result = textArr[1].trim();
      }
    });
  }
  let urlAddress = encodeURIComponent(result);
  if (text === "facebook") {
    window.location.href = "https://www.facebook.com";
  }
  if (text === "youtube") {
    if (result) {
      window.location.href = `https://www.youtube.com/results?search_query=${urlAddress}`;
    } else {
      window.location.href = "https://www.youtube.com";
    }
  }
  if (text === "google") {
    window.location.href = "https://www.google.com";
  }
  if (text === "google drive") {
    window.location.href = "https://drive.google.com";
  }
  if (text === "google maps") {
    if (result) {
      window.location.href = `https://www.google.com/maps/search/?api=1&query=${urlAddress}`;
    } else {
      window.location.href = "https://www.google.com/maps";
    }
  }
  if (text === "zing mp3") {
    if (result) {
      window.location.href = `https://zingmp3.vn/tim-kiem/tat-ca?q=${urlAddress}`;
    } else {
      window.location.href = "https://zingmp3.vn";
    }
  }
  setTimeout(() => {
    searchForm.submit();
  }, 1000);
};
// Dark Mode
let btnDarkMode = document.querySelector(".btn-dark-mode");
let node = btnDarkMode.querySelector(".node");
let isDarkMode = false;
btnDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (!isDarkMode) {
    node.style.translate = "100%";
    node.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    isDarkMode = true;
  } else {
    node.style.translate = "0";
    isDarkMode = false;
    node.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
});
