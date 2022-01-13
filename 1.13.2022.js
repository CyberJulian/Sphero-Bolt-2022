async function startProgram() {
	playMatrixAnimation(0); /* This starts the animation program*/
}
registerMatrixAnimation({ /* This is the animaiton program*/
	frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 6, 1, 1, 6, 6, 6], [6, 6, 6, 1, 1, 6, 6, 6], [1, 6, 6, 6, 6, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]], [[6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 1, 1, 6, 6, 1, 1, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 1, 1, 1, 1, 1, 1, 6], [1, 6, 1, 1, 1, 1, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]], /* This is the frams of the program*/
	palette: [{ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 16, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }], /* This is the colour of the program frames*/
	fps: 1, /* This is the frames a second*/
	transition: MatrixAnimationTransition.None /* This is the transition animation*/
});
