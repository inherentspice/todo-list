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
      />
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="">Choose a priority color...</option>
        <option value="green" style={{backgroundColor: "green"}}></option>
        <option value="blue" style={{backgroundColor: "blue"}}></option>
        <option value="orange" style={{backgroundColor: "orange"}}></option>
        <option value="red" style={{backgroundColor: "red"}}></option>
        <option value="black" style={{backgroundColor: "black"}}></option>
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
