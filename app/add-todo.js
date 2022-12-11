"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  // create post request for new todo

  refresh();
}

export default function AddTodo() {
  const router = useRouter();
  let [name, setName] = useState("")
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={async () => {
        await addTodo(name, router.refresh);
        setName("");
      }}
    >
      Add
      </button>
    </div>
  );
}
