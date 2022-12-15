

export default function SingleTodo({ todo, deleteToDo, updateToDo }) {

  return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={(e) => updateToDo(todo.id)}
          checked={todo.isDone}
        />
        <span>{todo.name}</span>
      </div>
      <div>
        <button onClick={(e) => deleteToDo(todo.id)}>Delete</button>
      </div>
    </>
  );
}