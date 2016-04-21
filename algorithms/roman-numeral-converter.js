// Convert the given number into a roman numeral.

function convertToRoman(num) {

	var converted = [],
		arr = num.toString().split('').map(Number),
		len = arr.length,
		romans = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']];

	for (var i = len-1; i >= 0; i--) {
		var digit = arr[i],
		len2 = len-i-1;

		switch(digit) {
		case 1:
		case 2:
		case 3:
		converted.push(romans[len2][0].repeat(digit));
		break;
		case 4:
		converted.push(romans[len2][0] + romans[len2][1]);
		break;
		case 5:
		converted.push(romans[len2][1]);
		break;
		case 6:
		case 7:
		case 8:
		converted.push(romans[len2][1] + romans[len2][0].repeat(Math.abs(5-digit)));
		break;
		case 9:
		converted.push(romans[len2][0] + romans[len2][2]);
		}
	}

	return converted.reverse().join('');
}

convertToRoman(798);
