export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";
import dayjs from "dayjs";

const dtFmt = "YYYY/MM/DD HH:mm";
const formattedTodos: string[] = initTodos.map((todo: Todo) => {
  const str =
    `<li>[${todo.id}] ${todo.name} 優先度${todo.priority} ` +
    `(期限${dayjs(todo.deadline).format(dtFmt)})` +
    (todo.isDone ? "【済】" : "") +
    "</li>";
  return str;
});

console.log(formattedTodos);