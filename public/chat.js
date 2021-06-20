const socketIO = io.connect('http://localhost:4000');

const username = document.getElementById('username');
const message = document.getElementById('message');
const button = document.getElementById('send');
const output = document.getElementById('output');
const handleSend = () => {
    console.log('send button clicked');
    socketIO.emit('sendingMessage', {
        message: message.value,
        username: username.value,
    });
};
button.addEventListener('click', handleSend);

socketIO.on('broadcastMessage', (data) => {
    const {message, username} = data;
    output.innerHTML += `<p><strong>${username}:</strong> ${message}</p>`
});