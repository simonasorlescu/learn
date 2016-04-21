/* Given a base-10 integer, n, convert it to binary (base-2).
    Then find and print the base-10 integer denoting
    the maximum number of consecutive 1's in n's binary representation.
 */

function convert(n) {
    var maxLength = 0,
        currentLength = 0;

    while (n > 0) {
        if (n % 2 === 0) currentLength = 0;
        else currentLength++;

        if (currentLength > maxLength) maxLength = currentLength;
        n = Math.floor(n/2);
    }
    return maxLength;
}

convert(13);