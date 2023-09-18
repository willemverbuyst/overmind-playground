import { useAppState } from "../overmind";
import Todo from "./Todo";

const DoneTodos = () => {
  const { doneTodos } = useAppState();

  return (
    <>
      <h2>Done</h2>
      {doneTodos.length ? (
        <ul style={{ listStyle: "none" }}>
          {doneTodos.map((todo) => (
            <Todo key={todo.id} id={todo.id} />
          ))}
        </ul>
      ) : (
        <p>no todos</p>
      )}
    </>
  );
};

export default DoneTodos;
