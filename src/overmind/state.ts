type Todo = {
  id: string;
  title: string;
};

type State = {
  todos: Record<string, Todo>;
};

export const state: State = {
  todos: {},
};
