/* Write a function that takes two or more arrays and returns
    a new array of unique values in the order of the original provided arrays.
    The unique numbers should be sorted by their original order,
    but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr1, arr2, arr3) {
    var args = Array.from(arguments),
        arr = [];

    // Concatenate arrays
    var arr = args.reduce(function(prev, curr) {
        return prev.concat(curr);
    });

    // Remove duplicate values
    return arr.filter(function(val, index, self) {
        return self.indexOf(val) === index;
    });
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
