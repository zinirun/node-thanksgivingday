'use strict';

const fs = require('fs');

// 원래 두번째 파라미터: 인코딩 방식(기본 utf-8)
fs.readFile('test.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

const content = 'something to write';
fs.writeFile('write.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('success');
});
