import { useAppState } from "../overmind";
import Todo from "./Todo";

const Todos = () => {
  const { todos } = useAppState();

  return (
    <>
      <h2>All</h2>
      {Object.keys(todos).length ? (
        <ul style={{ listStyle: "none" }}>
          {Object.keys(todos).map((id) => (
            <Todo key={id} id={id} />
          ))}
        </ul>
      ) : (
        <p>no todos</p>
      )}
    </>
  );
};

export default Todos;
