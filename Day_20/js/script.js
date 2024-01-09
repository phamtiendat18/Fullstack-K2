// Bài 1
let getEx01 = function () {
  let arrA = [1, 4, 3, 2];
  let arrB = [5, 2, 6, 7, 1];

  let same = arrA.reduce(function (prev, current) {
    arrB.includes(current) && prev.push(current);
    return prev;
  }, []);
  console.log(same);
};
getEx01();

// Bài 2
let getEx02 = function () {
  function flatten(arr) {
    return arr.reduce(function (prev, current) {
      return prev.concat(Array.isArray(current) ? flatten(current) : current);
    }, []);
  }
  let arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
  // Dùng hàm flat(Infinity để làm phẳng)
  // let newArr = arr.flat(Infinity);
  console.log(flatten(arr));
};
getEx02();

// Bài 3
let getEx03 = function () {
  let arr = [
    ["a", 1, true],
    ["b", 2, false],
  ];
  let result = [];
  let newArr = arr.flat(Infinity);
  for (var index in newArr) {
    var value = newArr[index];
    var type = typeof value;
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(value);
  }
  console.log(result);
};
getEx03();

// Bài 4
let list = [
  {
    title: "Tiêu đề 1",
    img: "https://picsum.photos/300/200",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Tiêu đề 2",
    img: "https://picsum.photos/300/200",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Tiêu đề 3",
    img: "https://picsum.photos/300/200",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
document.write('<div class = "container">');
for (var index in list) {
  if (index % 2 === 0) {
    document.write(`<div class="item" style = "display: flex; padding: 20px 0 ">
    <div class="img-item">
    <img src="${list[index].img}">
    </div>
    <div class="content-item" style = "max-width: calc(100% - 350px);  padding-left: 30px">
    <h2 class="title-item">${list[index].title}</h2>
    <p class="para-item">${list[index].content}</p>
    </div>
  </div>`);
  } else {
    document.write(`<div class="item" style = "display: flex; padding: 20px 0; border-bottom: 1px solid #ccc; border-top: 1px solid #ccc">
    <div class="content-item" style = "max-width: calc(100% - 350px)">
      <h2 class="title-item">${list[index].title}</h2>
      <p class="para-item">${list[index].content}</p>
    </div>  
    <div class="img-item">
      <img src="${list[index].img}">
    </div>
  </div>`);
  }
}
document.write("</div>");
