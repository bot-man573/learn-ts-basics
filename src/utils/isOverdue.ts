import { Todo } from "../types";

export const isOverdue = (todo: Todo): boolean => {
  const currentTime = new Date();
  return currentTime > todo.deadline && !todo.isDone;
};

export const judgeOverdue = (todo: Todo): string => {
  const currentTime = new Date();
  const remainTimeDifference = todo.deadline.getTime() - currentTime.getTime();
  const hoursRemaining = Math.ceil(remainTimeDifference / (1000 * 60 * 60));
  const overTimeDifference = currentTime.getTime() - todo.deadline.getTime();
  const hoursOvering = Math.ceil(overTimeDifference / (1000 * 60 * 60));

  if (currentTime > todo.deadline && !todo.isDone) {
    return `【未】 ${todo.name}  （期限を ${hoursOvering} 時間超過）`;
  } else if (todo.isDone) {
    return `【済】${todo.name}` ;
  } else {
    return `【未】 ${todo.name} （期限まで残り ${hoursRemaining} 時間）`;
  }
};