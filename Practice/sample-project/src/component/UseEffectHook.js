import React,{useEffect, useState} from "react";

function UseEffectHook(){

  const [count,setCount]=useState(0);
  const[button,setButton]=useState(false);

  useEffect(()=>{
    let timer=setTimeout(()=>{
      setCount(count+1);
    },);
    return ()=>clearTimeout(timer);
  },[button]
  );

  return <div>
    <h3>Counter : {count}</h3>
    <button onClick={()=>setButton(!button)} type="button">+</button>
  </div>
}

export default UseEffectHook;
// onClick={()=>setCount((count+1))} 
