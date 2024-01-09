var container = document.querySelector(".container");
var header = container.querySelector(".header");
var controls = container.querySelector(".controls");
var mainControl = controls.querySelector(".main-control");
var btnControl = controls.querySelector(".btn-control");
var menu = mainControl.querySelector(".menu");
var btnFile = container.querySelector(".btn-file");
var count = 0;
var btnActions = btnControl.querySelectorAll("button");
var inputColor = btnControl.querySelector('input[type="color"]');
var btnSaves = menu.querySelectorAll("button");
var contentBox = container.querySelector(".content");
var btnDarkMode = header.querySelector(".btn-dark-mode");
var node = btnDarkMode.querySelector(".node");
var counterBox = document.createElement("div");
counterBox.className = "counter-box";
var css = {
  display: "flex",
  flexDirection: "row-reverse",
  columnGap: "20px",
  marginTop: "35px",
};
Object.assign(counterBox.style, css);
container.append(counterBox);
var word = document.createElement("span");
counterBox.append(word);
word.innerText = "Số từ: 0";
var char = document.createElement("span");
counterBox.append(char);
char.innerText = "Số ký tự: 0";

// Auto focus when reload page
window.addEventListener("load", function () {
  contentBox.focus();
});
// Button dark mode
var isDark = false;
btnDarkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (!isDark) {
    node.style.translate = "100%";
    node.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    isDark = true;
  } else {
    node.style.translate = "0";
    isDark = false;
    node.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
});

// Show menu
btnFile.addEventListener("click", function (e) {
  count++;
  e.preventDefault();
  menu.classList.add("show");
});
// hidden menu
document.addEventListener("click", function (e) {
  var isMenu = btnFile.contains(e.target);
  if (!isMenu || count > 1) {
    menu.classList.remove("show");
    count = 0;
  }
});
// Editor document actions

btnActions.forEach(function (btnAction) {
  btnAction.addEventListener("click", function (e) {
    var action = this.className;
    console.log(action);
    document.execCommand(`${action}`);
    btnActions.forEach(function (btnAction) {
      btnAction.classList.remove("active");
    });
    this.classList.add("active");
  });
});
// Change text color
inputColor.addEventListener("input", function () {
  document.execCommand("foreColor", false, inputColor.value);
});

// Actions of buttons
btnSaves.forEach(function (btnSave) {
  btnSave.addEventListener("click", function () {
    var fileName = mainControl.querySelector(".file-name").value;
    var content = contentBox.textContent;

    // button new file
    if (this.className === "new-file") {
      contentBox.innerText = "";
      word.innerText = "Số từ: 0";
      char.innerText = "Số ký tự: 0";
      inputColor.value = "black";
      btnActions.forEach(function (btnAction) {
        btnAction.classList.remove("active");
      });
      btnActions[0].classList.add("active");
    }
    // Button save as file TXT(.txt)
    if (this.className === "save-txt") {
      var blob = new Blob([content], { type: "text/plain" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
    // Button save as file PDF(.pdf)
    if (this.className === "save-pdf") {
      html2pdf().from(contentBox).save(fileName);
    }
  });
});

// Count words and characters
contentBox.addEventListener("keyup", function () {
  var content = container.querySelector(".content").textContent;
  // Array of characters
  var chars = content.split("").filter(function (char) {
    return char.trim() !== "";
  });
  // Array of words
  var words = content.split(" ").filter(function (word) {
    return word.trim() !== "";
  });
  char.innerText = `Số ký tự: ${chars.length}`;
  word.innerText = `Số từ: ${words.length}`;
});
