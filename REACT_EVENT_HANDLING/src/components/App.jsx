import React from "react";

function App() {

  const [sub,setSubmit]=React.useState("");
  const [hover,setHover]=React.useState(false);
  const [name,setName]=React.useState("");
  function submitted(){
    setSubmit(name);
  }
  function onMouse(){
    setHover(true);
    
  }
  function offMouse(){
    setHover(false);
    
  }
  function inputChanged(event){
    console.log(event.target.value);
    console.log("function called");
    setName(event.target.value);
  }

  

  return (
    <div className="container">
      <h1>Hello {sub} </h1>
      <input onChange={inputChanged} type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor:hover?"black":"white"}} onMouseOver={onMouse}
      onMouseOut={offMouse}
      onClick={submitted}>Submit</button>
    </div>
  );
}

export default App;
