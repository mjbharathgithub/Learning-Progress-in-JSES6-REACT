import React,{useEffect, useState} from "react";

function UseEffectHook(){

  const [count,setCount]=useState(0);
  const[button,setButton]=useState(false);

  useEffect(()=>{
<<<<<<< HEAD
    console.log("current value of button",button);
    setCount(count+1);
    // let timer=setTimeout(()=>{
      
    // },);
    // return ()=>clearTimeout(timer);
=======
    let timer=setTimeout(()=>{
      setCount(count+1);
    },);
    return ()=>clearTimeout(timer);
>>>>>>> e0e39a302ae8b5c5e9c7d5be5d1b72c909ad2f86
  },[button]
  );

  return <div>
<<<<<<< HEAD
    <h1>This is useEffect hook</h1>
=======
>>>>>>> e0e39a302ae8b5c5e9c7d5be5d1b72c909ad2f86
    <h3>Counter : {count}</h3>
    <button onClick={()=>setButton(!button)} type="button">+</button>
  </div>
}

export default UseEffectHook;
<<<<<<< HEAD
// onClick={()=>setCount((count+1))} 
=======
// onClick={()=>setCount((count+1))} 
>>>>>>> e0e39a302ae8b5c5e9c7d5be5d1b72c909ad2f86
