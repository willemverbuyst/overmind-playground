import * as React from "react";
import { useAppState } from "../overmind";

const Todo = React.memo(({ id }: { id: string }) => {
  const todo = useAppState((state) => state.todos[id]);

  return todo ? <li>{todo.title}</li> : <li>nothing to do</li>;
});

export default Todo;
