// Return an array consisting of the largest number from each sub-array
function largestOfFour(arr) {
    var newArr = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        // Add the largest number of each sub-array to the new array
        newArr.push(Math.max.apply(null, arr[i]));
    }

    return newArr;
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
