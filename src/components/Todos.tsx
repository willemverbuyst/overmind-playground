import { useAppState } from "../overmind";
import Todo from "./Todo";

const Todos = () => {
  const state = useAppState();

  return Object.keys(state.todos).length ? (
    <ul>
      {Object.keys(state.todos).map((id) => (
        <Todo key={id} id={id} />
      ))}
    </ul>
  ) : (
    <p>nada</p>
  );
};

export default Todos;
