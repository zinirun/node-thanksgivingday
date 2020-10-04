// Javascript도 둘 이상의 동시 input에 대해 경쟁 상태가 존재함
// 실제 운용 환경에서 자주 발생하는 문제

// 자연수를 map 하는 경우 상관 없음
[0, 1, 2].map((item) => {});

// Promise 객체를 map 할 경우 문제가 됨
// forEach도 비동기 코드 XXX
[(Promise1, Promise2)].map((item) => {
    // 비동기 코드 XXX
    // await XXX
});

// map 대신 for-of 사용으로 비동기 코드 사용 해결

const arr = [Promise1, Promise2];

for (const item of arr) {
    // 비동기  코드 가능
}
