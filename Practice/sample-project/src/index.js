<<<<<<< HEAD
import React, { Component } from "react";
import ReactDOM from "react-dom";


class Parent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      color:"red",
      show:true
    }
  
  }

  static getDerivedStateFromProps(props,prevState){
    if(prevState.color==="red"){
      alert("getDerivedStateFromProps before mounting ",props,prevState);
      return {color: props.color};
  }
  alert("getDerivedStateFromProps after mounting ",props,prevState);
  return {};
    
  }

  componentDidMount(){
    alert("component have mounted Successfully");
  }

  changeFavourite=()=> {
   this.setState({color:"blue"});
    
  }

  shouldComponentUpdate(){
    alert("shouldComponentUpdate is called and returned true");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    alert("Your previous props is "+prevProps.color+" and state "+prevState.color);
  }

  componentDidUpdate(prop,state){
    alert("Component updated successfully and the prop is "+prop.color+" state is "+state.color);
  }

  deleteHeader=()=>{
    this.setState({show:false});

  }

  componentWillUnmount(){
    alert("componentWillUnmount is called ");
  }
  render(){
    {alert("Render method is called successfully");}
    return <div>
      <h1>This is the Parent Component</h1>
      {
      
        this.state.show&&<h2>the color is {this.state.color}</h2>
      
    }
      <button onClick={this.changeFavourite}>click</button>
      <button onClick={this.deleteHeader}>delete</button>
    </div>
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render((<Parent color="Yellow"></Parent>));
=======
import React,{useState} from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import MyColor from "./component/MyColor.js";
import HandlingObjects from "./component/HandlingObjects.js";
import UseEffectHook from "./component/UseEffectHook.js";
import ContextHook from "./component/ContextHook.js"
import UseRefHook from "./component/UseRefHook.js";
// ReactDOM.render(
//   <App value="Joe" />
//   ,document.getElementById("root"));
class Col extends React.Component{
  instanceVariable="something"
  constructor(){
    super();
    this.state={
      color:"red"
    }
  }

  render(){
    return <div><h1>this is a {this.instanceVariable} instanceVariable</h1> <p >I am this {this.state.color} color and variable : {this.instanceVariable}</p></div>
  }
}

const sample= <h1>Lets try this</h1>
function Members(props){
  return <p>{props.people} lives inside house</p>
}
function  Home() {
  const mem=[{id:1,type:"father"},{id:2,type:"Mother"},{id:3,type:"son"}]
  return <div>
    <h2>who lives inside me?</h2>
    {mem.map(mem=>{return <Members key={mem.id} people={mem.type} ></Members>})}
    </div>
}


function Button(){
  function BeenClicked(val){
    return alert("Been clicked by "+val)
  }
  return <div>
    <p onClick={()=>BeenClicked("Joe")}>Click me!</p>
  </div>
}



const container=document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
<div>
   <App/>
   <h3>From the adsf sdf</h3>
   <p>Thisi is another</p>
   {sample}
   <Home/>
   <Col/>
   <Button/>
   <MyColor/>
   <HandlingObjects/>
   <UseEffectHook/>
   <ContextHook/>
   <UseRefHook></UseRefHook>
   </div>
   );  
>>>>>>> e0e39a302ae8b5c5e9c7d5be5d1b72c909ad2f86
