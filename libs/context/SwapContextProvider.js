import { useReducer } from "react";

import SwapContext from "./swap-context";

const defaultState = {
  isLoading: true,
};

const swapReducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      isLoading: action.loading,
    };
  }

  return defaultState;
};

const SwapContextProvider = (props) => {
  const [state, dispatchAction] = useReducer(swapReducer, defaultState);

  const setIsLoadingHandler = (loading) => {
    dispatchAction({ type: "LOADING", loading: loading });
  };

  const swapContext = {
    isLoading: state.isLoading,
    setLoading: setIsLoadingHandler,
  };

  return (
    <SwapContext.Provider value={swapContext}>
      {props.children}
    </SwapContext.Provider>
  );
};

export default SwapContextProvider;
