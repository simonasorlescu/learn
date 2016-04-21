/* A modified Kaprekar number is a positive whole number n with d digits,
    such that when we split its square into two pieces - a right hand piece r
    with d digits and a left hand piece l that contains the remaining d or d−1 digits,
    the sum of the pieces is equal to the original number (i.e. l + r = n).

    Note: r may have leading zeros.

    You are given two positive integers p and q, where p is lower than q.
    Write a program to determine how many Kaprekar numbers are there
    in the range between p and q (both inclusive).
*/

function kaprekar(p, q) {
    var isKaprekar,
        nums = [];

    for (p; p <= q; p++) {
        var square = (p*p).toString(),
            d = p.toString().length, // number of digits in p
            len = square.length, // number of digits in p squared
            even = len % 2 === 0, // check if number of digits is even or odd
            index = Math.floor(len/2),
            left,
            right;

        if (square.length === 1) left = '0';
        else left = square.substr(0, index);

        right = square.substr(index);

        if (parseInt(left, 10) + parseInt(right, 10) === p) {
            isKaprekar = true;
            nums.push(p);
        }
    }

    if (isKaprekar) console.log(nums);
    else console.log('INVALID RANGE');
}

kaprekar(1, 100);