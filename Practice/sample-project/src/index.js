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