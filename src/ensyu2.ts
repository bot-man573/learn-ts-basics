export {};

const priorities = [3, 1, 2, 1, 5]; // 1〜3の値が格納された配列

const formattedPriorities = priorities.map((priority) => { 
    if (priority === 1 ) {
        return '★ ★ ★ ';
    } else if (priority === 2) {
        return '★ ★ ';
    } else if (priority === 3) {
        return '★ ';
    } else {
        return '不正な値です';
    }
});

console.log(priorities);
console.log(formattedPriorities);