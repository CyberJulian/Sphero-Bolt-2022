/*
Programmer: William Julian
Team Member: Becket Jacobs
Date: 1.26.2022
Program: We will be making a program to go through a Haunted Mansion Maze filled with Haunted
Sounds, Changing of colours, and other obstacles along the way using a Sphero Bolt and JavaScript
*/

async function startProgram() {
	await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true); // This makes the text start go accross the screen
	setMainLed({ r: 90, g: 70, b: 0}) // This makes the main led and orangeish colour
	await roll(0, 200, 1) // This makes the ball roll forward that distance in 1 second
	setMainLed({ r: 0, g: 0, b: 255}) // This sets the main led colour to blue
	await spin (70, .1) // This makes the ball spin 70 degrees in .1 seconds
	await roll(60, 90, .3) // This makes the ball roll and turn in .3 seconds
	await spin (44, .1) // This makes the ball spin 44 degrees in .1 seconds
	await spin (40, .1) // This makes the ball spin 40 degrees in .1 seconds
	await roll (160, 100, .6) // This makes the ball turn and roll that distance in .6 seconds
	stopRoll() // This makes the ball stop
	await Sound.Water.BoatAngry.play(true) // This plays a sound
	await roll (220, 90, .5) // This makes the ball turn and roll at that angle in .5 seconds
	setMainLed ({r: 255, g: 0, b: 0}) // This sets the main led to a red colour
	await roll (100, 90, .2) // This makes the ball roll forward and turn in .2 seconds
	await roll (100, 30, 2) // This makes the ball turn and roll at the given distance for 2 seconds
	await roll (390, 23, 4)  // This makes the ball turn and roll at the given distance for 4 seconds
	await roll (120, 20, 5)  // This makes the ball turn and roll at the given distance for 5 seconds
	await Sound.Effects.Explosion.play(true) // This plays a sound
	setMainLed({ r:0, g:255, b:0}) // This makes the main led green
	await roll (50, 25, 3)  // This makes the ball turn and roll at the given distance for 3 seconds
	await roll (-50, 200, 2)  // This makes the ball turn and roll at the given distance for 2 seconds
	await Sound.Effects.Laser.play(true) // This plays a sound
	setMainLed({ r: 255, g: 0, b: 255}) // This sets main led to purple
}
