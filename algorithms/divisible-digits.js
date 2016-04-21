/* Given an integer, N, traverse its digits and determine how many digits
    evenly divide N.

    Note: Each digit is considered to be unique,
    so each occurrence of the same evenly divisible digit should be counted.
 */

function countDigits(n) {
    var digits = n.toString().split(''),
        count = 0;

    for (var i = 0, len = digits.length; i < len; i++) {
        if (n % digits[i] === 0) count++;
    }

    return count;
}

countDigits(1012);