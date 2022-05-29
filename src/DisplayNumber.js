import React, { useContext } from "react";
import { NumberContext } from "./contexts/NumberContext";

const DisplayNumber = () => {
  const { num } = useContext(NumberContext);
  return <h1>Number : {num}</h1>;
};

export default DisplayNumber;
