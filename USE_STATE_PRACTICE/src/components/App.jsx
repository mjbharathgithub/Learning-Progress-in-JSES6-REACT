import React from "react";

function App() {
  
 

  const [time,setTime]=React.useState("Time");
  function getTime(){
    let currentTime = new Date().toLocaleTimeString();
    console.log("funtion called and current time :"+currentTime);
     //console.log("props presnt "+props.currentTime);
    setTime(currentTime);
}
setInterval(getTime,1000);



  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={getTime}>Get Time</button> */}
    
    </div>
  );
}

export default App;
