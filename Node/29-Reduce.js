'use strict';

const numbers = [10, 20, 30, 40];

// for loop보다 가독성 good
// 더하는 기능뿐 아니라 map, filter를 한번에 쓰는 등 기능이 많음
const sum = numbers.reduce((tot, val) => tot + val);
const avg = numbers.reduce((tot, val, idx, arr) => {
    tot += val;
    if (idx === arr.length - 1) {
        // 마지막 인덱스에서는 평균값 반환
        return tot / arr.length;
    } else {
        return tot;
    }
});

console.log(sum);
console.log(avg);
