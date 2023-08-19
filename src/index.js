import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import footerReducer from "./store/FooterReducer";
import loginReducer from "./store/LoginReducer";
import registerReducer from "./store/RegisterReducer";

import App from "./App";

const rootReducer = combineReducers({
  fReducer: footerReducer,
  lReducer: loginReducer,
  rReducer: registerReducer
});
const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
