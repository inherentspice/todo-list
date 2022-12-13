import SingleTodo from "./single-todo";

// function that will get the todo data, but until the backend is created
// will just hardcode data
const getTodos = () => {
  // create test data--change to async when making actual call
  let todos = [
    {
      "id": "62977",
      "name": "Finish Scaffolding",
      "isDone": true
    },
    {
      "id": "34156",
      "name": "Implement Dark/Light Mode",
      "isDone": true
    },
    {
      "id": "99558",
      "name": "Make Beautiful CSS",
      "isDone": false
    },
    {
      "id": "62534",
      "name": "Create Sidebar",
      "isDone": false
    },
    {
      "id": "98742",
      "name": "Implement Delete Todo Function",
      "isDone": false
    }
  ]
  return todos;
}

export default async function TodoList() {
  const todos = getTodos();
  console.log(todos);
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} style={{ padding: "5px 0" }}>

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
