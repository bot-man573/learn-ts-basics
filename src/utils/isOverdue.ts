import { Todo } from "../types";

export const isOverdue = (todo: Todo): boolean => {
  const currentTime = new Date();
  return currentTime > todo.deadline && !todo.isDone;
};