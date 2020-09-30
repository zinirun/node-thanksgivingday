// ES6부터 OOP 개념의 Class가 추가됨

class cacheManager {
  // 생성자(비동기 async 사용 불가)
  constructor() {
    this.config = [];
  }

  addConfig(obj = {}) {
    this.config.push(obj);
  }

  getConfig() {
    return this.config;
  }
}

module.exports = cacheManager;
