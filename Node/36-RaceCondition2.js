'use strict';

// 트랜잭션 (중간에 끼어들면 안되는 과정 - 은행 이체 등)

class Lock {
    constructor() {
        // 내부 변수는 underline 관습
        this._locked = false;
        this._waiting = [];
    }

    lock() {
        const unlock = () => {
            let nextResolve; // 다음 unlock할 대상
            if (this._waiting.length > 0) {
                nextResolve = this._waiting.pop(0); // deque
                nextResolve(unlock); // 내부적인 closure함수로 unlock 할 수 있음(lock 안에 unlock이 있는 이유)
            } else {
                this._locked = false;
            }
        };

        if (this._locked) {
            return new Promise((resolve) => {
                this._waiting.push(resolve); // 경쟁 상태를 봉쇄
            });
        } else {
            this._locked = true;
            return new Promise((resolve) => {
                resolve(unlock);
            });
        }
    }
}

let total = 0;

const getTotal = async () => {
    return total;
};

const setTotal = async (value) => {
    return value;
};

const increment = async (value, increment) => {
    return value + increment;
};

const account = new Lock();

const add = async () => {
    let current, newValue;
    // await이 필요한 코드 앞에서 lock 필요 (트랜잭션을 감싸면 됨)
    unlock = await account.lock();

    current = await getTotal();
    newValue = await increment(current, 20);

    await setTotal(newValue);

    await unlock();
};

const main = async () => {
    // tr1, tr2: 경쟁상태에 있음
    const transaction1 = add();
    const transaction2 = add();
    await transaction1;
    await transaction2;
    console.log(await getTotal());
};
