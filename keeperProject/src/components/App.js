import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../contact";
// function Notes(data){
//   return <Note key={data.key} heading={data.title} content={data.content}/>
// }
function App(props){
  return <div>
         <Heading/>
         {notes.map(data=><Note key={data.key} heading={data.title} content={data.content}/>)}
         <Footer/></div>;
         
}

export default App;