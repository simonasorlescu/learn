// Remove all elements from an array that are of the same value as the arguments provided.
function destroyer(arr) {
	var args = Array.from(arguments).slice(1),
		output = [];

	for (var i = 0, len = arr.length; i < len; i++) {
		// Check if element in array is equal to argument
		if (args.indexOf(arr[i]) === -1) {
			output.push(arr[i]);
		}
	}
	return output;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
