// Remove all elements from an array that are of the same value as the arguments provided.
function destroyer(arr) {

  var args = new Set(Array.from(arguments).slice(1));
  return arr.filter(val => !args.has(val));
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
