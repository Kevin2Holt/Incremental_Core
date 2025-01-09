var scalar = BigInt(1);
let info_p0;

$(function () {//On document ready
	info_p0 = document.getElementById("p0_amount");
	updateInfo();
	runLoop();
});

function updateInfo() {
	info_p0.innerHTML = "⓪ " + p0;
	p0UpdateInfo();
}