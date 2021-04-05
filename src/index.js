import React from "react";
import { render } from "react-dom";
import { compose, createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
