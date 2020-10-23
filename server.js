/* Laurent Boukhadcha */

const spawn = require('child_process').spawn;
const ws = require('ws');

const WSPORT = 3031; // ws port

const wss = new ws.Server({port: 3031}); // wss creation

const sockets = []; // array of sockets

wss.on('connection' , (socket, request) => { // on connection
    socket.send('hi from server'); // on connection open, we send hi
    sockets.push(socket); // we add the socket in the array of sockets
});

const program = spawn('node' , ['clock.js'] , {})// we launch the program using spawn
program.stdout.on('data' , (data) => {  // we take the data from stdout (there is also stdin + stderr + exit + close + disconnect events to take care)
    data = Buffer.from(data, 'utf-8').toString().trim(); // convert buffer to string
    console.log(data); // we log data server side
    for(const socket of sockets) { //we send the datas to every websockets in the array
        socket.send(data);
    }
})


// if you want to show if program exit => use program.on('close' , function)

