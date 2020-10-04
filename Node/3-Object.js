'use strict';

const obj = {
  title: 'Node.js Study',
};

const newObj = {
  name: 'by zini',
};

const arr = [1, 2, 3];
const newArr = [4, 5, 6];

// Obejct.assign
const ret = Object.assign({}, obj, newObj); // 새로운 객체 생성
console.log(ret);

// Spread
const ret2 = { ...obj, ...newObj };
console.log(ret2);

const ret3 = [...arr, ...newArr];
console.log(ret3);
