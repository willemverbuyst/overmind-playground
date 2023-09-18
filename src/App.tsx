import "./App.css";
import DoneTodos from "./components/Done";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Overmind Playground</h1>
      <Todos />
      <DoneTodos />
    </>
  );
}

export default App;
