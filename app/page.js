import AddTodo from "./add-todo";
import ToDoList from "./todo-list";
import Sidebar from "./sidebar";
import Header from "./header";
import '../styles/globals.css';



export default function Page() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <AddTodo />
      <ToDoList />
    </div>
  );
}
