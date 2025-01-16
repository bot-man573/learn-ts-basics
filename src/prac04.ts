export {};
import { Todo } from "./types";

const todo: Todo = {
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2024, 9, 11, 9, 45),
};

const updateTodo: Todo = {
    ...todo,
    isDone: true,
};

console.log(todo !== updateTodo);