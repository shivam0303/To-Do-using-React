import React, { useState } from "react";

function App() {

  const [item,setitem] = useState("");
  const [addItem,setaddItem] = useState([]);

  function handleChange(event){
    const newItem = event.target.value;
    setitem(newItem);
  }
  function handleClick(){
    setaddItem(prevVal => {
      return [
        ...prevVal,
        item
      ]
    }); 
    console.log(addItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addItem.map(i =>
            <li>{i}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
