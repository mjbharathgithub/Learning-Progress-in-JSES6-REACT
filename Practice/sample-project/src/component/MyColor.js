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

<<<<<<< HEAD
export default MyColor;
=======
export default MyColor;
>>>>>>> e0e39a302ae8b5c5e9c7d5be5d1b72c909ad2f86
