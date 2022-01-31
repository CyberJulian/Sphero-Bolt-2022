/*
Programmer: William Julian
Team Member: Becket Jacobs
Date: 1.26.2022
Program: We will be making a program to go through a Haunted Mansion Maze filled with Haunted
Sounds, Changing of colours, and other obstacles along the way using a Sphero Bolt and JavaScript
*/

async function startProgram() {
	await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true);
	setMainLed({ r: 90, g: 70, b: 0})
	await roll(0, 90, 1.4)
	setMainLed({ r: 0, g: 0, b: 255})
	await spin (70, 1)
	await roll(60, 90, .6)
	await spin (50, 1)
	await spin (40, 1)
	await roll (150, 90, .4)
	stopRoll()
	await Sound.Animal.play(true)
}

