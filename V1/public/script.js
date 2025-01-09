var p0 = BigInt(0);
var p0_click = BigInt(1);
var p0_numGenerators = [BigInt(0)];
var scalar = BigInt(1);

let info_p0;


$(function() {// On Document Ready
	info_p0 = document.getElementById("p0_amount");
});


/*
	genPrice = <scalar>*((<curNum>+<genNum>)^2^<genNum>)+<scalar>*(100^<genNum>^1.1)+9
	generatedAmount = 10^<genNum>
*/

function pow(base,power) {
	total = BigInt(1);
	for(i=BigInt(0);i < power;i = i + BigInt(1)){
		console.log("loop");
		total = total * base;
	}
	return total;
}

function p0Click() {
	p0 = p0 + p0_click;
	updateInfo();
}

function p0CalcGenPrice(genNum, quantity) {
	return scalar*pow(p0_numGenerators[genNum]+BigInt(genNum),BigInt(Math.pow(2,genNum)))+scalar*BigInt(Math.pow(100,Math.pow(genNum,1.1)))+BigInt(9);
}

function p0BuyGenerator(genNum, quantity) {
	console.log("p0\nGen: "+genNum+"\nCurrent: "+p0_numGenerators[genNum]+" +"+quantity+"\nPrice: "+p0CalcGenPrice(genNum, quantity));
	price = p0CalcGenPrice(genNum, quantity);
	if(p0 >= price) {
		p0 -= price;
		p0_numGenerators[genNum]++;
	}
	updateInfo();
}

function updateInfo() {
	info_p0.innerHTML = "⓪ " + p0;
}

