'use strict';

const EventEmitter = require('events'); // events: 기본 라이브러리

class ChatManager extends EventEmitter {}

const chatManager = new ChatManager();
chatManager.on('join', () => {
    console.log('new user joined');
});

chatManager.emit('join'); // 'join' Event 호출
