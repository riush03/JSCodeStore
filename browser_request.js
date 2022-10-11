//responding to a simple browser request

//load http module
const http = require('http');

//create http server
http.createServer((req,res)=>{
    //content header
    res.writeHead(200,{'content-type':'text/plain'});
    //write message and signal communication is complete
    res.end('Hello world');
}).listen(1337,"127.0.0.1");

console.log("server started on port 127.0.0.1");