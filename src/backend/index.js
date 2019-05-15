const http = require('http');

http.createServer((_, res) => {
    res.write('Blinkas web server');
    res.end();
}).listen(3000);
