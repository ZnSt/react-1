import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const element = React.createElement("div", { a: 5, b: 10, children: "Hello World!" });
// console.log(element);

// const element1 = <span>Hello</span>;
// React.createElement("span", { children: "World" });
// const element2 = <span>World!</span>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const jsxElement = (
//   <div>
//     {element1}
//     {element2}
//   </div>
// );
// console.log(jsxElement);

// root.render(jsxElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ////////////////////////////////////////////////
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// );
