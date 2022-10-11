const net = require("net");

//create a TCP server using node.js
const HOST_NAME = "localhost";
const PORT = 3000;

const socket = net.connect(PORT,HOST_NAME);

net.createServer((Socket)=>{
    console.log("Client connected.");
}).listen(PORT,HOST_NAME);

socket.write("World");

//some socket event listener
Socket.on("data",(name)=>{
    Socket.write("Hello ${name} !");
});