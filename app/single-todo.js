"use client";

import { useRouter } from "next/navigation";

async function update(id, isDone, refresh) {
  // to complete: update todos db

  // once data is updated, refresh the component
  refresh();
}

async function deleteTodo(id, refresh) {
  // to complete: delete todo from db

  // once todo is deleted, refresh the component
  refresh()
}

export default function SingleTodo({ todo }) {

  const router = useRouter();
  return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
          checked={todo.isDone}
        />
        <span>{todo.name}</span>
      </div>
      <div>
        <button onClick={(e) => deleteTodo(todo.id, router.refresh)}>Delete</button>
      </div>
    </>
  );
}
