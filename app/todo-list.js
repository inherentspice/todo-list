import SingleTodo from "./single-todo";

// function that will get the todo data, but until the backend is created
// will just hardcode data
const getTodos = () => {
  // create test data--change to async when making actual call
  let todos = [
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
  return todos;
}

export default async function TodoList() {
  const todos = getTodos();
  return (
    <div className="list-todos">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="single-todo" style={{backgroundColor: todo.priority}}>

              {/*
                render in seperate component to keep the rest of this component
                using server side rendering rather than client side
              */}

              <SingleTodo todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  )
}
