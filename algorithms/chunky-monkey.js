// Split an array into groups the length of "size" and return them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {

    var splitArr = [],
        subArr;

    for (var i = 0, len = arr.length; i < len; i+=size) {
        subArr = arr.slice(i, i + size);
        splitArr.push(subArr);
    }

    return splitArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
