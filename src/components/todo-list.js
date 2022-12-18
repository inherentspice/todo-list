import SingleTodo from "./single-todo";

// function that will get the todo data, but until the backend is created
// will just hardcode data

export default function TodoList( { todos, deleteToDo, updateToDo } ) {
  return (
    <div className="list-todos">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {Array.from(todos).map((todo) => {
          return (
            <li key={todo.id} className="single-todo" style={{backgroundColor: todo.priority}}>

              {/*
                render in seperate component to keep the rest of this component
                using server side rendering rather than client side
              */}

              <SingleTodo todo={todo} deleteToDo={deleteToDo} updateToDo={updateToDo}/>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
