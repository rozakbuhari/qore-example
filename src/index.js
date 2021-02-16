import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import qoreContext from "./qoreContext";

ReactDOM.render(
  <React.StrictMode>
    <qoreContext.context.Provider
      value={{
        client: qoreContext.client,
      }}
    >
      <App />
    </qoreContext.context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
