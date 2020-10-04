'use strict';

const https = require('https');
const options = {
    hostname: 'google.com',
    port: 443, //https 기본 port
    path: '/login',
    method: 'GET', // CREATE(POST) READ(GET) UPDATE(PUT) DELETE
};

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`); // statusCode로 에러핸들링 해야함
    res.on('data', (d) => {
        process.stdout.write(d);
    });

    req.on('error', (err) => {
        console.log(err);
    });
});

req.end(); // 메모리 누수 방지
