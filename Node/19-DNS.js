'use strict';

const dns = require('dns'); //dns: 기본 내장 모듈

dns.lookup('google.com', (err, address, family) => {
    console.log(`address: ${address}, family: ${family}`); // family: IPv4/IPv6..
});

dns.resolve4('google.com', (err, addresses) => {
    if (err) throw err;
    const res = JSON.stringify(addresses); //address 배열을 string화
    console.log(res);

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) throw err;

            console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`);
        });
    });
});
