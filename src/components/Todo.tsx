import React from "react";
import { useAppState } from "../overmind";

const Todo = React.memo(({ id }: { id: string }) => {
  const todo = useAppState((state) => state.todos[id]);

  if (!todo) {
    return;
  }

  return (
    <li>
      {todo.title} {todo.completed ? "✅" : "📂"}
    </li>
  );
});

export default Todo;
