import React from "react";

function App() {

  const [count,changeCount]=React.useState(0);
  function increase(){
    console.log(" increase function called");
    changeCount(count+1);
  }
  function decrease(){
    console.log("decrease function called");
    changeCount(count-1);
  }
  return <div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
</div>;
}

export default App;
