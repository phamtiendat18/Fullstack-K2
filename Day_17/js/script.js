// Bài 1

function getEx01(d) {
  let price;
  let money;

  if (d > 0) {
    if (d <= 1) {
      price = 15000;
    } else if (d <= 5) {
      price = 13500;
    }
    if (d > 5) {
      price = 11000;
    }
    money = d * price;
    if (d > 120) {
      money = money - money * 0.1;
    }
  }
  console.log(`Giá tiền taxi của bạn là: ${money}`);
}

// Bài 2

function getEx02(n) {
  let price;

  if (n > 0) {
    if (n <= 50) {
      price = 1678;
    } else if (n <= 100) {
      price = 1734;
    } else if (n <= 200) {
      price = 2014;
    } else if (n <= 300) {
      price = 2536;
    } else if (n <= 400) {
      price = 2834;
    }
    if (n > 400) {
      price = 2927;
    }
    let money = n * price;
    console.log(`Tiền điện của bạn là: ${money}`);
  }
}

// Bài 3
let getEx03 = function (n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i * (i + 1);
  }
  console.log(`Giá trị của biểu thức là: ${s} `);
};

// Bài 4

function getEx04(n) {
  let check = true;
  if (n === 1) {
    console.log(`${n} không phải là số nguyên tố`);
  }
  if (n === 2) {
    return console.log(`${n} là số nguyên tố`);
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        check = false;
      }
    }
    if (check) {
      console.log(`${n} là số nguyên tố`);
    } else {
      console.log(`${n} không là số nguyên tố`);
    }
  }
}

// Bài 5

function getEx05(n) {
  let s = "";
  let a = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      s += `${a} `;
      a++;
    }
    s += "\n";
  }
  console.log(s);
}

// Bài 6

const board = document.querySelector(".board");

for (let rows = 0; rows < 8; rows++) {
  let color;
  let boxStartWhite = rows % 2 === 0 ? true : false;
  for (let columns = 0; columns < 8; columns++) {
    if (boxStartWhite) {
      color = columns % 2 === 0 ? "white" : "black";
    } else color = columns % 2 === 0 ? "black" : "white";
    const box = document.createElement("div");
    box.style.width = board.clientWidth / 8 + "px";
    box.style.height = board.clientHeight / 8 + "px";
    box.style.backgroundColor = color;
    box.style.border = "none";

    board.append(box);
  }
}

// Bài 7

const table = document.querySelector(".table");
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    let multip = document.createElement("div");
    multip.style.width = table.clientWidth / 9 + "px";
    multip.style.height = table.clientHeight / 10 + "px";
    multip.style.border = "1px solid black";
    multip.style.textAlign = "center";
    multip.style.lineHeight = "50px";
    let node = document.createTextNode(`${i} x ${j} = ${i * j}`);
    multip.append(node);
    table.append(multip);
  }
}

// Bài 8

let sum = function (n) {
  let s = 1 / n;
  if (n === 1) {
    return 1;
  }
  return s + sum(n - 1);
};
console.log(`===========Bài 1==========`);
getEx01(5);
console.log(`===========Bài 2==========`);
getEx02(10);
console.log(`===========Bài 3==========`);
getEx03(5);
console.log(`===========Bài 4==========`);
getEx04(3);
console.log(`===========Bài 5==========`);
getEx05(5);
console.log(`===========Bài 8==========`);
console.log(sum(5));
