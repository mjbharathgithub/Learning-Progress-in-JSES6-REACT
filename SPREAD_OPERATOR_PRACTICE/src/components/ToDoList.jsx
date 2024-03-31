import React from "react";

function ListItem(props){

  const [clickStatus,setClick]=React.useState(false);

  function itemClicked(){
    setClick(prev=>!prev);
  }
  return( 
      <li
      onClick={()=>{
        props.deleteItem(props.id);
      }}
      key={props.index}
      style={{textDecoration:(clickStatus?"line-through":"none")}}
      >{props.todoItem}</li>
    )}
   

export default ListItem;