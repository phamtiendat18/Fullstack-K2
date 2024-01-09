var container = document.querySelector(".container");
var wrapper = container.querySelector(".wrapper");
var counterEl = wrapper.querySelector(".counter");
var btn = wrapper.querySelector(".btn");
var lastTime;
var count = 30;
var animationId;
var clickable = false;

// Hàm xử lý bộ đếm
function counter(timestamp) {
  if (!lastTime) {
    lastTime = timestamp;
  }
  var progress = timestamp - lastTime;
  if (progress > 1000) {
    counterEl.innerText = `${count}`;
    if (count === 0) {
      btn.classList.add("show");
      clickable = true;
    } else {
      btn.classList.remove("show");
    }
    if (count <= 0) {
      return 0;
    }
    count--;
    lastTime = timestamp;
  }
  animationId = requestAnimationFrame(counter);
}

animationId = requestAnimationFrame(counter);

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    cancelAnimationFrame(animationId);
  } else {
    animationId = requestAnimationFrame(counter);
  }
});

btn.addEventListener("click", function () {
  if (clickable) {
    window.location.href = `https://fullstack.edu.vn/`;
  }
});
document.addEventListener("mouseover", function (e) {
  if (clickable) {
    if (btn.contains(e.target)) {
      btn.innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Get Link`;
    } else {
      btn.innerHTML = `Get Link`;
    }
  }
});
