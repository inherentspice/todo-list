
import Darkmode from "./darkmode";

function Sidebar() {
  const categories = ["Urgent", "Impossible", "Space"];

  return (
    <div className="sidebar">
      <Darkmode/>
      <button>
        Main
      </button>
      <button>+ Add New Todo List</button>
      <hr />
      {categories.map((category) => (
        <button
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
