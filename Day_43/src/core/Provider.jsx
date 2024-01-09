import React, { useReducer } from "react";
import { createContext } from "react";
import { initialState, rootReducer } from "./rootReducer";
export const ProviderContext = createContext();
const Provider = ({ children }) => {
  //state
  //dispatch
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <ProviderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;

/*

*/
