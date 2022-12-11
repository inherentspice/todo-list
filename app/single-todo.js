"use client";

export default function SingleTodo({ todo }) {
  return (
    <>
      <input type="checkbox" onChange={() => {}}/>
      {todo.name}
      <button>Delete</button>
    </>
  );
}
