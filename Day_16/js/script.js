

function getEx01 (a, b) {
    // var a;
    // var b;

    a += b;
    b -= b;
    a -= b;


console.log(`a = ${a}`);
console.log(`b = ${b}`);
}

function getEx03 (a, b, c) {
    var max;

    max = a;

    if (b >= max) {
        max = b;
    }
     if (c >= max) {
        max = c;
    }

    console.log(`Số lớn nhất là ${max}`);
}


function getEx04(a, b) {
    if (a !== 0 && b !== 0){
        if (a / 1 > 0 && b / 1 > 0 || a / 1 < 0 && b / 1 < 0) {
            console.log(`2 số cùng dấu`);
        } else {
            console.log(`2 số khác dấu`);
        }
    } else {
        console.log(`Bạn phải nhập đúng giá trị`);
    }
}
function getEx05(a, b, c) {
    var temp;
    if ( a > b) {
    temp = b;
    b = a;
    a = temp;
    }
    if (b > c) {
    temp = b;
    b = c;
    c = temp;
    }
    if (b < a) {
    temp = a;
    a = b;
    b = temp;
    }

    console.log(`Dãy số tăng dần là: ${a} ${b} ${c}`);
}
console.log(`----------Bài 1----------`);

getEx01(10, 20);

console.log(`----------Bài 2----------`);

var s;

s = 10 + 20 + 5 ** 10 / 2;

console.log(`Giá trị của S = ${s}`);

console.log(`----------Bài 3----------`);

getEx03 (54, 23, 22);

console.log(`----------Bài 4----------`);

getEx04 ( 30, -4)

console.log(`----------Bài 5----------`);

getEx05 (20, 35, 23);