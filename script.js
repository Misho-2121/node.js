'use strict'

const http = require('http');
const ports = require('./testscript');

const server = http.createServer((req, res) => {
    if (rq.url == '/') {
        res.setHeader('content-type', 'text/html');

        res.end(`
            <!doctype html>
            <body>
            <h1> ${ports.upper(__dirname)} Some Header </h1>
            <h1> ${ports.lower(__dirname)} Some Header </h1>

                <p> what a body </p>
            </body
        `)
    } else {
        res.end('UNKNOWN');
    }
});


server.listen(8080, () => console.log('Stantard our server'));
