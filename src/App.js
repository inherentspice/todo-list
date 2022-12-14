import AddTodo from "./components/add-todo";
import ToDoList from "./components/todo-list";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <AddTodo />
      <ToDoList />
    </div>
  );
}
