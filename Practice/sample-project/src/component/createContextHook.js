import React,{useState,createContext,useContext} from "react";
const context=createContext();

function Parent(){
  const [val,setVal]=useState("Joseph Bharath");

  return(
  
  <div>
    <p>This is {val}</p>
    <context.Provider value={val}>
    <Child1 val={val}></Child1>
  </context.Provider>
  </div>
  )
}

function Child1(){

  return<div>
   <Child2 ></Child2>
  </div>

}
function Child2(){

  return<div>
   <Child3 ></Child3>
  </div>

}

function Child3(){
  const val=useContext(context);

  return<div>
   <p>This is again using Hooks : {val}</p>
  </div>

}

export default Parent;
