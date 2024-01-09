var productList = document.querySelector(".product-list");
var addBtnS = productList.querySelectorAll(".add-btn");

var productCart = document.createElement("table");
productCart.className = "product-cart";
var css = {
  width: "calc(100% - 20px)",

  margin: "0 auto",
};
Object.assign(productCart.style, css);
var btnBox = document.createElement("div");
btnBox.className = "btn-box";

// Sự kiện reload lại trang
document.body.addEventListener("load", renderProduct());

// Sự kiện thêm vào giỏ hàng
addBtnS.forEach(function (addBtn) {
  addBtn.addEventListener("click", function () {
    var productId = this.parentElement.parentElement.getAttribute("id");
    var productName = this.parentElement.parentElement.children[1].innerText;
    var productPrice = this.parentElement.parentElement.children[2].innerText;
    var productQuantity = this.parentElement.children[0].value;
    var product = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      money: productPrice * productQuantity,
    };
    var cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderProduct();
  });
});

function renderProduct() {
  var reComment = document.createElement("p");
  reComment.className = "notification";
  document.body.append(productCart);

  var cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  if (cart.length === 0) {
    productCart.border = "0";
    productCart.innerHTML = `<p>Giỏ hàng không có sản phẩm nào!</p>`;
    btnBox.style.display = "none";
  } else {
    btnBox.style.display = "block";

    productCart.border = "1";
    productCart.cellPadding = "5";
    productCart.cellSpacing = "0";
    var productItem = `<tr>
                      <th style="width: 80px">STT</th>
                      <th style="width: 30%">Tên sản phẩm</th>
                      <th style="width: 20%">Giá</th>
                      <th style="width: 20%">Số lượng</th>
                      <th style="width: 20%">Thành tiền</th>
                      <th>Xóa</th>
                    </tr>  `;
    var totalQuantity = 0;
    var totalMoney = 0;
    cart.map(function (value, index) {
      productItem += `  <tr>
                        <td>${index + 1}</td>
                        <td>${value.name}</td>
                        <td>${value.price}</td>
                        <td>
                        <input class="quantity-product" type="number" value="${
                          value.quantity
                        }" />
                        </td>
                        <td>${value.money}</td>
                        <td>
                        <button class="delete-product" style="width: 100%">Xóa</button>
                        </td>
                      </tr>  `;
      totalQuantity += Number(value.quantity);
      totalMoney += Number(value.money);
    });
    var total = `<tr>
                  <td colspan="3">Tổng</td>  
                  <td>${totalQuantity}</td>
                  <td colspan="2">${totalMoney}</td>
              </tr>`;
    productCart.innerHTML = productItem + total;
    document.body.append(btnBox);
    btnBox.innerHTML = `
                    <button class="update-btn" style="margin: 10px">Câp nhật giỏ hàng</button>
                    <button class="destroy-btn">Xóa giỏ hàng</button>
  `;
    deleteItem();
    deleteCart();
    updateCart();
  }
}

// Sự kiện xóa sản phẩm
function deleteItem() {
  var deleteProducts = productCart.querySelectorAll(".delete-product");
  deleteProducts.forEach(function (deleteProduct, index) {
    deleteProduct.addEventListener("click", function () {
      var cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderProduct();
    });
  });
}

// Sự kiện click vào nút xóa giỏ hàng

function deleteCart() {
  var btnDestroy = document.querySelector(".btn-box .destroy-btn");
  btnDestroy.addEventListener("click", function () {
    var cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    var confirmDestroy = "Bạn muốn xóa giỏ hàng ?";
    if (confirm(confirmDestroy) === true) {
      localStorage.clear(cart);
      alert("xóa giỏ hàng thành công");
      renderProduct();
    } else {
      alert("Xóa giỏ hàng thất bại!");
    }
  });
}

// Sự kiện khi click vào nút cập nhật giỏ hàng
function updateCart() {
  var quantityUpdates = productCart.querySelectorAll(".quantity-product");
  var btnUpdate = document.querySelector(".btn-box .update-btn");
  btnUpdate.addEventListener("click", function () {
    var confirmUpdate = "Bạn có muốn cập nhật giỏ hàng không ?";
    if (confirm(confirmUpdate) === true) {
      quantityUpdates.forEach(function (quantityUpdate, index) {
        var cart = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
        if (quantityUpdate.value < 0) {
          alert("nhập sai số lượng!");
        }
        cart[index].quantity = quantityUpdate.value;
        cart[index].money = cart[index].quantity * cart[index].price;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderProduct();
      });
      confirm("Cập nhật giỏ hành thành công");
    } else {
      confirm("cập nhật giỏ hàng không thành công!");
    }
  });
}
