const co = require('co');

// co 라이브러리로 제너레이터 함수 를 매핑
co(function* () {
    const a = Promise.resolve(1);
    const b = Promise.resolve(2);
    const c = Promise.resolve(3);
    const res = yield [a, b, c];
    console.log(res);
});
