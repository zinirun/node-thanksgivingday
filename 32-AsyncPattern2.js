'use strict';

class DatabaseManager {
    // 생성자에서 비동기 함수를 접근
    // 생성자에서는 await 사용 불가능!!
    constructor(settings) {
        this.settings = settings;
        this.init = init; // Promise Cache (Pending 상태의 Promise) => 최초 1회만 init
    }

    query() {
        // QUERY('') Agnostic
    }

    // 최초 1회만 실행 (Promise의 특징) => Resolve된 값을 캐시화
    async init() {}

    async newMember() {
        await this.init(); // 두번 이상 호출하지 않음!
    }

    async deleteMember() {
        await this.init(); // 두번 이상 호출되지 않음!
    }
}
