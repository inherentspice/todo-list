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
    const fetchData = async () => {
      let currentTodoList;
      try {
        // fetch todo lists
        const todoListResponse = await TodoListService.getAll();
        console.log(todoListResponse.data)
        setTodoList(todoListResponse.data);

        // set the current list to the first item in the todo list array
        if (todoListResponse.data.length > 0) {
          currentTodoList = todoListResponse.data[0];
          currentTodoList.toggled = true;
        } else {
          // create a new todo list if there are none on record
          const newTodoList = {content: "Main", toggled: true};
          await TodoListService.create(newTodoList);
        }

        // fetch todos for the current list
        const todoResponse = await TodoService.getAll(currentTodoList.content);
        if (!todoResponse.data.length) {
          const newTodo = {content: "Write your first todo!", priority: "green", isDone: false};
          setTodos(newTodo);
          await TodoService.create(newTodo);
        } else {
          setTodos(todoResponse.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


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
  async function toggleTodoList(listId) {
    setLoading(true);
    try {
      // toggle the todolist
      const updatedTodoList = todoList.map(item => {
        if (item.id === listId) {
          item.toggled = true;
        } else {
          item.toggled = false;
        }
        return item;
      });
      setTodoList(updatedTodoList);

      // fetch todos for the current list
      const currList = updatedTodoList.find(item => item.toggled).content
      const todoResponse = await TodoService.getAll(currList);
      if (todoResponse.data.length) {
        // set the todos state from the data returned by the API call
        setTodos(todoResponse.data);
      } else {
        // create a new todo
        const newTodo = {content: "Write your first todo!", priority: "green", isDone: false, list: currList};
        await TodoService.create(newTodo);
        // get the updated list of todos from the API
        const updatedTodosResponse = await TodoService.getAll(currList);
        // set the todos state from the updated data returned by the API call
        setTodos(updatedTodosResponse.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
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

  // This function removes the list from the backend, and the todo notes corresponding to it
  async function removeTodoList() {
    const activeList = todoList.filter((list) => list.toggled === true)[0];
    const alertResponse = window.confirm(`Are you sure you want to delete ${activeList.content}?`)

    if (alertResponse) {
      TodoListService.deleteOne(activeList.id)
        .then(response => {
          const todoListsFiltered = todoList.filter((list) => list.id !== activeList.id);
          setTodoList(todoListsFiltered);
        })
        .catch(error => {
          setError(error);
        });

      TodoService.deleteMany(activeList.content)
        .then(response => {
          setTodos("");
        })
        .catch(error => {
          setError(error);
        })
    }
  }

  return (
    <div className="app-container">
      <Header />
      <Sidebar
        todoList={todoList}
        toggleTodoList={toggleTodoList}
        addFunction={addTodoList}
        removeTodoList={removeTodoList}
        />
      <AddTodo addFunction={addToDo} />
      {error && <ErrorMessage message={error.message} />}
      {loading && <LoadingIndicator />}
      {!loading && <ToDoList todos={todos} deleteToDo={deleteToDo} updateToDo={updateToDo} />}
    </div>
  )
}
