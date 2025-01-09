var p0 = BigInt(10000);
var p0_click = BigInt(1);
var p0_numGenerators = [BigInt(0)];

function p0UpdateGenerators(timeInMs=1000) {
	for(genNum=0;genNum<p0_numGenerators.length;genNum++) {
		p0_generated = p0CalcGenPerInterval(genNum, timeInMs);

		p0 += p0_generated * p0_numGenerators[genNum];
	}
}

function p0CalcGenPerInterval(genNum, timeInMs=1000) {
	console.log(typeof genNum);
	console.log(genNum);
	return BigInt(Math.floor(Math.pow(10,genNum)));
}

function p0Click() {
	p0 = p0 + p0_click;
	updateInfo();
}

function p0CalcGenPrice(genNum, quantity) {
	if(!p0_numGenerators[genNum]) {
		p0_numGenerators[genNum] = BigInt(0);
	}
	return scalar*pow(p0_numGenerators[genNum]+BigInt(genNum),BigInt(Math.pow(2,genNum)))+scalar*BigInt(Math.pow(100,Math.pow(genNum,1.1)))+BigInt(9);
}

function p0BuyGenerator(genNum, quantity) {
	price = BigInt(p0CalcGenPrice(genNum, quantity));
	if(p0 >= price) {
		p0 -= price;
		p0_numGenerators[genNum]++;
		console.log("p0\nGen: "+genNum+"\nCurrent: "+p0_numGenerators[genNum]+" +"+quantity+"\nPrice: "+p0CalcGenPrice(genNum, quantity));
	} else {
		console.log("p0\nGen: "+genNum+"\nCurrent: "+p0_numGenerators[genNum]+" +0\nPrice: "+p0CalcGenPrice(genNum, quantity));
	}
	updateInfo();
}

function p0UpdateInfo() {
	info_p0.innerHTML = "⓪ " + p0;
	console.log(p0_numGenerators);

	for(i=0;i<p0_numGenerators.length;i++) {
		console.log("p0g"+i);
		if(!p0_numGenerators[i]) {
			p0_numGenerators[i] = BigInt(0);
		}
		document.getElementById("p0g"+i+"_have").innerHTML = p0_numGenerators[i];
		document.getElementById("p0g"+i+"_per-sec").innerHTML = p0CalcGenPerInterval(i)*p0_numGenerators[i];
		document.getElementById("p0g"+i+"_price").innerHTML = p0CalcGenPrice(i, BigInt(1));
	}

	if(p0_numGenerators[p0_numGenerators.length-1] != 0n) {
		p0_numGenerators.push(BigInt(0));
	}
}