var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselPoint = carousel.querySelector(".carousel-point");
var carouselNav = carousel.querySelector(".carousel-nav");
var nextBtn = carouselNav.querySelector(".next");
var prevBtn = carouselNav.querySelector(".prev");

// Lấy danh sách các items
var carouselItems = carouselInner.children;

// Tính chiều rộng của 1 item
var itemWith = carouselInner.clientWidth;

// Tính tổng kích thước các items
var totalWith = itemWith * carouselItems.length;

// cập nhật CSS cho carousel-inner
carouselInner.style.width = `${totalWith}px`;

var position = 0;
// Lắng nghe sự kiện khi click vào nút next
function nextSlide() {
  if (Math.abs(position) < totalWith - itemWith) {
    position -= itemWith;
    carouselInner.style.translate = `${position}px`;
    var i = Math.abs(position / itemWith);
    points[i].classList.add("active");
    points[i - 1].classList.remove("active");
  }
}
nextBtn.addEventListener("click", nextSlide);
// Lắng nghe sự kiện khi click vào nút prev
function prevSlide() {
  if (Math.abs(position) > 0) {
    position += itemWith;
    carouselInner.style.translate = `${position}px`;
    var i = Math.abs(position / itemWith);
    points[i].classList.add("active");
    points[i + 1].classList.remove("active");
  }
}
prevBtn.addEventListener("click", prevSlide);
// Lắng nghe sự kiện khi click vào point
var points = carouselPoint.querySelectorAll(".point");
points.forEach(function (point, index) {
  point.addEventListener("click", function () {
    position = -itemWith * index;
    carouselInner.style.translate = `${position}px`;
    points.forEach(function (point) {
      point.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Lắng nghe sự kiện khi kéo slide

var isDown = false;
var dragLength, offsetDownX;
carouselInner.addEventListener("mousedown", function (e) {
  isDown = true;
  e.preventDefault();
  offsetDownX = e.offsetX;
  carouselInner.style.cursor = "move";
});
carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDown) {
    dragLength = e.offsetX - offsetDownX;
    carouselInner.style.translate = `${position + dragLength}px`;
    if (dragLength <= -200) {
      nextSlide();
      isDown = false;
    }
    if (dragLength >= 200) {
      prevSlide();
      isDown = false;
    }
  }
});
carouselInner.addEventListener("mouseup", function (e) {
  isDown = false;
  carouselInner.style.cursor = "";
  if (dragLength > -200 || dragLength < 200) {
    carouselInner.style.translate = `${position}px`;
  }
});
