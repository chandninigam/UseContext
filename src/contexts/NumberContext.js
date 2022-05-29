import { createContext, useState } from "react";

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState(0);
  return (
    <NumberContext.Provider value={{ num, setNum, input, setInput }}>
      {children}
    </NumberContext.Provider>
  );
};
