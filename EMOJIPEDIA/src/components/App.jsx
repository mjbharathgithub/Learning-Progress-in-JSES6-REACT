import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
// function createDictionary(data){
// return <Entry key={data.id} emoji={data.emoji} name={data.name} meaning={data.meaning} />}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(data=><Entry key={data.id} emoji={data.emoji} name={data.name} meaning={data.meaning} />)}
    </div>  

  );
}

export default App;
