import { Todo } from "./types";
import { isOverdue, judgeOverdue } from "./utils/isOverdue";

const todo1: Todo = {
  name: "基礎物理3の宿題",
  priority: 3,
  isDone: true,
  deadline: new Date(2025, 0, 15, 1, 45), // 月のインデックスは0から始まるため、1月は0
};

const todo2: Todo = {
  name: "基礎物理3の試験勉強",
  priority: 2,
  isDone: false,
  deadline: new Date(2025, 0, 17, 1, 45),
};

const judge = (todo: Todo): void => {
  console.log(`Deadline timestamp: ${todo.deadline.getTime()}`); // デバッグ用にタイムスタンプを出力
  console.log(isOverdue(todo)); // isOverdue関数を使用して結果を出力
  console.log(judgeOverdue(todo)); // judgeOverdue関数を使用して結果を出力
};

judge(todo1);
judge(todo2);