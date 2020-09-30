'use strict';

// 비구조화

const obj = {
  title: 'node.js',
  value: 'study',
};

const arr = [0, 1, 2];

// ES6
// 객체의 비구조화
const { title, value } = obj;

console.log(title, value);

// 배열의 비구조화
const [, a, b] = arr; // 앞의 ,는 순서를 맞추기 위해

console.log(a, b);

// 이전 방식
// const title = obj.title;
// const value = obj.value;
