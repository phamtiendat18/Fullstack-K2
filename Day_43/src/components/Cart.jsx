import React from "react";
import { useDispatch, useSelector } from "../core/hook";
import { client } from "../server/client";
const Cart = () => {
  const { carts } = useSelector();
  const dispatch = useDispatch();
  const handlePay = async () => {
    const { response } = await client.post(`/orders`, carts);
    if (response.status === 200) {
      dispatch({
        type: "orders/products",
      });
    }
  };
  return (
    <>
      <table className="cart-table" border={1} cellSpacing={0}>
        <tbody>
          <tr>
            <th>TÊN SẢN PHẨM</th>
            <th>SỐ LƯỢNG</th>
            <th>CÒN LẠI</th>
            <th>TỔNG TIỀN</th>
          </tr>
          {carts.map(({ name, productId, price, left, quantity }) => (
            <tr key={productId}>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{left - quantity}</td>
              <td>{price * quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="order-btn" onClick={handlePay}>
        Pay now
      </button>
    </>
  );
};

export default Cart;
