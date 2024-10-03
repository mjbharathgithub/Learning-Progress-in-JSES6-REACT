import React,{useReducer} from "react";

function reducer(state,type){
  switch(type){
    case "increment":
      return state+1;
    
    case "decrement":
      return state-1;

    case "reset":
      return 0;

    default:
      alert("error have occured joseph");
      return state;    
  }

}

function EnhancedCounter(){
  //two states having same reducer function
  const [state1,dispatch1]=useReducer(reducer,0);
  const [state2,dispatch2]=useReducer(reducer,0);


  return(
    <div>
      <p>UseReducdr Hook uses</p>
      <p>state 1 count :{state1}</p>
      <button type="button" onClick={()=>dispatch1("increment")}>+</button>
      <button type="button" onClick={()=>dispatch1("decrement")}>-</button>
      <button type="button" onClick={()=>dispatch1("reset")}>reset</button>
      <p>state 2 count :{state2}</p>
      <button type="button" onClick={()=>dispatch2("increment")}>+</button>
      <button type="button" onClick={()=>dispatch2("decrement")}>-</button>
      <button type="button" onClick={()=>dispatch2("reset")}>reset</button>
    </div>
  )
}

export default EnhancedCounter;
