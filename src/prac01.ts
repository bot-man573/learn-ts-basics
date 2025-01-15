export {};
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/ja";

dayjs.extend(weekday);
dayjs.locale("ja");

const dtFmt = "YYYY/MM/DD(ddd) HH:mm";
const deadline: Date = new Date(2024, 10, 2, 11, 45);
const createdAt: Date = new Date(); // 引数なしで現在日時を取得

const str =
  `期限 ${dayjs(deadline).format(dtFmt)}` +
  `(登録日 ${dayjs(createdAt).format(dtFmt)})`;
console.log(str);