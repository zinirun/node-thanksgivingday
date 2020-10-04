'use strict';

// Prototype은 arrow function보다 원래 방식 나음

function fullstack(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;

    // 함수 내부의 함수: closure
    // Arrow Function은 this를 바인딩할 수 없음!
    fullstack.prototype.getBackend = () => this.backend;
    fullstack.prototype.setBackend = () => (this.backend = backend);

    fullstack.prototype.getFrontend = () => this.frontend;
    fullstack.prototype.setFrontend = () => (this.frontend = frontend);
}

const Fullstack = new fullstack('javascript', 'javascript');
Fullstack.getBackend();
Fullstack.getFrontend();
