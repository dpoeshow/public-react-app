import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { isBrowser } from "../../utils/isBrowser";
import { persist } from "./persister";
const userContext = React.createContext(null);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    persist(reducer, "state"),
    initialState,
    () => {
      if (!isBrowser()) {
        return;
      }
      const state = localStorage.getItem("state");
      if (!state) {
        return initialState;
      }
      return JSON.parse(state);
    }
  );

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export const useDispatch = () => {
  const _context = useContext(userContext);
  if (!_context) {
    throw Error("No UserContext Available");
  }
  return _context.dispatch;
};

export const useSelector = (fn) => {
  const _context = useContext(userContext);
  if (!_context) {
    throw Error("No UserContext Available");
  }
  return fn(_context.state ?? {});
};
