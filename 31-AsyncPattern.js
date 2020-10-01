'use strict';

class Sample {
    // Computed Property (계산된 속성)
    // 그때그때 다르게 생성자를 호출할 수 있음
    *[Symbol.iterator]() {
        let cnt = 0;
        yield cnt++;
    }
}

console.log(Array.from(Sample));
