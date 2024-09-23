import React,{useState} from "react";

function HandlingObjects(){
  

  const [studentDetail,changeStudentDetail]=useState(
    {
      name:"Joseph Bharath",age:21,dep:"EEE",status:null
    }
  );
  function helper(){
    alert("helper funtion called");
    changeStudentDetail(prev=>({
      ...prev,age:20,name:"JA",status:"Happy"
    }));

  }
  return <div>
    <h3>Handling objects in useState</h3>
    <h5>This {studentDetail.name} is the object and age :{studentDetail.age} and status :{studentDetail.status}</h5>
    <button onClick={helper} type="button">click</button>
  </div>
}

<<<<<<< HEAD
export default HandlingObjects;
=======
export default HandlingObjects;
>>>>>>> e0e39a302ae8b5c5e9c7d5be5d1b72c909ad2f86
