const http = require('http');
const url = require('url');

const fibonacci = exports.fibonacci = function(n) {
    if(n===1 || n===2) return 1;
    else return fibonacci(n-1)+fibonacci(n+2);
}

http.createServer(function(req,res){
    const urlP = url.parse(req.url,true);
    let fibi;
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(urlP.query['n']){
        fibi = fibonacci(urlP.query['n']);
        res.end("Fibonacci "+urlP.query['n']+'='+fibi);
    }else{
        res.end('USAGE: http://127.0.0.1:8124?n=## where ## is the Fibonnacci number desired');
    }
}).listen(8124,'127.0.0.1');

console.log("Server running at http://127.0.0.1 ");