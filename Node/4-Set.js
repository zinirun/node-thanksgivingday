'use strict';

// 중복되지 않는 자료구조 Set
const test = new Set();

test.add(1);
test.add(1);
test.add(2);
test.add(2);
test.add(3);

// 순회하는 방법: for ~ of
for (const item of test) {
  console.log(item);
}

// 존재 유무: has 메소드 사용
const ret = test.has(2);
console.log(ret);
