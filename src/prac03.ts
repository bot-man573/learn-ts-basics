import { Todo } from "./types";
import { isOverdue, judgeOverdue } from "./utils/isOverdue";

const todo1: Todo = {
  name: "TypeScriptの勉強",
  priority: 3,
  isDone: false,
  deadline: new Date(2025, 1, 16, 1, 45),
};

const judge = (todo: Todo): void => {
  console.log(isOverdue(todo)); // isOverdue関数を使用して結果を出力
  console.log(judgeOverdue(todo)); // judgeOverdue関数を使用して結果を出力
};

judge(todo1);