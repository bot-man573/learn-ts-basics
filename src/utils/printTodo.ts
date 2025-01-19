import dayjs from "dayjs";
import { Todo } from "../types";

export const printTodo = ({name, priority, deadline, isDone}: Todo): void => {
  const todoSummary =
    `(優先度: ${priority}) ${name}` +
    ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}` +
    ` 進捗: ${isDone ? "完了" : "未完了"}`; 
  console.log(todoSummary);
};