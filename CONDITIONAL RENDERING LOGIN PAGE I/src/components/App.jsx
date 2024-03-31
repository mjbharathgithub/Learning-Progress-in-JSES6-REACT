import React from "react";
import Login from "./Login";

var isLogin=false;

function status(data){
  if(data){
    return<h1>Hello</h1>;
  }else{
    return <Login/>;
  }
}
function App() {
  return (
    <div className="container">
      {status===true? <h1>Hello</h1>: <Login/> }
    </div>
  );
}

export default App;
