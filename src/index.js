import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("div", { a: 5, b: 10, children: "hello world!" });
console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);

// ////////////////////////////////////////////////
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
