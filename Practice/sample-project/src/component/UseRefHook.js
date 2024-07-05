import React,{useState,useRef,useEffect} from "react";

function UseRefHook(){

  const [inputValue,setInput]=useState(0);
 // const [count,setCount]=useState(0);
 const count=useRef(0);

  useEffect(()=>{
    count.current=count.current+1;
  });


  return <div>
    <input value={inputValue} type="text" onChange={(e)=>setInput(e.target.value)}/>
    <p>RenderCount : {count.current}</p>
  </div>

}

export default UseRefHook;
