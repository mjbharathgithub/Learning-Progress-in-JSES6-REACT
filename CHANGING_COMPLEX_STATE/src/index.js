import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
let citrus=["orange","lime","forgotName"];
let fruits=["apple","mango",...citrus,"grapes"];
console.log(fruits);

const abilities={
  strength:"9/10",
  worthy:"10/10"
}

const user={
  name:"Captain",
  age:"100",
  ...abilities
}

console.log(user);

