import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createStore } from "redux";
import App from "./App";

const store = createStore((state = 0, action) => {
  //! esto es un reducer!
  // action = {type: 'tipo_de_accion', payload: any}
  switch (action.type) {
    case "incrementar": {
      return state + 1;
    }
    case "decrementar": {
      return state - 1;
    }
    case "set": {
      return action.payload;
    }
    default:
      return state;
  }
});

console.log(store.getState());
store.dispatch({ type: "indefinida" });
console.log(store.getState());
store.dispatch({ type: "incrementar" });
console.log(store.getState());
store.dispatch({ type: "decrementar" });
console.log(store.getState());
store.dispatch({ type: "set", payload: 15 });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
