import React from "react";

function App() {
  // const [fName,setFname]=React.useState("");
  // const [lName,setLname]=React.useState("");
  const [fullName,setFullName]=React.useState({fName:"",lName:"",email:""});

  function updateFullName(event){
    const {value,name}=event.target;
  

    console.log(value,name);
    setFullName(prev=>{
      console.log("prev ",prev);

      return{
        ...prev,
        [name]:value
      }//IMPORTANAT: HOW CODE IS REDUCED USING SPREAD OPERATOR
      
    //   if(name==="fName"){
    //   return({fName:value ,lName:prev.lName,email:prev.email} );
    // }else if(name==="lName"){
    //   return({fName:prev.fName,lName:value,email:prev.email});
    // }else{
    //   return{fName:prev.fName,lName:prev.lName,email:value};
    // }
    })
    


  }


  function updateFirstName(event){
    setFname(event.target.value);
    console.log(event.target.value);

  }
  function updateLastName(event){
    setLname(event.target.value);
    console.log(event.target.value);

  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <p>{fullName.email}</p>
      <form>
        <input onChange={updateFullName} name="fName" placeholder="First Name" />
        <input onChange={updateFullName} name="lName" placeholder="Last Name" />
        <input onChange={updateFullName} type="mail" name="mail" placeholder="mail" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
