'use strict';

const fs = require('fs');
const { promisify } = require('util'); // util 안에 promisify가 있음, 비구조화 방식으로 선언

const read = promisify(fs.readFile); // 파라미터 함수가 promise로 바뀌게 됨 (콜백이 프로미스로 바뀜)
const write = promisify(fs.writeFile);

const writeAndRead = async (data = '') => {
    try {
        await write('test.txt', data); // async - await => 해당 라인이 끝날때까지 멈춤
        const content = await read('test.txt', 'utf-8');
        console.log(`File Write/Read Success : ${content}`);
        return;
    } catch (e) {
        console.error(e);
    }
};

writeAndRead('Hello!');
