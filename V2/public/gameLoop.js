var intervalInMs = 1000;
var prevLoop = Date.now();


async function runLoop() {
	let actualInterval = Date.now() - prevLoop;
	prevLoop = Date.now();

	console.log("Loop");
	p0UpdateGenerators(actualInterval);
	updateInfo()

	setTimeout(() => {
		runLoop();
	}, 1000);
}