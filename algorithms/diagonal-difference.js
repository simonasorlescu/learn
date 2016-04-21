/* Given a square matrix of size N×N,
    calculate the absolute difference between the sums of its diagonals.
 */

function diagonalDifference(arr) {

    var primarySum = 0,
        secondarySum = 0;

    for (i = 0, len = arr.length; i < len; i++) {
       primarySum += arr[i][i];
       secondarySum += arr[i][len-i-1];
    }

    return Math.abs(primarySum - secondarySum);
}

diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]);