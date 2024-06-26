import React from "react";

var isDone = false;

function strike() {
  console.log("strike called");
  isDone = true;
}

function unStrike() {
  console.log("unstrike called");
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
