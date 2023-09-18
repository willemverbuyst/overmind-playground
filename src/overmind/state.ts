import { derived } from "overmind";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type State = {
  todos: Record<string, Todo>;
  doneTodos: Todo[];
};

export const state: State = {
  todos: {
    a: {
      id: "a",
      title: "foo",
      completed: true,
    },
    b: {
      id: "b",
      title: "bar",
      completed: true,
    },
    c: {
      id: "c",
      title: "quux",
      completed: false,
    },
  },
  doneTodos: derived(({ todos }: State) => {
    return Object.values(todos).filter((todo) => todo.completed);
  }),
};
