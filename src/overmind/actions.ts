import { Context } from ".";

export const resetTodos = ({ state }: Context) => {
  state.todos = {};
};
