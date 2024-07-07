import React from "react";
import ReactDom from "react-dom"

class ReactLifeCycle extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"joseph",
      age:21
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log("This is where state is changed based on the props value",props);
    return {...state,name:"Joseph Bharath"};
    // return {
    //   name:"adithyan",age:20
    // }
  }

  componentDidMount() {
    console.log("did mount function has been called");
  
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        name: "Joseph Bharath M"
      }));
    }, 2000);
  }
  
  render(){
    return(
      <div>
        <h2>This is react life cycle</h2>
        <p>name : {this.state.name} and age : {this.state.age}</p>
        <p>props : {this.props.dep}</p>
      </div>
    )
  }
}









const root=ReactDom.createRoot(document.getElementById("root2"));
root.render(<ReactLifeCycle dep="EEE"></ReactLifeCycle>);
