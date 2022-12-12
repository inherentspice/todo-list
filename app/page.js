import AddTodo from "./add-todo";
import ToDoList from "./todo-list";
import '../styles/globals.css';



export default function Page() {
  return (
    <div>
      <AddTodo />
      <ToDoList />
    </div>
  );
}
