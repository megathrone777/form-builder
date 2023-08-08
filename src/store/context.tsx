import React, { useReducer, createContext } from "react";

import { initialStore } from "./initialStore";
import { reducer } from "./reducer";
import { TContext } from "./types";

const AppContext = createContext<TContext>({
  dispatch: (): null => null,
  store: initialStore,
});

const AppProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return (
    <AppContext.Provider value={{ dispatch, store }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
