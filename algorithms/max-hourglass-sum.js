/* Calculate the hourglass sum for every hourglass in a N*N 2D-array,
    then print the maximum hourglass sum.
    Graphical representation of hourglass:
    a b c
      d
    e f g
 */

function hourglass(arr) {
    var sum = 0,
        sums = [];

    for (var i = 0, len = arr.length; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[i + 2] && arr[j + 2]) {
                sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
                sums.push(sum);
            }
        }
    }

    return Math.max.apply(null, sums);
}

hourglass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]);