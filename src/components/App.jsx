import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

function App(){

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(){
    setItems(prevItems => {
      return [...prevItems,inputText];
    });
    setInputText("")
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items && items.map(todoitem => (
          <ToDoItems
          text={todoitem}
          />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
