import { Todo } from "./types";
import { isOverdue } from "./utils/isOverdue";

const todo1: Todo = {
  name: "TypeScriptの勉強",
  priority: 3,
  isDone: false,
  deadline: new Date(2023, 9, 11, 9, 45),
};

const judge = (todo: Todo): void => {
  const { deadline } = todo;
  console.log(isOverdue(todo)); // isOverdue関数を使用して結果を出力
};

judge(todo1);