'use strict';

const promise1 = new Promise((resolve, reject) => resolve('즉시 resolve 호출'));
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('3초 뒤에 resolve 호출'), 3000);
});

// Promise.all => 파라미터의 모든 프로미스가 완료될 때까지 기다림
Promise.all([promise1, promise2]).then((values) => console.log(values));

// 프로미스들의 모든 작업이 끝난 다음에 데이터를 가공할 수 있음 (실무에서 자주 쓰임)
