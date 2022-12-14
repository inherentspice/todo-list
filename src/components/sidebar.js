function Sidebar() {
  const topics = ["Urgent", "Impossible", "Space"];

  return (
    <div className="sidebar">
      <h2>Todo Lists</h2>
      <button>
        Main
      </button>
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
