const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page');
    }
    else if(req.url === '/about'){
        res.end('Welcome to about us page');
    }
    else
        res.end('Oops no page found');
});
server.listen(5000);