'use strict';

const http = require('http');
const fs = require('fs');


const server = http.createServer(function (request,response) {
    if (request.url !== '/'){
        const imageExtension = request.url.split('.')[1];
        const imageUrl = request.url.split('/')[1];
        const fail = 404;
        const successCode = 200;
        if (imageExtension === 'jpg'){ 
            fs.readFile(imageUrl, (err, data) => {
                if (err){
                    if (err.code === 'ENOENT'){
                        response.setHeader('Content-Type', 'text/plain');
                        response.writeHead(fail);
                        response.end(fail + ' Not Found');
                    }
                } else {
                    response.setHeader('Content-Type', 'image/jpeg');
                    response.writeHead(successCode);
                    response.end(data);   
                }                   
            });
        } else if (imageExtension === 'png'){
            fs.readFile(imageUrl, (err, data) => {
                if (err){
                    if (err.code === 'ENOENT'){
                        response.setHeader('Content-Type', 'text/plain');
                        response.writeHead(fail);
                        response.end(fail + ' Not Found');
                    }
                } else {
                    response.setHeader('Content-Type', 'image/png');
                    response.writeHead(successCode);
                    response.end(data);   
                } 
            });
        } else {
            response.setHeader('Content-Type', 'text/plain');
            response.writeHead(fail);
            response.end(fail + ' Not Found');
        }
    } 
});

const port = 9999;
server.listen(port);