var $ = function (tag) {
  return document.querySelector(tag);
};
var $$ = function (allTag) {
  return document.querySelectorAll(allTag);
};

$(".container .btn").addEventListener("click", function () {
  itemAction("add");
});
function itemAction(action, valueItem) {
  if (action === "add") {
    var textValue = document.querySelector(".container .input-task");
    var item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
    <div class = "box">
                <p>${textValue.value}</p>
                <div class="icon-box">
                  <i class="fa-solid fa-pen-to-square edit" style="cursor: pointer"></i>
                  <i class="fa-solid fa-trash remove" style="cursor: pointer"></i>
                </div>
    </div>
    <div class="edit-form" style="display: none">
                <input
                class="edit-task"
                type="text"
                placeholder="Update task"
                value="${textValue.value}"
                />
                <button class="btn-complete">Add task</button>
    </div>
                
    `;
    if (textValue.value.trim() !== "") {
      $(".container").appendChild(item);
    }
    textValue.value = "";
    var btnDestroys = document.querySelectorAll(
      ".container .box .icon-box .remove"
    );
    btnDestroys.forEach(function (btnDestroy) {
      btnDestroy.addEventListener("click", function () {
        itemAction("remove", this);
      });
    });
    var btnEdits = document.querySelectorAll(".container .box .icon-box .edit");
    btnEdits.forEach(function (btnEdit) {
      btnEdit.addEventListener("click", function () {
        itemAction("edit", this);
        console.log(this);
      });
    });
  } else if (action === "remove") {
    valueItem.closest(".box").remove();
    valueItem.closest(".edit-form").remove();
  } else {
    $(".container .item .box").style.display = "none";
    $(".container .item .edit-form").style.display = "flex";
    $(".container .item .edit-form .btn-complete").addEventListener(
      "click",
      function () {
        $(".container .box p").innerText = $(
          ".container .item .edit-form .edit-task"
        ).value;
        if ($(".container .box p").innerText.trim() !== "") {
          $(".container .item .box").style.display = "flex";
          $(".container .item .edit-form").style.display = "none";
        } else {
          action = "remove";
          $(".container .item .edit-form").style.display = "none";
        }
      }
    );
  }
}
