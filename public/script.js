var socket;

let player, enemy;

function setup() {
	createCanvas(400, 400);

	player = new Player();
	enemy = new Player();

	socket = io.connect('http://localhost:3000');
	socket.on('position', moveEnemy);
}

function draw() {
	background(51);
	player.draw();
	enemy.draw();
	socket.emit('position', { "x": player.x, "y": player.y });
}

class Player {
	constructor() {
		this.x = random(width);
		this.y = random(height);
	}

	draw() {
		fill(0, 0, 255);
		ellipse(this.x, this.y, 50, 50);
	}
}

function keyPressed() {
	if (key == 'w') {
		player.y -= 10;
	} else if (key == 's') {
		player.y += 10;
	} else if (key == 'a') {
		player.x -= 10;
	} else if (key == 'd') {
		player.x += 10;
	}
}

function moveEnemy(data) {
	enemy.x = data.x;
	enemy.y = data.y;
}