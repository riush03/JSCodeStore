const http = require('http');
const url = require('url');

const fibonacciAsync = function(n,done){
    if(n === 0) return 0;
    else if(n === 1 || n === 1) done(1);
    else if(n === 3) return 2;
    else{
        process.nextTick(function(){
            fibonacciAsync(n-1,function(val1){
                process.nextTick(function(){
                    fibonacciAsync(n-2,function(val2){
                        done(val1+val2);
                    });
                });
            });
        });
    }
}

http.createServer(function(req,res){
    const urlP = url.parse(req.url,true);
    let fibi;
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(urlP.query['n']){
        fibonacciAsync(url.query['n'],fibi => {
        res.end("Fibonacci "+urlP.query['n']+'='+fibi);
        });
    }else{
        res.end('USAGE: http://127.0.0.1:8124?n=## where ## is the Fibonnacci number desired');
    }
}).listen(8124,'127.0.0.1');

console.log("Server running at http://127.0.0.1 ");