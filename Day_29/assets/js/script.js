var container = document.querySelector(".container");
var div = container.querySelectorAll("div");
var modules = container.querySelectorAll(".module");
var lessons = container.querySelectorAll(".lesson");

// Module
modules.forEach(function (module, index) {
  var span = module.querySelector("span");
  span.innerText = `Chương ${index + 1}: `;
  module.addEventListener("dragstart", function () {
    setTimeout(this.classList.add("dragging"), 0);
  });
  module.addEventListener("dragend", function () {
    this.classList.remove("dragging");
  });
});
// Lesson
lessons.forEach(function (lesson, index) {
  var span = lesson.querySelector("span");
  span.innerText = `Bài ${index + 1}: `;
  lesson.addEventListener("dragstart", function (e) {
    setTimeout(this.classList.add("dragging"), 0);
  });
  lesson.addEventListener("dragend", function (e) {
    this.classList.remove("dragging");
  });
});

var innitDiv = function (e) {
  e.preventDefault();
  var dragItem = container.querySelector(".dragging");
  var siblings = [...container.querySelectorAll("div:not(.dragging)")];
  var nextSibling = siblings.find(function (sibling) {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  container.insertBefore(dragItem, nextSibling);
  lessons = container.querySelectorAll(".lesson");
  modules = container.querySelectorAll(".module");
  modules.forEach(function (module, index) {
    var span = module.querySelector("span");
    span.innerText = `Chương ${index + 1}:`;
  });
  lessons.forEach(function (lesson, index) {
    var span = lesson.querySelector("span");
    span.innerText = `Bài ${index + 1}: `;
  });
};
container.addEventListener("dragover", innitDiv);
container.addEventListener("dragenter", function (e) {
  e.preventDefault();
});
