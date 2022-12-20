import { useState } from "react";

function Sidebar( {todoList, toggleTodoList, addFunction} ) {

  const [newList, setNewList] = useState("")
  const [addList, setAddList] = useState(false);

  return (
    <div className="sidebar">
      <h2>Todo Lists</h2>
      {/* loop over each todoList and map them onto buttons */}
      {Array.from(todoList).map((listItem) => (
        <button
          key={listItem.id}
          className={listItem.toggled ? 'active-list' : ''}
          onClick={() => toggleTodoList(listItem.id)}
          >
          {listItem.content}
        </button>
      ))}

      <hr />

      <button onClick={() => {setAddList(!addList)}}>+ New List</button>
      <div className={addList ? "add-list-cont viz" : "add-list-cont"}>
        <input
          type="text"
          onChange={(e) => setNewList(e.target.value)}
          value={newList}
          placeholder="Enter title of todo list..."
        />
        <button onClick={(e) => {
          addFunction(e, newList);
          setNewList("");
       }}
      >
        Add
        </button>
      </div>

    </div>
  );
}

export default Sidebar;
