/* Write a function which takes a ROT13 encoded string as input
	and returns a decoded string.
	All letters will be uppercase.
	Do not transform any non-alphabetic character (i.e. spaces, punctuation),
	but do pass them on.
 */
function rot13(str) {
	var codes = [],
			rotated = '';

	for (var i = 0, len = str.length; i < len; i++) {
		var currentCode = str.charCodeAt(i);
		if (currentCode >= 65 && currentCode <= 90) {
			if (currentCode < 78) {
				currentCode += 13;
			} else {
				currentCode -= 13;
			}
		}
		// Add the character from the shifted code
		rotated += String.fromCharCode(currentCode);
	}

	return rotated;
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");