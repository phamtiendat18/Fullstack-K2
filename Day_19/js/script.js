let getEx01 = function () {
  let numbers = [5, 2, 4, -10, 8, 9, 3];

  let maxValue = numbers.reduce(function (max, number) {
    return max < number ? number : max;
  });

  let minValue = numbers.reduce(function (min, number) {
    return min > number ? number : min;
  });
  console.log(`Giá trị lớn nhất của mảng là: ${maxValue}`);
  console.log(`Giá trị nhỏ nhất của mảng là: ${minValue}`);
};

let getEx02 = function () {
  let numbers = [-1, 1, 6, 7, 8, 17, 22, 33];
  let a = 0;
  let totalNumbers = numbers.reduce(function (total, number) {
    let check = true;
    if (number === 1 || number <= 0) {
      return 0;
    }
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        check = false;
        return total;
      }
    }
    if (check) {
      a++;
      return total + number;
    }
  }, 0);
  if (a === 0) {
    console.log(`Mảng này không có số nguyên tố`);
  } else {
    console.log(
      `Trung bình của các số nguyên tố trong mảng là: ${totalNumbers / a}`
    );
  }
};

let getEx03 = function () {
  let arr = [1, 2, 5, 2, 4, 8, 4, 3];

  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(newArr);
};

let getEx04 = function () {
  let numbers = [5, 3, 8, 2, 7, 9, 1];
  numbers[7] = 10;
  var newNum = numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(newNum);
};
console.log(`------------Bài 1------------`);
getEx01();

console.log(`------------Bài 2------------`);
getEx02();

console.log(`------------Bài 3------------`);
getEx03();

console.log(`------------Bài 4------------`);
getEx04();
