/* Suppose you have a String, S.
    You also have some String, R, that is the reverse of String S.
    S is funny if the condition |S[i]−S[i−1]|=|R[i]−R[i−1]| is true for every character i.

    Note: S[i] denotes the ASCII value of the ith 0-indexed character in S.
    The absolute value of an integer, x, is written as |x|.
*/

function funny(str) {
    var rev = str.split('').reverse().join(''),
        isFunny,
        diff1, diff2;

    for (var i = 1, len = str.length; i < len; i++) {
        diff1 = Math.abs(str[i].charCodeAt(0) - str[i-1].charCodeAt(0));
        diff2 = Math.abs(rev[i].charCodeAt(0) - rev[i-1].charCodeAt(0));

        if (diff1 !== diff2) {
            isFunny = 'Not Funny';
            break;
        } else {
            isFunny = 'Funny';
        }
    }
    return isFunny;
}

funny('acxz');