
async function update(id, isDone) {
  // to complete: update todos db

  // once data is updated, refresh the component
}

async function deleteTodo(id) {
  // to complete: delete todo from db

  // once todo is deleted, refresh the component
}

export default function SingleTodo({ todo }) {

  return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={(e) => update(todo.id, e.target.checked)}
          checked={todo.isDone}
        />
        <span>{todo.name}</span>
      </div>
      <div>
        <button onClick={(e) => deleteTodo(todo.id)}>Delete</button>
      </div>
    </>
  );
}
