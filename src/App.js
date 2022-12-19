import { useState, useEffect } from "react";
import AddTodo from "./components/add-todo";
import ToDoList from "./components/todo-list";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import TodoService from "./services/todo";
import TodoListService from "./services/todoLists";
import './App.css';
import ErrorMessage from "./components/error-message";
import LoadingIndicator from "./components/loading-indicator";

export default function App() {
  const [todos, setTodos] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState("");

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

  useEffect(() => {
    const fetchTodoLists = async () => {
      try {
        const response = await TodoListService.getAll();
        setTodoList(() => response.data)
      } catch (error) {
        setError(error);
      }
    }
    fetchTodoLists();

  }, []);

  console.log(todoList);

  //delete item from todo list
  function deleteToDo(id) {
    TodoService.deleteOne(id)
      .then(response => {
        const todosFiltered = todos.filter((todo) => todo.id !== id);
        setTodos(todosFiltered);
      })
      .catch(error => {
        setError(error);
      });
  }

  //update item from todo list
  function updateToDo(id) {
    const updatedTodo = todos.find(item => item.id === id);
    if (updatedTodo) {
      updatedTodo.isDone = !updatedTodo.isDone;
    }

    TodoService.update(id, updatedTodo)
      .then(response => {
        setTodos([...todos]);
      })
      .catch(error => {
        setError(error);
      })
  }

  function addToDo(e, name, color) {
    // prevent the form from submitting
    e.preventDefault()

    // create a new todo object
    const newTodo = {
      content: name,
      priority: color
    };

    const createTodo = async () => {
      try {
        await TodoService.create(newTodo);
      } catch (error) {
        setError(error);
      }
    }
    createTodo();
    setTodos([...todos, newTodo]);
  }

  // toggle the active todolist
  function toggleTodoList(listId) {

    const updatedTodoList = todoList.find((list) => list.id === listId);

    if (updatedTodoList) {
      updatedTodoList.toggled = !updatedTodoList.toggled;
    }

    setTodoList(todoList.map((list) => (list.id === listId ?
      updatedTodoList :
      {
        content: list.content,
        toggled: false,
      }
      )));
  }

  async function addTodoList(e, name) {
    e.preventDefault();
    const newTodoList = {content: name};

    try {
      await TodoListService.create(newTodoList);
      // fetch the updated list of todo lists from the database
      const response = await TodoListService.getAll();
      setTodoList(response.data);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="app-container">
      <Header />
      <Sidebar todoList={todoList} toggleTodoList={toggleTodoList} addFunction={addTodoList}/>
      <AddTodo addFunction={addToDo} />
      {error && <ErrorMessage message={error.message} />}
      {loading && <LoadingIndicator />}
      {!loading && <ToDoList todos={todos} deleteToDo={deleteToDo} updateToDo={updateToDo} />}
    </div>
  )
}
