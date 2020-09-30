'use strict';

const cacheManager = require('./cache');

// 기존 모듈을 상속

class sessionManager extends cacheManager {}

const SessionManager = new sessionManager();
SessionManager.addConfig({
  token: 'ran',
});
const config = SessionManager.getConfig();
console.log(config);
