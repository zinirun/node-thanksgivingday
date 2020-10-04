// 메모리 누수
// 1. 불필요한 정보를 보존
// 2. 할당한 데이터를 비할당하지 않음

function study(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;

    // prototype 사용없이 함수 선언 -> 함수가 메모리상에 남아있을 수 있음
    this.func1 = () => {
        console.log();
    };
}

const problem = new study(undefined, undefined);
console.log(problem.func1());
