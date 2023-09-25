import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
