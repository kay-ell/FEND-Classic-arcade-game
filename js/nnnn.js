class Enemy {
	constructor(x, y, speed) {
		//properties
		this.x = x; // x position
		this.y = y + 60; // y position
		this.speed = speed; // speed in which the bug moves

		// The image/sprite for our enemires, this uses
		// a helper we've provided to easily load images
		this.sprite = 'images/enemy-bug.png';
		this.move = 101;
		this.endPoint = this.move * 5;
		this.startPos = -this.move;
	}

	//methods
	// Update the enemy's position, required method for the game
	// Parameter: dt, a time delta between ticks
	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for 
		// all computers.

		// If enemy is not passed boundary
		if (this.x < this.endPoint) {
			// Move forward
			// Increment x by speed * dt
			this.x += this.speed * dt; 
		} else { //else
			// reset pos to start
			this.x = this.startPos;
		}
	}

	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

}