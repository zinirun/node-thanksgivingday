'use strict';

const numbers = [0, 1, 2, 3, 4, 5, 6];

// filter -> map과 동일한 로직
const res = numbers.reduce((tot, amt) => {
    if (amt > 0) {
        tot.push(amt);
    }
    return tot;
}, []); // tot를 []로 초기화

console.log(res); // 새로운 배열이 반환됨

// 실무 사용법
// 몇번 반복되었는지 count
const arr = ['pdf', 'html', 'html', 'gif', 'gif', 'gif'];
const res2 = arr.reduce((cnt, fileType) => {
    cnt[fileType] = (cnt[fileType] || 0) + 1; // undefined 핸들링
    return cnt;
}, {});

console.log(res2);
