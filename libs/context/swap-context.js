import React from "react";

const SwapContext = React.createContext({
  isLoading: true,
  setLoading: () => {},
});

export default SwapContext;
