import React from "react";
import ListItem from "./ToDoList";
function App() {
  const [inputData,setInputData]=React.useState("");
  const [toDoList,setList]=React.useState([]);

  function updateInput(event){
    const {value}=event.target;
    setInputData(value);
    console.log("value :",value);

  }

  function addToList(){
    setList([...toDoList,inputData]);
    console.log("the list :",toDoList);
    setInputData("");
  }
  // function addToList(){
  //   setList(prevItems => {
  //     return [...prevItems, inputData];
  //   });
  //   setInputData("");
  // }

  function deleteItem(id){
    console.log("deleteItem called and index :",id);
    setList(prev=>{
      return prev.filter((item,ind)=>{
        return ind!==id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateInput} type="text" value={inputData} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      {toDoList.map((item, index) => (
      <ListItem key={index} id={index} todoItem={item} deleteItem={deleteItem}/>))}
    </div>
  )
}

export default App;
