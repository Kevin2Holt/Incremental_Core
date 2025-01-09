$(function () {//On document ready
	
});

function pow(base,power) {
	total = BigInt(1);
	for(i=BigInt(0);i < power;i = i + BigInt(1)){
		total = total * base;
	}
	return total/1n;
}

