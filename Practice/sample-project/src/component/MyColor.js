import React,{useState} from "react";
function MyColor(){

  
  const [color,setColor]=useState("black");
  function changeFavouriteColor(neWcolor){
    setColor(neWcolor);
  }

  return <div>

    <h2>{color} is my favourite color</h2>
    <button onClick={()=>changeFavouriteColor("red")} type="button">red</button>
    <button onClick={()=>changeFavouriteColor("Green")} type="button">Greed</button>
    <button onClick={()=>changeFavouriteColor("Black")} type="button">Black</button>
  </div>

}

export default MyColor;