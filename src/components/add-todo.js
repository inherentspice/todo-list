import { useState } from "react";

export default function AddTodo( {addFunction} ) {
  let [name, setName] = useState("");
  let [color, setColor] = useState("");

  return (
    <div className="add-todo-cont">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter the title of your todo..."
      />
      <select onChange={(e) => setColor(e.target.value)} value={color} style={{fontWeight: "700"}}>
        <option style={{color: "black", fontWeight: "600"}} value="">Choose a priority color...</option>
        <option value="green" style={{backgroundColor: "green", color: "white", fontWeight: "600"}}>Easy Peasy</option>
        <option value="blue" style={{backgroundColor: "blue", color: "white", fontWeight: "600"}}>I'll get to it when I get to it</option>
        <option value="orange" style={{backgroundColor: "orange", color: "white", fontWeight: "600"}}>I should really start</option>
        <option value="red" style={{backgroundColor: "red", color: "white", fontWeight: "600"}}>Maybe if I ignore it, it'll go away</option>
        <option value="black" style={{backgroundColor: "black", color: "white", fontWeight: "600"}}>It's not really there, it's not really there</option>
      </select>

      <button onClick={(e) => {
        addFunction(e, name, color);
        setName("");
        setColor("");
      }}
    >
      Add
      </button>
    </div>
  );
}
