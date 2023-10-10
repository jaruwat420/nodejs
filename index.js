const fs = require('fs');
const http = require('http');
const path = require('path');


const server = http.createServer((req, res) => {
    const {method, url} = req;

    try {
        fs.statSync('logs');

    } catch (error) {
        fs.mkdir('logs');
    }

    const logContent = `${new Date()} : ${method} ${url}\n`;
    fs.writeFileSync(path('logs', 'res.log'), logContent, { flag: 'a+'});

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end(`<h1>Hello world</h1>`)

});
server.listen(3000, ()=>{
    console.log(`server running on port 3000`);
});