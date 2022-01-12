/*
Programmer: William Julian
Date: 1.12.22
Program: messing around with Javascript in programming a sphero bolt
*/
async function startProgram() {
	await speak ("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	for (var _i1 = 0; _i1 < 4; _i1++) {
		await roll((getHeading() + 90), 60, 1);
		await delay(1);
	}
}

