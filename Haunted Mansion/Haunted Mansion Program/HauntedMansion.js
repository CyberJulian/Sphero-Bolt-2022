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
	await roll(0, 100, 1.3)
	setMainLed({ r: 0, g: 0, b: 255})
}
