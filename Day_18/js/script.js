let text = document.getElementById("text-effect");

let textArr = text.innerText.split(" ");
let defaultTextArr = text.innerText.split(" ");
let i = 0;

setInterval(function () {
  textArr[i] = `<span>${textArr[i]}</span>`;
  text.innerHTML = textArr.join(" ");
  textArr[i] = defaultTextArr[i];
  i++;
  if (i >= defaultTextArr.length) {
    i = 0;
  }
}, 500);
// setInterval(getEx18(), 500);
