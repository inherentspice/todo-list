"use client";

import { useState } from "react";

async function addTodo(name, color) {
  // create post request for new todo with the given name and color

}

export default function AddTodo( {} ) {
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
        <option value="green" style={{backgroundColor: "green"}}>Easy-Peasy</option>
        <option value="blue" style={{backgroundColor: "blue"}}>Use to Procrastinate</option>
        <option value="red" style={{backgroundColor: "red"}}>Urgent</option>
        <option value="orange" style={{backgroundColor: "orange"}}>Burning Hole in Brain</option>
        <option value="black" style={{backgroundColor: "black"}}>I Do Not Even Want to Think About It</option>
      </select>

      <button onClick={async () => {
        await addTodo(name, color);
        setName("");
        setColor("");
      }}
    >
      Add
      </button>
    </div>
  );
}
