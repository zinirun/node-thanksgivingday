'use strict';

const arr = [1, 2, 0, -1, -2];

// some - 조건을 하나라도 만족하는지
const res = arr.some((key) => key < 0);
console.log(res);
