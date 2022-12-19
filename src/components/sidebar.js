import { useState } from "react";

function Sidebar( {todoList, toggleTodoList, addFunction} ) {

  const [newList, setNewList] = useState("")

  return (
    <div className="sidebar">
      <h2>Todo Lists</h2>
      {/* loop over each todoList and map them onto buttons */}
      {Array.from(todoList).map((listItem) => (
        <button
          className={listItem.toggled ? 'active-list' : ''}
          onClick={() => toggleTodoList(listItem.id)}
          >
          {listItem.content}
        </button>
      ))}

      <hr />

      <div>
        <input
          type="text"
          onChange={(e) => setNewList(e.target.value)}
          value={newList}
          placeholder="Enter the title of your todo list..."
        />
        <button onClick={(e) => {
          addFunction(e, newList);
          setNewList("");
       }}
      >
        Add
        </button>
      </div>

      <button>+ New List</button>

    </div>
  );
}

export default Sidebar;
