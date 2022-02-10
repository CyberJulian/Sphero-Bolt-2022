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
	await roll(0, 200, 1)
	setMainLed({ r: 0, g: 0, b: 255})
	await spin (70, .1)
	await roll(60, 90, .3)
	await spin (44, .1)
	await spin (40, .1)
	await roll (160, 100, .6)
	stopRoll()
	await Sound.Water.BoatAngry.play(true)
	await roll (220, 90, .5)
	setMainLed ({r: 255, g: 0, b: 0})
	await roll (100, 90, .2)
	await roll (100, 30, 2)
	await roll (390, 23, 4)
	await roll (120, 20, 5)
	await Sound.Effects.Explosion.play(true)
	setMainLed({ r:0, g:255, b:0})
	await roll (50, 25, 3)
	await roll (-50, 200, 2)
	await Sound.Effects.Laser.play(true)
}
