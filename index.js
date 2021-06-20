const express = require('express');
const socketIO = require('socket.io');

const app = express();

app.use(express.static('public'));

const server = app.listen(4000, () => {
    console.log('Server is running at port 4000');
});

// till this line our server is acting as unidirectional and now we will use socketIO to make it bidirectional.
const upgradedServer = socketIO(server);

upgradedServer.on('connection', (socket) => {
    console.log('Web socket connected ', socket.id);
    socket.on('sendingMessage', (data) => {
        upgradedServer.emit('broadcastMessage', data);
    });
});
