// const products = JSON.parse(localStorage.getItem("carts"));
// console.log(products);
export const initialState = {
  carts: JSON.parse(localStorage.getItem("carts") || "[]"),
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "message/update": {
      return { ...state, message: action.payload };
    }
    case "chat/sendMessage": {
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
      };
    }
    case "add/product": {
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    }
    case "update/quantity": {
      return {
        carts: [...state.carts],
      };
    }

    case "orders/products": {
      return {
        carts: [],
      };
    }

    default: {
      return state;
    }
  }
};
