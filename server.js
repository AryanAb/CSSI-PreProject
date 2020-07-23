var express = require('express');
var socket = require('socket.io');

var app = express();

app.use(express.static('public'));

server = app.listen(3000, () => {
	console.log("Connected to port: http://localhost:3000");
});

var io = socket(server);

io.sockets.on('connection', socket => {

	socket.on('position', data => {
		socket.broadcast.emit('position', data);
	});

});