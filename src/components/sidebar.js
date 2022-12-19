function Sidebar( {todoList, toggleTodoList} ) {
  const topics = ["Urgent", "Impossible", "Space"];

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

      <button>+ New List</button>
      <hr />
      <h2>Topics</h2>
      {topics.map((topic) => (
        <button
          key={topic}
        >
          {topic}
        </button>
      ))}
      <button>+ New Topic</button>
    </div>
  );
}

export default Sidebar;
