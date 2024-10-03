import React from "react";
import useFetch from "./customHooks/useFetch.js";

function UsingCustomHook(){
  
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default UsingCustomHook;