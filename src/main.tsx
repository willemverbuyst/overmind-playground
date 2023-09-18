import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { config } from "./overmind/index.ts";

const overmind = createOvermind(config, {
  devtools: "localhost:3031",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider value={overmind}>
    <App />
  </Provider>
  // </React.StrictMode>
);
