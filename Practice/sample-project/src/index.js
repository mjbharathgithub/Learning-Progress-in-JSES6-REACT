import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import MyColor from "./component/MyColor.js";
import HandlingObjects from "./component/HandlingObjects.js";
import UseEffectHook from "./component/UseEffectHook.js";
import ContextHook from "./component/ContextHook.js"
import UseRefHook from "./component/UseRefHook.js";
import UseReducerHook from "./component/UseReducerHook.js";
import UseMemoHook from "./component/UseMemoHook.js";
import UseCallbackHook from "./component/UseCallbackHook.js";
import UsingCustomHook from "./component/UsingCustomHook.js";
// ReactDOM.render(
//   <App value="Joe" />
//   ,document.getElementById("root"));
class Col extends React.Component{
  instanceVariable="something"
  constructor(){
    super();
    this.state={
      color:"red",
      another:"this is another state"
    }
  }

  render(){
    return <div><h1>this is a {this.instanceVariable} instanceVariable</h1> <p >I am this {this.state.color} color and variable : {this.instanceVariable} and {this.state.another}</p></div>
  }
}

const sample= <h1>Lets try this</h1>
function Members(props){
  return <p>{props.people} lives inside house</p>
}
function  Home() {
  const mem=[{id:1,type:"father"},{id:2,type:"Mother"},{id:3,type:"son"}]
  return <div>
    <h2>who lives inside me?</h2>
    {mem.map(mem=>{return <Members key={mem.id} people={mem.type} ></Members>})}
    </div>
}


function Button(){
  function BeenClicked(val){
    return alert("Been clicked by "+val)
  }
  return <div>
    <p onClick={()=>BeenClicked("Joe")}>Click me!</p>
  </div>
}



const container=document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
<div>
   <App/>
   <h3>From the adsf sdf</h3>
   <p>Thisi is another</p>
   {sample}
  
   <ContextHook prp="this is a prop"/>
   <UseRefHook></UseRefHook>
   <UseReducerHook/>
   <UseMemoHook></UseMemoHook>
   <UseCallbackHook></UseCallbackHook>
   <UsingCustomHook></UsingCustomHook>
   </div>
   );  