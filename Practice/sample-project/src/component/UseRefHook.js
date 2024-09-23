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

<<<<<<< HEAD
export default UseRefHook;
=======
export default UseRefHook;
>>>>>>> e0e39a302ae8b5c5e9c7d5be5d1b72c909ad2f86
