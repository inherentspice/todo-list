import { useState, useEffect } from "react";
import AddTodo from "./components/add-todo";
import ToDoList from "./components/todo-list";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import TodoService from "./services/todo";
import './App.css';
import ErrorMessage from "./components/error-message";
import LoadingIndicator from "./components/loading-indicator";

export default function App() {
  const [todos, setTodos] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to get the todos from the database if nothing in database, make a first todo
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await TodoService.getAll();
        if (!response.data.length) {
          const newTodo = {content: "Write your first todo!", priority: "green", isDone: false};
          setTodos(newTodo);
          await TodoService.create(newTodo);
        } else {
          setTodos(() => response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  //delete item from todo list
  function deleteToDo(id) {
    const todosFiltered = todos.filter((todo) => todo.id !== id);
    setTodos(() => todosFiltered);
  }

  //update item from todo list
  function updateToDo(id) {
    // Find the item by its id
    const item = todos.find(item => item.id === id);

    // If the item was found, update its "isDone" property
    if (item) {
      item.isDone = !item.isDone;
    }

    // Set the new state
    setTodos([...todos]);
  }

  function addToDo(e, name, color) {
    // prevent the form from submitting
    e.preventDefault()

    // create a new todo object
    const newTodo = {
      id: Date.now(),
      name: name,
      isDone: false,
      priority: color
    };

    // add the new todo to the list of todos
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <AddTodo addFunction={addToDo} />
      {error && <ErrorMessage message={error.message} />}
      {loading && <LoadingIndicator />}
      {!loading && <ToDoList todos={todos} deleteToDo={deleteToDo} updateToDo={updateToDo} />}
    </div>
  )
}
