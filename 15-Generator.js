'use strict';

function* log() {
  let idx = 0;
  while (true) {
    yield idx++;
  }
}

const gen = log();

// 한 라인에 대해서 next로 넘김

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
