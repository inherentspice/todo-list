import { useState } from "react";

import AddTodo from "./components/add-todo";
import ToDoList from "./components/todo-list";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import './App.css';


export default function App() {
  // test data for use in creating functionality
  const todosData = [
    {
      "id": "62977",
      "name": "Finish Scaffolding",
      "isDone": true,
      "priority": "blue"
    },
    {
      "id": "34156",
      "name": "Implement Dark/Light Mode",
      "isDone": true,
      "priority": "green"
    },
    {
      "id": "99558",
      "name": "Make Beautiful CSS",
      "isDone": false,
      "priority": "orange"
    },
    {
      "id": "62534",
      "name": "Create Sidebar",
      "isDone": false,
      "priority": "red"
    },
    {
      "id": "98742",
      "name": "Implement Delete Todo Function",
      "isDone": false,
      "priority": "black"
    }
  ]

  const [todos, setTodos] = useState(todosData)

  //delete item from todo list
  function deleteToDo(id) {
    const todosFiltered = todos.filter((todo) => todo.id !== id)
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

  function addToDo(name, color) {
    console.log('here')
  }

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <AddTodo addFunction={addToDo}/>
      <ToDoList todos={todos} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
    </div>
  );
}
