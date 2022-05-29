import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { NumberProvider } from "./contexts/NumberContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NumberProvider>
      <App />
    </NumberProvider>
  </StrictMode>
);
