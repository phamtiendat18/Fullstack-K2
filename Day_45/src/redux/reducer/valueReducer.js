const initialState = {
  value: localStorage.getItem("RANGE_NUMBER") || 100,
};
export const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value/choose":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
