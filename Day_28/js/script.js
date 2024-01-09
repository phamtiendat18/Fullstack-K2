var progressBar = document.querySelector(".progress-bar");
var progressTime = progressBar.querySelector("span");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;
var timerUpdate = 0;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    // isDrag = true;
    handleUpdateValue(value);
    currentTimeEl.innerText = getTime((audio.duration * initialValue) / 100);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
    initialValue = timerUpdate;
  }
});

document.addEventListener("mousemove", function (e) {
  e.stopPropagation();
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;
    currentTimeEl.innerText = getTime((audio.duration * initialValue) / 100);
    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  initialValue = value;

  audio.currentTime = (audio.duration * initialValue) / 100;

  currentTimeEl.innerText = getTime((audio.duration * initialValue) / 100);
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  initialValue = 0;
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
    audio.currentTime = (audio.duration * timerUpdate) / 100;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
    audio.currentTime = (audio.duration * timerUpdate) / 100;
  }
});
audio.addEventListener("timeupdate", function () {
  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
    value = (audio.currentTime * 100) / audio.duration;

    handleUpdateValue(value);
    timerUpdate = value;
    timeKaraoke = audio.currentTime;
    displayLyrics(audio);
    // handleColor(audio.currentTime);
    // displayLyric();
  }
});
// Lắng nghe sự kiện hover chuột vào thanh timer

progressBar.addEventListener("mouseover", function (e) {
  progressTime.style.display = "flex";
});
progressBar.addEventListener("mouseout", function () {
  progressTime.style.display = "none";
});
progressBar.addEventListener("mousemove", function (e) {
  var value = (e.offsetX / progressBarWidth) * 100;
  progressTime.style.left = `${value}%`;
  progressTime.style.translate = `${-50}%`;
  progressTime.innerHTML = getTime((audio.duration * value) / 100);
});
progressSpan.addEventListener("mouseover", function (e) {
  e.stopPropagation();
});

// Sự kiện hết video tự reset về đầu

audio.addEventListener("ended", function () {
  value = 0;
  audio.currentTime = 0;
  handleUpdateValue(value);
  playBtn.innerHTML = playBtnIcon;
});

// Sự kiện mở/ đóng phần karaoke
var btnKaraoke = document.querySelector(".karaoke-box .karaoke-btn");
var karaoke = document.querySelector(".karaoke");
var mainKaraoke = document.querySelector(".karaoke .main-karaoke");

karaoke.addEventListener("click", function (e) {
  e.stopPropagation();
});

btnKaraoke.addEventListener("click", function () {
  karaoke.classList.add("show");
});
var btnClose = karaoke.querySelector(".fa-solid.fa-chevron-down");
btnClose.addEventListener("click", function () {
  karaoke.classList.remove("show");
});
function millisecondsToSeconds(milliseconds) {
  return milliseconds / 1000;
}
var lyricDisplay1 = document.createElement("p");
mainKaraoke.appendChild(lyricDisplay1);
var lyricDisplay2 = document.createElement("p");
mainKaraoke.appendChild(lyricDisplay2);

for (var i in lyric) {
  if (i % 2 === 1) {
    var endTime = millisecondsToSeconds(
      lyric[i].words[lyric[i].words.length - 1].endTime
    );
  }
}
// Hàm đưa lời bài hát ra display
function displayLyrics(audio) {
  var currentTime = audio.currentTime;
  var matchingSentences = lyric.filter(function (sentence) {
    var startTime = millisecondsToSeconds(sentence.words[0].startTime);
    return currentTime >= startTime && currentTime <= endTime;
  });
  if (matchingSentences.length > 0) {
    // Tạo HTML để hiển thị từng từ của câu lời
    var matchingSentence = [];
    // var sentenceData1 = matchingSentences[matchingSentences.length - 2];
    if (matchingSentences.length % 2 === 1) {
      var sentenceData1 = matchingSentences[matchingSentences.length - 1];
    }
    var sentenceData2 = lyric[matchingSentences.length];
    matchingSentence.push(sentenceData1, sentenceData2);
    var sentence1 = matchingSentence[0].words
      .map(function (word) {
        var time = word.endTime - word.startTime;
        return `<span>${word.data}</span>`;
      })
      .join(" "); // Kết hợp các từ lại với nhau
    lyricDisplay1.innerHTML = sentence1;
    var sentence2 = matchingSentence[1].words
      .map(function (word) {
        return `<span>${word.data}</span>`;
      })
      .join(" ");
    lyricDisplay2.innerHTML = sentence2;
  }
  if (matchingSentences.length === 0) {
    lyricDisplay1.innerHTML = `<span>Bài hát: Đủ trải sẽ thấm</span>`;
    lyricDisplay2.innerHTML = `<span class="singer-name">Singer: Mikelodic</span>`;
  }
}
// var currentScreen;
// function displayLyric(audio) {
//   let currentTime = Math.floor(audio.currentTime * 1000);
//   let index = lyric.findIndex(function (sentence) {
//     return (
//       sentence.words[0].startTime <= currentTime &&
//       sentence.words[sentence.words.length - 1].endTime >= currentTime
//     );
//   });
//   //Hiển thị 2 câu đầu tiên trước khi 5s đầu tiên
//   let firstTime = lyric[0].words[0].startTime;
//   let firstRange = currentTime - firstTime;
//   if (firstRange > -5000 && firstRange < 0) {
//     index = 0;
//   }
//   if (index !== -1) {
//     let screen = Math.floor(index / 2 + 1);

//     let offset = (screen - 1) * 2;
//     if (index >= offset && index < offset + 2) {
//       let pTag = "";
//       for (let i = offset; i < offset + 2; i++) {
//         let sentence = lyric[i].words
//           .map(function (item) {
//             return item.data;
//           })
//           .join(" ");
//         pTag += `<p data-start-time = "${lyric[i].words[0].startTime}"
//         data-end-time = "${lyric[i].words[lyric[i].words.length - 1].endTime}"
//         data-words = ${JSON.stringify(lyric[i].words)}
//         >${sentence}<span>${sentence}</span>
//         </p>`;
//       }
//       mainKaraoke.innerHTML = pTag;
//     }
//   }
// }
// var handleColor = function (currentTime) {
//   var sentenceEl = mainKaraoke.children;
//   Array.from(sentenceEl).forEach(function (sentence) {
//     var startTime = sentence.dataset.startTime;
//     var endTime = sentence.dataset.endTime;
//     if (startTime && endTime && currentTime >= startTime) {
//       var words = JSON.parse(sentence.dataset.words);
//       var word = words.find(function (item) {
//         return currentTime >= item.startTime;
//       });
//     }
//   });
// };
