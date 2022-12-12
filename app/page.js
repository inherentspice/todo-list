import AddTodo from "./add-todo";
import ToDoList from "./todo-list";
import Sidebar from "./sidebar";
import '../styles/globals.css';



export default function Page() {
  return (
    <div>
      <Sidebar />
      <AddTodo />
      <ToDoList />
    </div>
  );
}
