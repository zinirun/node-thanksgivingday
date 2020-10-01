// Static Factory Method Pattern

class DatabaseManager {
    constructor() {}

    // 기존 constructor의 역할을 static method가 대체
    static async BUILD(settings) {
        const config = await this.init(settings);
        // 수행하고자 하는 비동기 작업들...
        return new DatabaseManager(config); // config 대신 [Promise]로 비동기 작업 결과들을 리턴 가능
    }

    query() {
        // QUERY('') Agnostic
    }

    // 최초 1회만 실행 (Promise의 특징)
    async init() {}

    async newMember() {}

    async deleteMember() {}
}

const manager = DatabaseManager.BUILD(settings);
