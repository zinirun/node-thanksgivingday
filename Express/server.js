'use strict';

const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const static = require('serve-static');

class ApiServer extends http.Server {
    constructor(config) {
        const app = express();
        super(app);
        this.config = config;
        this.app = app;
        this.currentConnects = new Set();
        this.busy = new WeakSet();
        this.stopping = false;
        this.app.static = static;
    }

    // Set Middleware
    async start() {
        this.app.use(helmet());
        this.app.use(cookieParser());
        this.app.use(bodyParser());
        this.app.use((err, req, res, next) => {
            console.error(`Internal Error: ${err}`);
            if (req) {
                console.log(req);
            }
            if (res) {
                console.log(res);
            }
            next();
        });

        // 정적 파일 처리
        this.app.use(
            this.app.static(path.join(__dirname, 'dist'), {
                setHeaders: (res, path) => {
                    res.setHeaders('Access-Control-Allow-Origin', '*');
                    res.setHeaders('Access-Control-Allow-Headers', '*');
                    res.setHeaders('Access-Control-Allow-Method', 'GET');
                },
            }),
        );
    }
}

const init = async (config = {}) => {
    const server = new ApiServer(config);
    return server.start();
};
