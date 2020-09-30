'use strict';

// every
const arr1 = [2, 3, 4];
const isBiggerThanOne = arr1.every((key) => key > 1);
console.log(isBiggerThanOne);

// find, includes
const arr2 = ['node.js', '올인원'];
console.log(arr2.find((key) => key === '올인원')); // 실제 데이터를 리턴
console.log(arr2.includes('node.js')); // 존재하는지 조건만을 리턴

// forEach
const arr3 = [1, 2, 3];
arr3.forEach((item) => console.log(item));

// Map
const a = [1, 2, 3];
const b = a.map((x) => x + 1);
console.log(b);

// Filter
const f = a.filter((x) => x > 1);
console.log(f);
