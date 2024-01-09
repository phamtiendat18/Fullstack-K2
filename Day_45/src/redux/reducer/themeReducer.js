const initialState = {
  theme: localStorage.getItem("chakra-ui-color-mode") || "light",
};
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "theme/choose":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
