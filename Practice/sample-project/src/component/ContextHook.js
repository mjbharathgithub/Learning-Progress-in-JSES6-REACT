import React,{useState,createContext,useContext} from "react";
const context=createContext();

function Parent(props){
  const [val,setVal]=useState("Joseph Bharath");
  const variable='simple variable';
  return(
  
  <div>
    <h1>This is useContext</h1>
    <p>This is {val}</p>
    <context.Provider value={{val,props,variable}} >
    <Child1 ></Child1>
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
  const {val,props,variable}=useContext(context);

  return<div>
   <p>This is the final data using Hooks :{props.prp}, {val} and {variable}</p>
  </div>

}

export default Parent;