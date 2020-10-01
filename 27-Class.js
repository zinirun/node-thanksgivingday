'use strict';

// 26-Prototype을 class로 리팩토링

class fullstack {
    // await은 constructor에서 사용 불가 (Static Method Design Pattern을 사용할 것)
    constructor(backend, frontend) {
        this.backend = backend;
        this.frontend = frontend;
    }

    // class 내 함수는 함수이름만 선언하면 됨
    // Prototype과 달리 set 메소드에 파라미터 필요!
    getBackend = () => this.backend;
    setBackend = (backend) => (this.backend = backend);

    getFrontend = () => this.frontend;
    setFrontend = (frontend) => (this.frontend = frontend);
}

const Fullstack = new fullstack('javascript', 'javascript');
const b = Fullstack.getBackend();
const f = Fullstack.getFrontend();
console.log(b, f);
