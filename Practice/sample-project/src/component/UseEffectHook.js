import React,{useEffect, useState} from "react";

function UseEffectHook(){

  const [count,setCount]=useState(0);
  const[button,setButton]=useState(false);

  useEffect(()=>{
    console.log("current value of button",button);
    setCount(count+1);
    // let timer=setTimeout(()=>{
      
    // },);
    // return ()=>clearTimeout(timer);
  },[button]
  );

  return <div>
    <h1>This is useEffect hook</h1>
    <h3>Counter : {count}</h3>
    <button onClick={()=>setButton(!button)} type="button">+</button>
  </div>
}

export default UseEffectHook;
// onClick={()=>setCount((count+1))} 