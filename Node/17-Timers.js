'use strict';

// 메모리 누수를 방지하기 위해 변수로 할당해서 사용
const timeoutObj = setTimeout(() => {
    console.log('first');
}, 0); // 1000: 최소 보장 시간 (1초 뒤에 실행하는 것을 보장, 1초 뒤 즉시 실행이 아님)

const immediateObj = setImmediate(() => {
    console.log('second');
});

const intervalObj = setInterval(() => {
    console.log('third');
}, 1000);

// 타이머 삭제
clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);
